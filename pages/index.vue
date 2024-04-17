<script lang="ts" setup>
definePageMeta({
  layout: false,
})

const { setMode } = useTheme()

const now = useNow()
const nowFormatted = computed(() => {
  return new Intl.DateTimeFormat('hr-HR', {
    timeStyle: 'medium',
    timeZone: 'Europe/Zagreb',
  }).format(now.value)
})
</script>

<template>
  <NuxtLayout name="default">
    <div class="flex flex-col gap-16 mt-[43vh]">
      <section>
        <!-- <div class="mb-6 font-mono text-base text-muted-foreground h-5">
          @matijao &bull; {{ nowFormatted }}
        </div> -->

        <h1 class="text-default-900 dark:text-default-50 text-balance text-4xl/[1.1] sm:text-5xl/[1.1] font-medium font-display lg:text-7xl/[1] mb-4 md:mb-6">
          Hi, I'm Matija, <br> crafting sleek <br> <span class="">web</span> experiences
        </h1>

        <div class="text-default-foreground text-lg leading-7">
          <div>
            <p>
              Frontend-oriented software engineer based in Croatia.
              <br>
              I build well-crafted software, focusing on good UX and meticulous attention to detail.
              <br>
              I love clean code, open-source, side-projects, <button @click="setMode('dark')">
                dark mode
              </button>, minimalism and Bitcoin.
              <br>
            </p>
          </div>

          <div class="mt-6 flex items-center gap-3">
            <Button to="/projects" variant="default" size="lg">
              Explore projects
            </Button>

            <Button to="/about" variant="frosted-ghost" size="lg">
              About me
            </Button>
          </div>
        </div>
      </section>

      <SectionLinks />

      <SectionWorkExperience />

      <section>
        <ContactForm />
      </section>

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
