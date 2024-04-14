<script lang="ts" setup>
const { y } = useWindowScroll()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div>
    <div
      class="grid gap-8 px-4 py-4 lg:grid-cols-[var(--sidebar)_1fr] lg:mt-[8vh] lg:px-8 lg:py-14"
    >
      <!-- TODO: not sticky -->
      <div class="relative">
        <TheSidebar class="sticky top-10 grow" />
      </div>

      <main class="w-full grow">
        <slot />
      </main>

      <Button
        v-show="y > 120"
        variant="secondary"
        size="icon-lg"
        class="fixed bottom-14 right-14 rounded-full active:scale-90"
        @click="scrollToTop"
      >
        <Icon name="lucide:chevron-up" class="text-default-50 text-xl" />
      </Button>
    </div>
  </div>
</template>
