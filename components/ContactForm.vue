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
    <PageHeading>Contact</PageHeading>

    <div class="flex flex-col gap-4 mt-8 max-w-sm">
      <Input
        v-model="email"
        type="email"
        class="hover:bg-white/5 focus:bg-white/5 active:bg-white/5 hover:backdrop-blur-md focus:hover:backdrop-blur-md active:hover:backdrop-blur-md"
        placeholder="Email"
      />
      <Textarea
        v-model="content"
        type="text"
        class="hover:bg-white/5 focus:bg-white/5 active:bg-white/5 hover:backdrop-blur-md focus:hover:backdrop-blur-md active:hover:backdrop-blur-md"
        placeholder="Who hurt you?"
      />

      <div class="flex justify-end">
        <Button :disabled="!isValid" @click="sendEmail">
          Send
        </Button>
      </div>
    </div>
  </div>
</template>
