<script lang="ts" setup>
import type { RouteLocationNamedRaw } from '#vue-router'

const { toggleDark, isDark } = useTheme()

const route = useRoute()
const links: { to: RouteLocationNamedRaw, label: string, key: string }[] = [
  { to: { name: 'index' }, label: 'Home', key: 'H' },
  { to: { name: 'about' }, label: 'About', key: 'A' },
  { to: { name: 'projects' }, label: 'Projects', key: 'P' },
]

const { display: handleDisplay, scramble: handleScramble } = useTextScramble('@matijao', { delay: 0, speed: 50 })

onMounted(handleScramble)

const { H, A, P } = useMagicKeys({
  passive: false,
})

watch(H!, () => navigateTo('/'))
watch(A!, () => navigateTo('/about'))
watch(P!, () => navigateTo('/projects'))

const activeLinkClass = '!text-foreground hover:text-foreground'
</script>

<template>
  <header class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div class="flex items-center justify-between">
      <NuxtLink to="/" class="font-mono text-[17px] leading-7 flex items-center gap-1.5" @mouseenter="handleScramble">
        {{ handleDisplay }}
      </NuxtLink>

      <div class="flex items-center gap-5 md:hidden">
        <BaseTooltip>
          <template #content>
            <BaseKbd :keys="['⌘', 'J']" />
          </template>
          <Button
            variant="link"
            size="icon"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleDark"
          >
            <Icon
              name="custom:half-circle"
              class="text-[24px] transition-transform duration-300 ease-in-out dark:rotate-180"
            />
          </Button>
        </BaseTooltip>
      </div>
    </div>

    <menu class="flex items-center gap-3 md:gap-5">
      <div class="flex items-center gap-4 md:gap-6">
        <template v-for="link in links" :key="link.to.toString()">
          <BaseTooltip>
            <template #content>
              <BaseKbd :keys="[link.key]" />
            </template>
            <NuxtLink
              :to="link.to.path"
              class="text-lg text-muted-foreground hover:text-foreground/85 w-fit py-[0.2rem] align-middle font-medium lowercase transition-all"
              :active-class="activeLinkClass"
              :class="{ [activeLinkClass]: route.name?.toString().startsWith(link.to.name as string) }"
            >
              {{ link.label }}
            </NuxtLink>
          </BaseTooltip>
        </template>
      </div>

      <div class="hidden md:block">
        <BaseTooltip>
          <template #content>
            <div class="flex items-center gap-1.5">
              Switch theme
              <span class="text-muted-foreground">·</span>
              <BaseKbd :keys="['⌘', 'J']" />
            </div>
          </template>
          <Button
            variant="link"
            size="icon"
            class="flex items-center justify-center"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleDark"
          >
            <Icon
              name="custom:half-circle"
              class="text-[22px] transition-transform duration-300 ease-in-out dark:rotate-180"
            />
          </Button>
        </BaseTooltip>
      </div>
    </menu>
  </header>
</template>
