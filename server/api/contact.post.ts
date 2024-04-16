import { Resend } from 'resend'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { email, subject, content } = await readValidatedBody(event, z.object({
    email: z.string().email().optional(),
    subject: z.string().optional(),
    content: z.string().min(1),
  }).parse)

  const config = useRuntimeConfig()
  const resend = new Resend(config.resendApiKey)

  const res = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'github@matijao.com',
    reply_to: email,
    subject: subject || 'New Contact Form Submission',
    html: `<p>${content}</p>`,
  })

  return res
})
