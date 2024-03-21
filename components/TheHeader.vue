<script lang="ts" setup>
import type { RouteLocationRaw } from '#vue-router'

const links: { to: RouteLocationRaw, label: string }[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/uses', label: 'Uses' },
  { to: '/bookmarks', label: 'Bookmarks' },
]

const { toggleDark } = useTheme()

const logoLinkEl = ref<HTMLElement>()
const isLogoLinkElHovered = useElementHover(logoLinkEl)
</script>

<template>
  <header>
    <menu class="row flex items-center justify-between px-4 py-6">
      <NuxtLink ref="logoLinkEl" class="text-rich" to="/">
        <Icon v-show="!isLogoLinkElHovered" name="ph:cursor-click" class="text-2xl" />
        <ClientOnly>
          <Icon v-show="isLogoLinkElHovered" name="ph:cursor-click-fill" class="text-2xl" />
        </ClientOnly>
      </NuxtLink>

      <div class="flex items-center gap-2">
        <nav class="flex items-center gap-2">
          <NavLink
            v-for="link in links"
            :key="link.to.toString()"
            :to="link.to"
          >
            {{ link.label }}
          </NavLink>
        </nav>

        <button
          type="button"
          class="px-1 py-2 text-sm text-default-800 font-500 transition dark:text-default-50"
          @click="toggleDark"
        >
          <Icon
            name="ph:circle-half-fill"
            class="rotate-45 text-2xl transition-transform duration-300 ease-in-out hover:rotate-135"
          />
        </button>
      </div>
    </menu>
  </header>
</template>
