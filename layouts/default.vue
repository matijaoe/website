<script lang="ts" setup>
const { y } = useWindowScroll()
const route = useRoute()
</script>

<template>
  <div>
    <!-- <div class="w-row">
      <TheHeader class="mb-7" />
    </div> -->

    <div
      class="grid grid-cols-[2fr_5fr_2fr] mt-14vh gap-0 px-8 py-10"
    >
      <div class="mr-4">
        <TheSidebar class="sticky top-10 ml-6 grow" />
      </div>

      <div class="w-row grow px-4">
        <slot />
      </div>

      <div>
        <NuxtLink v-show="y > 100" :to="{ name: route.name }" class="fixed bottom-14 right-14 aspect-square flex items-center justify-center rounded-full bg-default-800 p-3">
          <Icon name="lucide:chevron-up" class="text-xl text-default-50" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
