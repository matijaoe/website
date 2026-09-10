<script lang="ts" setup>
import type { Project } from '~/models'

const props = defineProps<{
  project: Project
}>()

// Where the card leads, printed like an address bar: host and path, no scheme.
const address = computed(() => {
  const href = getPrimaryUrl(props.project)
  if (!href) {
    return undefined
  }
  const { host, pathname } = new URL(href)
  return `${host.replace(/^www\./, '')}${pathname.replace(/\/$/, '')}`
})
</script>

<template>
  <!-- Stands in for a screenshot: the name set large and faint, like a
       blind-embossed cover, over the same drifting dot grid. -->
  <div class="relative h-full overflow-hidden bg-[hsl(var(--background-alt))] placeholder-pattern">
    <span
      v-if="address"
      class="absolute left-3 top-2.5 max-w-[calc(100%_-_1.5rem)] truncate font-mono text-[11px] lowercase text-muted-foreground/70"
    >
      {{ address }}
    </span>
    <span
      aria-hidden="true"
      class="absolute bottom-0 left-3 translate-y-[0.22em] whitespace-nowrap font-display text-7xl leading-none text-foreground/10"
    >
      {{ project.name }}
    </span>
  </div>
</template>
