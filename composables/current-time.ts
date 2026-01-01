export const useCurrentTime = () => {
  const now = useNow()
  const nowFormatted = computed(() => {
    return new Intl.DateTimeFormat('hr-HR', {
      timeStyle: 'medium',
      timeZone: 'Europe/Zagreb',
    }).format(now.value)
  })

  return {
    now,
    nowFormatted,
    }
}
