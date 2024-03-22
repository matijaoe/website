<script lang="ts" setup>
const { x, y } = useWindowScroll()
const route = useRoute()
</script>

<template>
  <div>
    <!-- <div class="w-row">
      <TheHeader class="mb-7" />
    </div> -->

    <div class="grid grid-cols-[1fr_3fr_1fr] px-14 py-14">
      <div class="">
        <TheSidebar class="sticky top-14 grow" />
      </div>

      <div class="w-row grow px-4">
        <slot />
      </div>

      <div>
        <NuxtLink v-show="y > 100" :to="{ name: route.name }" class="fixed bottom-14 right-14 aspect-square flex items-center justify-center rounded-full bg-default-800 p-3">
          <Icon name="ph:caret-up-bold" class="text-xl text-default-50" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
