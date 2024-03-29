<script lang="ts" setup>
const { y } = useWindowScroll()
const route = useRoute()
</script>

<template>
  <div>
    <div
      class="grid grid-cols-[var(--sidebar)_1fr_var(--sidebar)] mt-8vh gap-8 px-8 py-14"
    >
      <div>
        <TheSidebar class="sticky top-10 grow pl-4" />
      </div>

      <div class="mx-auto w-row grow px-4">
        <slot />
      </div>

      <NuxtLink v-show="y > 100" :to="{ name: route.name }" class="fixed bottom-14 right-14 aspect-square flex items-center justify-center rounded-full bg-default-800 p-3">
        <Icon name="lucide:chevron-up" class="text-xl text-default-50" />
      </NuxtLink>
    </div>
  </div>
</template>
