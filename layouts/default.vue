<script lang="ts" setup>
const { y } = useWindowScroll()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div>
    <div
      class="grid gap-8 px-4 py-4 lg:grid-cols-[var(--sidebar)_1fr_var(--sidebar)] lg:mt-8vh lg:px-8 lg:py-14"
    >
      <div>
        <TheSidebar class="sticky top-10 grow pl-4" />
      </div>

      <div class="mx-auto max-w-2xl w-full grow px-4">
        <slot />
      </div>

      <div class="">
        <slot name="right" />

        <Button
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
