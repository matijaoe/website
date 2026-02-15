<script lang="ts" setup>
const { setMode, isDark } = useTheme()
const { nowFormatted } = useCurrentTime()

const revealed = ref(false)
const heroEl = useTemplateRef<HTMLElement>('hero')
const { display: timeDisplay, isComplete: timeReady, scramble: timeScramble } = useTextScramble(nowFormatted.value, { delay: 100, speed: 25 })
const { display: locationDisplay, scramble: locationScramble } = useTextScramble('Zagreb, Croatia', { delay: 300, speed: 30 })

onMounted(() => {
  revealed.value = false
  nextTick(() => {
    void heroEl.value?.offsetHeight
    revealed.value = true
    timeScramble()
    locationScramble()
  })
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
      <h1 ref="hero" class="text-balance text-[42px]/[1.1] sm:text-6xl/[1] font-medium font-display lg:text-7xl/[1] mb-4 md:mb-6">
        <span class="text-reveal" :class="{ revealed }" style="--reveal-delay: 0s">I'm <span title="Matija Osrečki">Matija</span>,</span>
        <br>
        <span class="text-reveal" :class="{ revealed }" style="--reveal-delay: 0.12s">crafting <span class="italic">sleek</span></span>
        <Icon
          name="emojione:sparkles"
          class="text-[0.7em] lg:text-[0.5em] align-top ml-2 lg:ml-3 inline-block sparkle-icon"
          :class="{ 'sparkle-pop': revealed }"
        />
        <br>
        <span class="text-reveal" :class="{ revealed }" style="--reveal-delay: 0.24s"><span class="underline">web</span> experiences</span>
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
            Into AI agents, open source, side projects, <button @click="setMode('dark')">
              dark mode
            </button>, minimalism, and Bitcoin.
            <br>
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

.sparkle-icon {
  opacity: 0;
  scale: 0;
  rotate: -45deg;
  filter: brightness(0);
  transition: opacity 0.4s ease, scale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), rotate 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: 1.3s;
}

:root.dark .sparkle-icon {
  filter: none;
}

.sparkle-pop {
  opacity: 1;
  scale: 1;
  rotate: 5deg;
}
</style>
