<script lang="ts" setup>
withDefaults(defineProps<{
  content?: string
  delay?: number
  disableClosingTrigger?: boolean
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
      <TooltipContent>
        <!-- TODO: not working -->
        <slot name="content">
          {{ content }}
        </slot>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
