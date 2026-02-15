export function useTextScramble(text: string, options?: { delay?: number, speed?: number }) {
  const { revealed } = usePageReveal()
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*'
  const display = ref(text)
  const isComplete = ref(false)
  const delay = options?.delay ?? 0
  const speed = options?.speed ?? 30

  if (revealed.value) {
    isComplete.value = true
    return { display, isComplete }
  }

  if (import.meta.client) {
    const stop = watch(revealed, (val) => {
      if (!val) return
      stop()

      display.value = text.replace(/[^\s,:@.]/g, () => chars[Math.floor(Math.random() * chars.length)])

      setTimeout(() => {
        let frame = 0
        const totalFrames = text.length * 2

        const interval = setInterval(() => {
          const revealIndex = Math.floor((frame / totalFrames) * text.length)

          display.value = text.split('').map((char, i) => {
            if (/[\s,:@.]/.test(char)) return char
            if (i < revealIndex) return char
            return chars[Math.floor(Math.random() * chars.length)]
          }).join('')

          frame++
          if (frame >= totalFrames) {
            clearInterval(interval)
            display.value = text
            isComplete.value = true
          }
        }, speed)
      }, delay)
    })
  }

  return { display, isComplete }
}
