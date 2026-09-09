// Constructing a formatter is the expensive part, so build it once rather than
// on every tick.
const TIME_FORMAT = new Intl.DateTimeFormat('hr-HR', {
  timeStyle: 'medium',
  timeZone: 'Europe/Zagreb',
})

export const useCurrentTime = () => {
  // useNow defaults to requestAnimationFrame; the badge only shows seconds, so
  // that re-formats 60+ times a second to render the same string.
  const now = useNow({ interval: 1000 })
  const nowFormatted = computed(() => TIME_FORMAT.format(now.value))

  return {
    now,
    nowFormatted,
  }
}
