<script lang="ts" setup>
import type { RouteLocationNamedRaw, RouteLocationRaw } from '#vue-router'
import { motion } from 'motion-v'

const { toggleDark, isDark } = useTheme()

const route = useRoute()

const links: { to: RouteLocationNamedRaw, label: string }[] = [
  { to: { name: 'index' }, label: 'Home' },
  { to: { name: 'about' }, label: 'About' },
  { to: { name: 'projects' }, label: 'Projects' },
]

const activeLinkClass = '!text-foreground'

const { y } = useWindowScroll()
const isHidden = ref(false)
const peakY = ref(0)

watch(y, (newY) => {
  if (isHidden.value) {
    peakY.value = Math.max(peakY.value, newY)
    if (peakY.value - newY > 5) {
      isHidden.value = false
      peakY.value = newY
    }
  } else {
    peakY.value = Math.min(peakY.value, newY)
    if (newY - peakY.value > 30) {
      isHidden.value = true
      peakY.value = newY
    }
  }
})
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <motion.nav
        class="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex md:hidden items-center gap-4 rounded-full border border-border/50 bg-background/80 px-6 py-2.5 shadow-sm backdrop-blur-lg"
        :animate="{ y: isHidden ? 'calc(100% + 2rem)' : 0 }"
        :transition="{ type: 'spring', stiffness: 350, damping: 30 }"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to as RouteLocationRaw"
          class="text-[15px] text-muted-foreground font-medium lowercase transition-colors"
          :active-class="activeLinkClass"
          :class="{ [activeLinkClass]: route.name?.toString().startsWith(link.to.name as string) }"
        >
          {{ link.label }}
        </NuxtLink>

        <div class="h-4 w-px bg-border/60" />

        <Button
          variant="link"
          size="icon"
          class="-ml-1.5 size-7"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleDark"
        >
          <Icon
            name="custom:half-circle"
            class="text-xl transition-transform duration-300 ease-in-out dark:rotate-180"
          />
        </Button>
      </motion.nav>
    </Teleport>
  </ClientOnly>
</template>
