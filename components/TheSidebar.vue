<script lang="ts" setup>
import type { RouteLocationRaw } from '#vue-router'

const links: { to: RouteLocationRaw, label: string }[] = [
  { to: { name: 'index' }, label: 'Home' },
  { to: { name: 'about' }, label: 'About' },
  { to: { name: 'projects' }, label: 'Projects' },
  { to: { name: 'uses' }, label: 'Uses' },
  { to: { name: 'bookmarks' }, label: 'Bookmarks' },
]

const { toggleDark } = useTheme()

const activeLinkClass = '!text-default-900 !dark:text-default-50'
</script>

<template>
  <aside>
    <menu class="flex flex-col items-end text-right">
      <NuxtLink class="group mb-4 text-rich" to="/">
        <span class="text-3xl font-medium font-display">
          <span class="text-dim">@</span>matijao
        </span>
      </NuxtLink>

      <NuxtLink
        v-for="link in links"
        :key="link.to.toString()"
        :to="link.to"
        class="w-fit py-0.75 align-middle text-default-900/60 font-medium lowercase transition-all dark:text-default-50/50 hover:text-default-900/90 hover:dark:text-default-50/75"
        :active-class="activeLinkClass"
        :class="{ [activeLinkClass]: $route.name.startsWith(link.to.name) }"
      >
        <slot>
          {{ link.label }}
        </slot>
      </NuxtLink>

      <div class="mt-4 flex items-center gap-3">
        <button
          type="button"
          class="text-default-800 font-500 transition dark:text-default-50"
          @click="toggleDark"
        >
          <Icon
            name="ph:circle-half-fill"
            class="rotate-45 text-2xl transition-transform duration-300 ease-in-out hover:rotate-135"
          />
        </button>
        <button
          type="button"
          class="text-sm text-default-800 font-500 transition dark:text-default-50"
        >
          <Icon
            name="lucide:search"
            class="text-2xl"
          />
        </button>
      </div>
    </menu>
  </aside>
</template>
