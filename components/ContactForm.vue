<script lang="ts" setup>
import { z } from 'zod'

const email = ref('')
const content = ref('')

const schema = z.object({
  email: z.string().email(),
  content: z.string().min(3),
})

const isValid = computed(() => {
  const res = schema.safeParse({ email: email.value, content: content.value })
  return !!res.success
})

const loading = ref(false)
const sendEmail = async () => {
  try {
    loading.value = true
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body: { email: email.value, content: content.value },
    })
    loading.value = false
    console.log(res)
  } catch (err) {
    console.log('Error sending email', err)
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
        <p>Hit me up</p>
      </template>

      <div class="flex flex-col gap-4">
        <Input
          v-model="email"
          type="email"
          class="hover:bg-white/5 focus:bg-white/5 active:bg-white/5 hover:backdrop-blur-md focus:hover:backdrop-blur-md active:hover:backdrop-blur-md"
          placeholder="email"
        />
        <Textarea
          v-model="content"
          type="text"
          rows="5"
          class="whitespace-pre-wrap hover:bg-white/5 focus:bg-white/5 active:bg-white/5 hover:backdrop-blur-md focus:hover:backdrop-blur-md active:hover:backdrop-blur-md"
          placeholder="Let me know how great I am..."
        />

        <div class="flex justify-end">
          <Button class="flex items-center gap-[6px]" @click="sendEmail">
            Send <Icon name="lucide:send" />
          </Button>
        </div>
      </div>
    </BaseRow>
  </div>
</template>
