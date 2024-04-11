<script lang="ts" setup>
definePageMeta({
  layout: false,
})
</script>

<template>
  <NuxtLayout name="default">
    <div class="flex flex-col gap-12">
      <section>
        <h1 class="text-pretty text-3xl/[1.2] text-default-900 font-medium tracking-tighter font-display capitalize capitalize lg:text-5xl/[1.3] dark:text-default-50">
          Software Developer Crafting Sleek Web Experiences
        </h1>

        <div class="max-w-xl">
          <div class="mt-5 prose prose-default dark:prose-invert">
            <p>
              I'm <span class="font-medium font-display text-rich">Matija</span>, an ambitious Software Engineer from Croatia with a strong sense of good UX and design, great attention to detail and a relentless focus on quality. Proficient in Vue, Nuxt, and full-stack TypeScript, I thrive on transforming ideas into polished products built from scratch. My work is fueled by deep curiosity and passion for UX/UI design, developer experience, clean code and open-source.
            </p>

            <p>Beyond code, I'm deeply passionate about Bitcoin, dedicating my time to advocating for preserving our privacy, fostering self-sovereignty, enhancing financial literacy, and cultivating a low time preference mindset.</p>
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
      <span class="absolute z-100 flex rotate-24 items-center justify-center -bottom-42 -right-24 lt-lg:hidden">
        <img src="/assets/images/04-clay.png" class="w-100" alt="">
      </span>
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
