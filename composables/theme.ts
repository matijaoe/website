export const useTheme = () => {
  const colorMode = useColorMode()

  const isDark = computed(() => colorMode.value === 'dark')

  const toggleDark = () => {
    colorMode.preference = isDark.value ? 'light' : 'dark'
  }

  const setMode = (mode: 'dark' | 'light') => {
    colorMode.preference = mode
  }

  return {
    isDark,
    toggleDark,
    setMode,
  }
}
