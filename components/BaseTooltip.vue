<script lang="ts" setup>
withDefaults(defineProps<{
  content?: string
  delay?: number
  disableClosingTrigger?: boolean
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
}>(), {
  delay: 0,
})
</script>

<template>
  <TooltipProvider :delay-duration="delay" :disable-closing-trigger="disableClosingTrigger">
    <Tooltip>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipContent :side :side-offset>
        <!-- TODO: not working -->
        <slot name="content">
          {{ content }}
        </slot>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
