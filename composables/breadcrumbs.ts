export const useBreadcrumbs = () => {
  const route = useRoute()
  const router = useRouter()

  const breadcrumbs = computed(() => {
    const parts = route.path.split('/').filter(Boolean)
    const res = parts.map((part, index) => {
      const path = `/${parts.slice(0, index + 1).join('/')}`
      const resolvedRoute = router.resolve(path)
      return {
        name: part === '/' ? 'Home' : part,
        path: resolvedRoute.path,
      }
    }).filter(Boolean)
    res.unshift({
      name: 'home',
      path: '/',
    })
    return res
  })

  const isHome = computed(() => route.path === '/')

  return {
    breadcrumbs,
    isHome,
  }
}
