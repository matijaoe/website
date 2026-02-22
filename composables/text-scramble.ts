const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*'
const PRESERVE = /[\s,:@./]/

function runScramble(
  text: string,
  display: Ref<string>,
  speed: number,
  onDone?: () => void,
) {
  const letterFrames = text.split('').map((char, i) => {
    if (PRESERVE.test(char)) { return 0 }
    return Math.round(8 + i * 3 + Math.random() * 4)
  })
  const totalFrames = Math.max(...letterFrames, 18)
  let frame = 0

  display.value = text.split('').map((char) =>
    PRESERVE.test(char) ? char : CHARS[Math.floor(Math.random() * CHARS.length)],
  ).join('')

  const interval = setInterval(() => {
    display.value = text.split('').map((char, i) => {
      if (PRESERVE.test(char)) { return char }
      if (frame >= letterFrames[i]) { return char }
      return CHARS[Math.floor(Math.random() * CHARS.length)]
    }).join('')

    frame++
    if (frame > totalFrames) {
      clearInterval(interval)
      display.value = text
      onDone?.()
    }
  }, speed)

  return interval
}

function deterministicScramble(text: string): string {
  return text.split('').map((char, i) =>
    PRESERVE.test(char) ? char : CHARS[(i * 17 + 5) % CHARS.length],
  ).join('')
}

export function useTextScramble(text: string, options?: { delay?: number, speed?: number, scrambleInitial?: boolean }) {
  const display = ref(options?.scrambleInitial ? deterministicScramble(text) : text)
  const isComplete = ref(false)
  const delay = options?.delay ?? 0
  const speed = options?.speed ?? 60
  let activeInterval: ReturnType<typeof setInterval> | null = null

  function scramble() {
    if (!import.meta.client) { return }
    if (activeInterval) { return }

    setTimeout(() => {
      activeInterval = runScramble(text, display, speed, () => {
        activeInterval = null
        isComplete.value = true
      })
    }, delay)
  }

  return { display, isComplete, scramble }
}

export function useReactiveScramble(source: MaybeRefOrGetter<string>, options?: { speed?: number }) {
  const speed = options?.speed ?? 65
  const display = ref(toValue(source))
  let interval: ReturnType<typeof setInterval> | null = null

  if (import.meta.client) {
    watch(() => toValue(source), (text) => {
      if (!text) { return }
      if (interval) { clearInterval(interval) }
      interval = runScramble(text, display, speed, () => {
        interval = null
      })
    }, { immediate: true })
  }

  return display
}
