<script lang="ts" setup>
const { y } = useWindowScroll()
const route = useRoute()
</script>

<template>
  <div>
    <div
      class="grid gap-8 px-4 py-4 lg:grid-cols-[var(--sidebar)_1fr_var(--sidebar)] lg:mt-8vh lg:px-8 lg:py-14"
    >
      <div>
        <TheSidebar class="sticky top-10 grow pl-4" />
      </div>

      <div class="mx-auto w-row grow">
        <slot />
      </div>

      <div class="">
        <slot name="right" />

        <NuxtLink v-show="y > 100" :to="{ name: route.name }" class="fixed bottom-14 right-14 aspect-square flex items-center justify-center rounded-full bg-default-800 p-3">
          <Icon name="lucide:chevron-up" class="text-xl text-default-50" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
