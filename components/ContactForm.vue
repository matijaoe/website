<script lang="ts" setup>
import { z } from 'zod'

const config = useRuntimeConfig()

const email = ref('')
const content = ref('')

const schema = z.object({
  email: z.string().email(),
  content: z.string().min(10),
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
  <div class="py-10 flex flex-col gap-4">
    <Input v-model="email" type="email" class="bg-input" placeholder="Email" />
    <Input v-model="content" type="text" class="bg-input" placeholder="Who hurt you?" />

    <div>
      <Button :disabled="!isValid" @click="sendEmail">
        send
      </Button>
    </div>
  </div>
</template>
