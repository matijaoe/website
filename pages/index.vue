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
          <span class="border-l px-2.5 py-0.5 flex items-center gap-2">
            <Icon name="twemoji:round-pushpin" />
            Zagreb, Croatia
          </span>
        </Badge>
        <Badge variant="secondary" class="font-mono flex items-center gap-2">
          wip
          <Icon name="twemoji:construction" />
        </Badge>
      </div>
      <h1 class="drop-shadow-sm text-default-900 dark:text-default-50 text-balance text-4xl/[1.1] sm:text-6xl/[1] font-medium font-display lg:text-7xl/[1] mb-4 md:mb-6">
        Hi, I'm Matija, <br> crafting
        <span>
          <span class="italic">sleek</span>
          <Icon name="emojione:sparkles" class="text-[0.5em] align-top ml-3 rotate-3 -translate-y-2 hidden dark:inline-block" />
          <Icon name="emojione-monotone:sparkles" class="text-[0.5em] align-top ml-3 rotate-3 -translate-y-2 inline-block dark:hidden" />
        </span>

        <br> <span class="underline">web</span> experiences
      </h1>

      <div class="text-default-foreground text-base md:text-lg leading-7">
        <div>
          <p>
            Frontend engineer from Croatia, currently at <NuxtLink to="https://www.theydo.com" target="_blank" class="hover:underline">
              TheyDo
            </NuxtLink>.
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
          <Button to="/projects" variant="default" size="default">
            Explore projects
          </Button>

          <Button to="/about" variant="frosted-ghost" size="default">
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
  </div>
</template>
