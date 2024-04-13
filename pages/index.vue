<script lang="ts" setup>
definePageMeta({
  layout: false,
})

const { setMode } = useTheme()

const backgrounds = [
  {
    src: '/gradients/hero-gradient.svg',
    class: 'right-0 hidden lg:block',
    width: 1269,
    height: 724,
  },
  {
    src: '/gradients/hero-gradient-tablet.svg',
    class: 'right-0 w-full hidden sm:block lg:hidden',
    width: 924,
    height: 653,
  },
  {
    src: '/gradients/hero-gradient-mobile.svg',
    class: 'inset-x-0 w-full object-cover sm:hidden',
    width: 375,
    height: 494,
  },
]
</script>

<template>
  <NuxtLayout name="default">
    <div class="flex flex-col gap-16">
      <section>
        <h1 class="text-default-900 dark:text-default-50 text-balance text-3xl/[1.15] font-medium font-display lg:text-7xl/[1]">
          Out here, crafting sleek <span class="underline">web</span> experiences
        </h1>

        <div class="text-default-foreground mt-7 max-w-xl leading-7">
          <div>
            <p>
              Hi, I'm <span class="font-medium">Matija</span>, a software engineer from Croatia.
              <br>
              I build well-crafted software, focusing on good UX and great attention to detail.
              <br>
              I like clean code, open-source, side-projects, <button @click="setMode('dark')">
                dark mode
              </button>, minimalism and Bitcoin.
              <br>
            </p>
          </div>

          <div class="mt-6 flex items-center gap-3">
            <Button to="/projects" variant="default">
              Explore projects
            </Button>

            <Button to="/about" variant="outline">
              About me
            </Button>
          </div>
        </div>
      </section>

      <SectionLinks />

      <SectionWorkExperience />

      <!-- <div class="animate-marquee whitespace-nowrap py-12">
        <span class="mx-4 text-4xl">Vue</span>
        <span class="mx-4 text-4xl">Nuxt</span>
        <span class="mx-4 text-4xl">TypeScript</span>
        <span class="mx-4 text-4xl">Tailwind</span>
        <span class="mx-4 text-4xl">Uno CSS</span>
        <span class="mx-4 text-4xl">Node</span>
        <span class="mx-4 text-4xl">Bun</span>
        <span class="mx-4 text-4xl">Bitcoin</span>
      </div> -->
    </div>

    <!-- <NuxtImg
      v-for="(item, i) in backgrounds"
      :key="i"
      v-bind="item"
      role="presentation"
      class="pointer-events-none absolute top-0 select-none"
      :style="{ zIndex: '-1' }"
    /> -->
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
.animate-marquee {
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
