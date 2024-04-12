<script lang="ts" setup>
import type { RouteLocationRaw } from '#vue-router';

const links: { to: RouteLocationRaw, label: string }[] = [
  { to: { name: 'index' }, label: 'Home' },
  { to: { name: 'about' }, label: 'About' },
  { to: { name: 'projects' }, label: 'Projects' },
  { to: { name: 'uses' }, label: 'Uses' },
  { to: { name: 'bookmarks' }, label: 'Bookmarks' },
]

const { toggleDark } = useTheme()

const activeLinkClass = '!text-foreground hover:text-foreground'
</script>

<template>
  <aside>
    <menu class="flex flex-col">
      <NuxtLink class="group mb-4" to="/">
        <span class="text-3xl font-medium font-display">
          <span class="text-muted-foreground">@</span>matijao
        </span>
      </NuxtLink>

      <NuxtLink
        v-for="link in links"
        :key="link.to.toString()"
        :to="link.to"
        class="text-muted-foreground hover:text-foreground/85 w-fit py-0.75 align-middle font-medium lowercase transition-all"
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
          class="text-default-800 dark:text-default-50 font-500 transition"
          @click="toggleDark"
        >
          <Icon
            name="ph:circle-half-fill"
            class="rotate-45 text-2xl transition-transform duration-300 ease-in-out hover:rotate-135"
          />
        </button>
        <button
          type="button"
          class="text-default-800 dark:text-default-50 text-sm font-500 transition"
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
