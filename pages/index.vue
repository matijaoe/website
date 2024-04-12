<script lang="ts" setup>
definePageMeta({
  layout: false,
})

const { setMode } = useTheme()
</script>

<template>
  <NuxtLayout name="default">
    <div class="flex flex-col gap-16">
      <section>
        <h1 class="text-default-900 dark:text-default-50 text-pretty text-3xl/[1.2] font-medium tracking-tighter font-display capitalize lg:text-5xl/[1.3]">
          Software Developer Crafting Sleek Web Experiences
        </h1>

        <div class="text-default-foreground mt-4 max-w-xl leading-7">
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

          <div class="mt-3 flex items-center gap-3 prose">
            <NuxtLink to="/projects">
              Explore projects
            </NuxtLink>

            <NuxtLink to="/about">
              Find out more
            </NuxtLink>
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

    <template #right>
      <!-- <span class="absolute z-100 flex rotate-24 items-center justify-center -bottom-42 -right-24 lt-lg:hidden">
        <img src="/assets/images/04-clay.png" class="w-100" alt="">
      </span> -->
    </template>
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
