<script lang="ts" setup>
const { setMode } = useTheme()

const now = useNow()
const nowFormatted = computed(() => {
  return new Intl.DateTimeFormat('hr-HR', {
    timeStyle: 'medium',
    timeZone: 'Europe/Zagreb',
  }).format(now.value)
})

useSeoMeta({
  title: 'Matija Osrečki',
  ogTitle: 'Matija Osrečki',
})
</script>

<template>
  <div class="flex flex-col gap-16 max-w-3xl">
    <section>
      <div class="mb-5 flex items-center text-muted-foreground gap-2">
        <Badge variant="outline" class="font-mono flex items-center p-0 backdrop-blur-lg bg-white/5 dark:bg-transparent hover:bg-white/5">
          <span class="px-2.5 py-0.5">{{ nowFormatted }}</span>
          <span class="border-l px-2.5 py-0.5">Zagreb, Croatia</span>
        </Badge>
        <Badge variant="secondary" class="font-mono">
          WIP
        </Badge>
      </div>
      <h1 class="text-default-900 dark:text-default-50 text-balance text-5xl/[1] sm:text-6xl/[1] font-medium font-display lg:text-7xl/[1] mb-4 md:mb-6">
        Hi, I'm Matija, <br> crafting sleek <br> <span class="underline">web</span> experiences
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

    <!-- <section>
      <ContactForm />
    </section> -->

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
