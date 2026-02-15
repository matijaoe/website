export function usePageReveal() {
  const revealed = useState('page-reveal', () => false)

  function trigger() {
    if (revealed.value) return
    requestAnimationFrame(() => {
      revealed.value = true
    })
  }

  return { revealed, trigger }
}
