<script lang="ts" setup>
const { y } = useWindowScroll()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const { breadcrumbs, isHome } = useBreadcrumbs()

const now = useNow()
const year = computed(() => now.value.getFullYear())
</script>

<template>
  <div class="p-4 md:px-12 md:pt-10 flex flex-col min-h-screen">
    <div
      class="max-w-8xl grid gap-8 lg:grid-cols-[1fr_var(--sidebar)] pb-8 grow"
    >
      <div>
        <Breadcrumb v-show="!isHome" class="mb-6">
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

        <main class="max-w-3xl w-full grow">
          <slot />
        </main>
      </div>

      <div>
        <TheSidebar class="md:ml-3 sticky top-10 grow" />
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

    <footer class="py-10 flex items-center justify-start text-sm text-foreground/40 mt-auto">
      <p>Matija Osrečki {{ year }} &copy; All Rights Reserved</p>
    </footer>
  </div>
</template>
