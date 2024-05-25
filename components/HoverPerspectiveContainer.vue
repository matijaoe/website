<script  lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  reflection?: boolean
}>()

const cardEl = ref<HTMLElement>()

const conf = reactive({
  perspective: 900,
  rotation: 20,
})

const onMouseleave = () => {
  if (!cardEl.value) { return }

  cardEl.value.style.transform = `perspective(${conf.perspective}px)`
}

const onMousemove = (event: MouseEvent) => {
  if (!cardEl.value) { return }

  const relX = (event.offsetX + 1) / cardEl.value.offsetWidth
  const relY = (event.offsetY + 1) / cardEl.value.offsetHeight
  const rotY = `rotateY(${(relX - 0.5) * conf.rotation}deg)`
  const rotX = `rotateX(${(relY - 0.5) * -conf.rotation}deg)`
  cardEl.value.style.transform = `perspective(${conf.perspective}px) ${rotY} ${rotX}`
}
</script>

<template>
  <div
    ref="cardEl"
    class="relative transform overflow-hidden transition-[transform_border_box-shadow] duration-300 ease-out shadow-sm"
    @mousemove="onMousemove"
    @mouseleave="onMouseleave"
  >
    <slot />
  </div>
</template>
