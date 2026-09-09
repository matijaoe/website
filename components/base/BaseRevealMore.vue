<script lang="ts" setup>
const props = withDefaults(defineProps<{
  /** Roughly how many list rows stay visible while collapsed. */
  rows?: number
  moreLabel?: string
  lessLabel?: string
}>(), {
  rows: 4,
  moreLabel: 'Show more',
  lessLabel: 'Show less',
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

    <button
      class="not-prose mt-2 inline-flex items-center gap-1 font-mono lowercase text-sm text-foreground/40 hover:text-foreground transition-colors"
      :aria-expanded="expanded"
      @click="expanded = !expanded"
    >
      {{ expanded ? lessLabel : moreLabel }}
      <Icon
        name="lucide:chevron-down"
        class="transition-transform duration-300 motion-reduce:transition-none"
        :class="{ 'rotate-180': expanded }"
      />
    </button>
  </div>
</template>

<style scoped>
.reveal-fade {
  mask-image: linear-gradient(to bottom, black 45%, transparent 100%);
}
</style>
