<script lang="ts" setup>
const { y } = useWindowScroll()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const { breadcrumbs, isHome } = useBreadcrumbs()

</script>

<template>
  <div class="p-4 md:px-8 md:pt-6 lg:px-24 lg:pt-16 flex flex-col min-h-screen max-w-[2000px]">
    <TheHeader />

    <div class="pb-8 grow pt-32">
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

        <main class="w-full grow">
          <slot />
        </main>
      </div>

      <Button
        v-show="y > 120"
        variant="frosted"
        size="icon-lg"
        class="fixed bottom-14 right-14 rounded-full active:scale-90"
        @click="scrollToTop"
      >
        <Icon name="lucide:chevron-up" class="text-default-50 text-xl" />
      </Button>
    </div>

    <TheFooter />
  </div>
</template>
