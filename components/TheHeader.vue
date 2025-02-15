<script lang="ts" setup>
import type { RouteLocationRaw } from '#vue-router'

const { toggleDark } = useTheme()

const route = useRoute()
const links: { to: RouteLocationRaw, label: string, key: string }[] = [
  { to: { name: 'index' }, label: 'Home', key: 'H' },
  { to: { name: 'about' }, label: 'About', key: 'A' },
  { to: { name: 'projects' }, label: 'Projects', key: 'P' },
  { to: { name: 'uses' }, label: 'Uses', key: 'U' },
]

const { H, A, P, U } = useMagicKeys({
  passive: false,
})

watch(H, () => navigateTo('/'))
watch(A, () => navigateTo('/about'))
watch(P, () => navigateTo('/projects'))
watch(U, () => navigateTo('/uses'))

const activeLinkClass = '!text-foreground hover:text-foreground'
</script>

<template>
  <header class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div class="flex items-center justify-between">
      <NuxtLink to="/" class="font-mono text-[17px] flex items-center gap-1.5">
        @matijao
      </NuxtLink>

      <div class="flex md:hidden items-center gap-5 translate-y-1">
        <BaseTooltip>
          <!-- TODO: implement Kbd component -->
          <template #content>
            ⌘ J
          </template>
          <Button
            variant="link"
            size="icon"
            class="translate-y-0.5"
            @click="toggleDark"
          >
            <Icon
              name="ph:yin-yang-fill"
              class="text-[24px] transition-transform duration-300 ease-in-out hover:rotate-90 dark:rotate-180 hover:dark:rotate-[270deg]"
            />
          </Button>
        </BaseTooltip>
      </div>
    </div>

    <menu class="flex items-end gap-4 md:gap-6">
      <template v-for="link in links" :key="link.to.toString()">
        <BaseTooltip>
          <template #content>
            <span class="text-muted-foreground font-mono font-normal lowercase">
              [<span class="!text-primary-foreground">{{ link.key }}</span>]
            </span>
          </template>
          <NuxtLink
            :to="link.to"
            class="text-lg text-muted-foreground hover:text-foreground/85 w-fit py-[0.2rem] align-middle font-medium lowercase transition-all"
            :active-class="activeLinkClass"
            :class="{ [activeLinkClass]: route.name.startsWith(link.to.name) }"
          >
            {{ link.label }}
          </NuxtLink>
        </BaseTooltip>
      </template>

      <div class="hidden md:flex items-center gap-5">
        <BaseTooltip>
          <!-- TODO: implement Kbd component -->
          <template #content>
            ⌘ J
          </template>
          <Button
            variant="link"
            size="icon"
            class="translate-y-0.5"
            @click="toggleDark"
          >
            <Icon
              name="ph:yin-yang-fill"
              class="text-[24px] transition-transform duration-300 ease-in-out hover:rotate-90 dark:rotate-180 hover:dark:rotate-[270deg]"
            />
          </Button>
        </BaseTooltip>
      </div>
    </menu>
  </header>
</template>
