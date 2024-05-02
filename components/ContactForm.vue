<script lang="ts" setup>
import { z } from 'zod'
import { useToast } from './ui/toast'

const form = reactive({ email: '', content: '' })
const clearForm = () => {
  form.email = ''
  form.content = ''
}

const schema = z.object({
  email: z.string().email(),
  content: z.string().min(3),
})

const isValid = computed(() => {
  const res = schema.safeParse({ email: form.email, content: form.content })
  return !!res.success
})

const { toast } = useToast()
const validate = ref(false)

const loading = ref(false)
const sendEmail = async () => {
  validate.value = true
  if (!isValid.value) {
    return
  }

  try {
    loading.value = true
    await $fetch('/api/contact', {
      method: 'POST',
      body: { email: form.email, content: form.content },
    })
    loading.value = false
    toast({
      title: 'Email sent!',
      description: 'I will get back to you as soon as possible.',
      duration: 5000,
    })
    clearForm()
    validate.value = false
  } catch (err) {
    console.error('Error sending email', err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="py-10">
    <h2 class="mb-4 text-3xl font-medium font-display">
      Contact
    </h2>

    <BaseRow>
      <template #label>
        <div class="mr-12">
          <p>
            Want to work with me?
            <br>
            Send a message to <NuxtLink class="underline" to="mailto:hello@matijao.com" external target="_blank">
              hello@matijao.com{{ }}
            </NuxtLink>

            or use the contact form.
          </p>
        </div>
      </template>

      <div class="flex flex-col gap-4">
        <Input
          v-model="form.email"
          type="email"
          class="hover:bg-white/5 focus:bg-white/5 active:bg-white/5 hover:backdrop-blur-2xl focus:hover:backdrop-blur-2xl active:hover:backdrop-blur-2xl"
          :class="{
            'border-destructive !bg-destructive/5 text-destructive dark:text-foreground': validate && !isValid,
          }"
          placeholder="you@something.com"
          size="lg"
        />
        <Textarea
          v-model="form.content"
          type="text"
          rows="5"
          class="whitespace-pre-wrap hover:bg-white/5 focus:bg-white/5 active:bg-white/5 hover:backdrop-blur-2xl focus:hover:backdrop-blur-2xl active:hover:backdrop-blur-2xl"
          :class="{
            'border-destructive !bg-destructive/5 text-destructive dark:text-foreground': validate && !isValid,
          }"
          placeholder="Howdy"
          size="lg"
        />

        <div class="flex justify-end">
          <Button
            :loading="loading"
            icon="lucide:send"
            size="lg"
            @click="sendEmail"
          >
            Send
          </Button>
        </div>
      </div>
    </BaseRow>
  </div>
</template>
