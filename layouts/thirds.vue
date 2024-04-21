<script lang="ts" setup>
const { y } = useWindowScroll()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const { breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <div
    class="max-w-8xl grid gap-8 p-4 lg:grid-cols-[1fr_var(--sidebar)] md:px-12 md:pb-16 md:pt-10"
  >
    <div>
      <Breadcrumb class="mb-6">
        <BreadcrumbList>
          <template v-for="(part, idx) in breadcrumbs" :key="part.path">
            <BreadcrumbItem class="lowercase">
              <BreadcrumbLink :href="part.path">
                {{ part.name }}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator v-if="idx < breadcrumbs.length - 1" />
          </template>
        </BreadcrumbList>
      </Breadcrumb>

      <main class="w-full grow">
        <slot />
      </main>
    </div>

    <!-- TODO: not sticky -->
    <div class="relative">
      <TheSidebar class="sticky top-10 grow" />
    </div>

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
</template>
