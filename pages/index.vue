<script lang="ts" setup>
const { nowFormatted } = useCurrentTime()

const revealed = ref(false)
const heroEl = useTemplateRef<HTMLElement>('hero')
const { display: timeDisplay, isComplete: timeReady, scramble: timeScramble } = useTextScramble(nowFormatted.value, { delay: 100, speed: 25, scrambleInitial: true })
const { display: locationDisplay, scramble: locationScramble } = useTextScramble('Zagreb, Croatia', { delay: 300, speed: 30 })

const { stop } = useIntersectionObserver(heroEl, ([entry]) => {
  if (entry?.isIntersecting) {
    revealed.value = true
    timeScramble()
    locationScramble()
    stop()
  }
}, { threshold: 0.1 })

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
          <span class="px-2.5 py-0.5">{{ timeReady ? nowFormatted : timeDisplay }}</span>
          <span class="border-l px-2.5 py-0.5 flex items-center">
            <span class="inline-flex items-center gap-1">
              <span class="relative flex size-2 mr-1.5">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span class="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              {{ locationDisplay }}
            </span>
          </span>
        </Badge>
      </div>
      <h1 ref="hero" class="text-balance text-[42px]/[1.1] sm:text-6xl/none font-medium font-display lg:text-8xl/[0.92] mb-4 md:mb-6">
        <span class="text-reveal" :class="{ revealed }" style="--reveal-delay: 0.0s">Crafting <span class="italic">sleek</span></span>
        <br>
        <span class="text-reveal" :class="{ revealed }" style="--reveal-delay: 0.12s">web experiences</span>
      </h1>

      <div class="text-default-foreground text-base md:text-lg leading-7">
        <div>
          <p>
            Senior Frontend Engineer, currently at <NuxtLink to="https://www.theydo.com" class="hover:underline" target="_blank">
              TheyDo{{ }}
            </NuxtLink>.
            <br>
            I build well-crafted software, obsessing over the details that matter.
            <br>
            Into AI agents, side projects, and Bitcoin.
          </p>
        </div>

        <div class="mt-6 flex items-center gap-3">
          <Button to="/projects" variant="default" size="default" class="lowercase">
            <BaseKbd :keys="['P']" variant="auto-inverted" class="translate-y-px mr-0.5" />
            Projects
          </Button>

          <Button to="/about" variant="ghost" size="default" class="lowercase">
            <BaseKbd :keys="['A']" class="translate-y-px mr-0.5" />
            About me
          </Button>
        </div>
      </div>
    </section>

    <SectionLinks />

    <SectionWorkExperience />
  </div>
</template>

<style scoped>
.text-reveal {
  background: linear-gradient(90deg, hsl(var(--foreground)) 50%, hsl(var(--foreground) / 0.15) 50%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position-x: 100%;
  transition: background-position-x 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-delay: var(--reveal-delay, 0s);
}

.text-reveal.revealed {
  background-position-x: 0%;
}
</style>
