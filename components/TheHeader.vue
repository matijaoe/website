<script lang="ts" setup>
import type { RouteLocationRaw } from '#vue-router'

const links: { to: RouteLocationRaw, label: string }[] = [
  { to: { name: 'index' }, label: 'Home' },
  { to: { name: 'about' }, label: 'About' },
  { to: { name: 'projects' }, label: 'Projects' },
  { to: { name: 'uses' }, label: 'Uses' },
  // { to: { name: 'bookmarks' }, label: 'Bookmarks' },
]

const { toggleDark } = useTheme()
// const { toggle } = useCmd()

const activeLinkClass = '!text-foreground hover:text-foreground'
</script>

<template>
  <header class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div class="flex items-center justify-between">
      <NuxtLink to="/" class="font-mono text-[17px] ">
        @matijao
      </NuxtLink>

      <div class="flex md:hidden items-center gap-5">
        <!-- <Button
          variant="link"
          size="icon"
          @click="toggle()"
        >
          <Icon
            name="lucide:search"
            class="text-[24px]"
          />
        </Button> -->

        <BaseTooltip>
          <!-- TODO: implement Kbd component -->
          <template #content>
            ⌘ J
          </template>
          <Button
            variant="link"
            size="icon"
            @click="toggleDark"
          >
            <Icon
              name="ph:circle-half-fill"
              class="rotate-45 text-[24px] transition-transform duration-300 ease-in-out hover:rotate-135"
            />
          </Button>
        </BaseTooltip>
      </div>
    </div>

    <menu class="flex items-end gap-4 md:gap-6">
      <NuxtLink
        v-for="link in links"
        :key="link.to.toString()"
        :to="link.to"
        class="text-lg text-muted-foreground hover:text-foreground/85 w-fit py-[0.2rem] align-middle font-medium lowercase transition-all"
        :active-class="activeLinkClass"
        :class="{ [activeLinkClass]: $route.name.startsWith(link.to.name) }"
      >
        <slot>
          {{ link.label }}
        </slot>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-5">
        <!-- <Button
          variant="link"
          size="icon"
          @click="toggle()"
        >
          <Icon
            name="lucide:search"
            class="text-[24px]"
          />
        </Button> -->

        <BaseTooltip>
          <!-- TODO: implement Kbd component -->
          <template #content>
            ⌘ J
          </template>
          <Button
            variant="link"
            size="icon"
            @click="toggleDark"
          >
            <Icon
              name="ph:circle-half-fill"
              class="rotate-45 text-[24px] transition-transform duration-300 ease-in-out hover:rotate-135"
            />
          </Button>
        </BaseTooltip>
      </div>
    </menu>
  </header>
</template>
