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
              I'm <span class="font-medium font-display text-rich">Matija</span>, a dedicated Software Engineer from Croatia with a relentless focus on quality and competitive drive to deliver exceptional user experiences. Proficient in Vue, Nuxt, and full-stack TypeScript, I thrive on transforming ideas into polished products built from scratch. My deep curiosity and passion for UX/UI design, developer experience, clean code and open-source is what fuels my work.
            </p>

            <p>Beyond code, I'm your friendly neighborhood <span class="font-300">₿</span>itcoin Maxi, spending my time advocating for preserving our privacy, fostering self-sovereignty, enhancing financial literacy, and cultivating a low time preference mindset.</p>
          </div>
        </div>
      </section>

      <SectionLinks />

      <SectionWorkExperience />
    </div>

    <template #right>
      <span class="absolute flex rotate-24 items-center justify-center -bottom-42 -right-44 lt-lg:hidden">
        <img src="/assets/images/04-clay.png" class="hidden w-100 dark:block" alt="">
        <img src="/assets/images/04-black.png" class="w-100 dark:hidden" alt="">
      </span>
    </template>
  </NuxtLayout>
</template>
