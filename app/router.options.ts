import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    // scroll to hash, useful for using to="#some-id" in NuxtLink
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    if (to.name === from.name) {
      return {
        left: 0,
        top: 0,
        behavior: 'smooth',
      }
    }

    if (savedPosition) {
      return savedPosition
    }

    return {
      left: 0,
      top: 0,
      behavior: 'auto',
    }
  },
}
