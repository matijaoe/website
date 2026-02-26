<script lang="ts" setup>
import type { RouteLocationNamedRaw, RouteLocationRaw } from '#vue-router'

const { toggleDark, isDark } = useTheme()

const route = useRoute()

const links: { to: RouteLocationNamedRaw, label: string }[] = [
  { to: { name: 'index' }, label: 'Home' },
  { to: { name: 'about' }, label: 'About' },
  { to: { name: 'projects' }, label: 'Projects' },
]

const activeLinkClass = '!text-foreground'
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <nav
        class="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex sm:hidden items-center gap-4 rounded-full border border-border bg-background/80 px-6 py-2.5 backdrop-blur-2xl backdrop-saturate-150"
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
            class="text-lg"
          />
        </Button>
      </nav>
    </Teleport>
  </ClientOnly>
</template>
