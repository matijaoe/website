<script lang="ts" setup>
const { y } = useWindowScroll()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const { breadcrumbs, isHome } = useBreadcrumbs()
</script>

<template>
  <div class="p-5 md:px-8 md:pt-6 lg:px-20 lg:pt-14 flex flex-col min-h-screen max-w-6xl mx-auto">
    <TheHeader />

    <div class="pt-[10vh] pb-5 grow md:pt-32">
      <div>
        <Breadcrumb v-if="!isHome" class="hidden lg:block mb-6">
          <BreadcrumbList>
            <template v-for="(part, idx) in breadcrumbs" :key="part.path">
              <BreadcrumbItem class="lowercase">
                <BreadcrumbLink :href="part.path" :class="idx === breadcrumbs.length - 1 && 'text-primary'">
                  <BaseScrambleText :text="part.name" />
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

      <ClientOnly>
        <TransitionFade>
          <Button
            v-show="y > 120"
            variant="secondary"
            size="icon-lg"
            class="fixed hidden md:flex bottom-6 right-6 lg:bottom-14 lg:right-14 rounded-full"
            @click="scrollToTop"
          >
            <Icon name="lucide:chevron-up" class="text-default-50 text-xl" />
          </Button>
        </TransitionFade>
      </ClientOnly>
    </div>

    <TheFooter />

    <MobileNav />
  </div>
</template>
