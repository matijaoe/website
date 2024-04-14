<script lang="ts" setup>
const { y } = useWindowScroll()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="lg:pt-[8vh]">
    <div
      class="grid gap-8 px-4 py-4 lg:grid-cols-[var(--sidebar)_1fr] lg:px-8 lg:py-14 "
    >
      <div>
        <TheSidebar class="sticky top-10 grow" />
      </div>

      <main class="max-w-2xl w-full grow">
        <slot />
      </main>

      <div>
        <slot name="right" />

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
  </div>
</template>
