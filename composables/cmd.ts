export const useCmd = () => {
  const isOpen = useState('cmd-open', () => false)

  const _toggle = useToggle(isOpen)

  const launch = () => _toggle(true)
  const close = () => _toggle(false)
  const toggle = () => _toggle()

  return {
    isOpen,
    launch,
    close,
    toggle,
  }
}
