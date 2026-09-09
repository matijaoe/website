<script setup lang="ts">
import { createFluidCanvas } from '~/utils/fluid-canvas'

const canvasRef = useTemplateRef('canvas')
const { isDark } = useTheme()

let cleanup: (() => void) | null = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) { return }
  cleanup = createFluidCanvas(canvas, { isDark: () => isDark.value })
})

onBeforeUnmount(() => {
  if (cleanup) {
    cleanup()
    cleanup = null
  }
})
</script>

<template>
  <canvas ref="canvas" class="fixed inset-0 h-screen w-full -z-10" />
</template>
