<script lang="ts" setup>
const props = withDefaults(defineProps<{
  /** Roughly how many list rows stay visible while collapsed. */
  rows?: number
  label?: string
}>(), {
  rows: 4,
  label: 'Show all',
})

const expanded = ref(false)

const content = useTemplateRef<HTMLElement>('content')
const { height } = useElementSize(content)

const collapsedHeight = computed(() => `${props.rows * 2.25}em`)
</script>

<template>
  <div>
    <div
      class="overflow-hidden transition-[max-height] duration-500 ease-out motion-reduce:transition-none"
      :class="{ 'reveal-fade': !expanded }"
      :style="{ maxHeight: expanded ? `${height}px` : collapsedHeight }"
    >
      <!-- flow-root keeps child margins inside the measured box, so the
           expanded max-height covers the whole list instead of clipping it -->
      <div ref="content" class="flow-root">
        <slot />
      </div>
    </div>

    <!-- Expanding is one-way: once the whole list is out there is nothing
         worth collapsing back, and the button disappearing says so. -->
    <button
      v-if="!expanded"
      class="not-prose mt-2 inline-flex items-center gap-1 font-mono lowercase text-sm text-foreground/40 hover:text-foreground transition-colors"
      @click="expanded = true"
    >
      {{ label }}
      <Icon name="lucide:chevron-down" />
    </button>
  </div>
</template>

<style scoped>
.reveal-fade {
  mask-image: linear-gradient(to bottom, black 45%, transparent 100%);
}
</style>
