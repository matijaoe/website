<script lang="ts" setup>
const backgrounds = [
  {
    src: '/gradients/hero-gradient.svg',
    class: 'right-0 hidden lg:block',
    width: 1269,
    height: 724,
  },
  {
    src: '/gradients/hero-gradient-tablet.svg',
    class: 'right-0 w-full hidden sm:block lg:hidden',
    width: 924,
    height: 653,
  },
  {
    src: '/gradients/hero-gradient-mobile.svg',
    class: 'inset-x-0 w-full object-cover sm:hidden',
    width: 375,
    height: 494,
  },
]
</script>

<template>
  <!-- F1F0E9 -->
  <Html lang="en">
    <Body class="bg-background">
      <!-- <NuxtImg
        v-for="(item, i) in backgrounds"
        :key="i"
        v-bind="item"
        role="presentation"
        class="pointer-events-none fixed top-0 select-none"
        :style="{ zIndex: '-1' }"
      /> -->
      <!-- <div class="from-background fixed left-0 right-0 top-0 h-15 w-screen to-transparent bg-gradient-to-b" /> -->
      <NuxtLayout class="overflow-y-auto">
        <NuxtPage />
      </NuxtLayout>
      <!-- <div class="from-background fixed bottom-0 left-0 right-0 h-15 w-screen to-transparent bg-gradient-to-t" /> -->
    </Body>
  </Html>
</template>

<style>
:root {
  --sidebar: 18rem;
}

html.dark {
  color-scheme: dark;
}

.hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
