<script lang="ts" setup>
const { setMode } = useTheme()
const { nowFormatted } = useCurrentTime()

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
          <span class="border-l px-2.5 py-0.5 flex items-center">
            <span class="inline-flex items-center gap-1">
              <span class="relative flex size-2 mr-1.5">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span class="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              Zagreb, Croatia
            </span>
          </span>
        </Badge>
      </div>
      <h1 class="text-default-900 dark:text-default-50 text-balance text-4xl/[1.1] sm:text-6xl/[1] font-medium font-display lg:text-7xl/[1] mb-4 md:mb-6">
        I'm <span title="Matija Osrečki">Matija</span>, <br> crafting
        <span>
          <span class="italic">sleek</span>
          <Icon name="emojione-monotone:sparkles" class="text-[0.5em] align-top ml-3 rotate-3 -translate-y-2 inline-block" />
        </span>

        <br> <span class="underline">web</span> experiences
      </h1>

      <div class="text-default-foreground text-base md:text-lg leading-7">
        <div>
          <p>
            Senior Frontend Engineer, currently at <NuxtLink to="https://www.theydo.com" target="_blank">
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
            <span class="text-muted-foreground font-mono font-normal lowercase">
              [<span class="text-primary-foreground">p</span>]
            </span>
            Projects
          </Button>

          <Button to="/about" variant="frosted-ghost" size="default" class="lowercase">
            <span class="text-muted-foreground font-mono font-normal lowercase">
              [<span class="text-primary">a</span>]
            </span>
            About me
          </Button>
        </div>
      </div>
    </section>

    <SectionLinks />

    <SectionWorkExperience />
  </div>
</template>
