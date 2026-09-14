<script lang="ts" setup>
const { resume } = personalLinks

useSeoMeta({
  title: 'About',
  ogTitle: 'About',
})
</script>

<template>
  <div>
    <PageHeading>
      About
    </PageHeading>

    <div class="flex flex-col gap-16 max-w-xl">
      <section class="text-default-foreground max-w-xl leading-7 prose text-base md:text-lg">
        <p>
          I'm a product engineer who ships fast without cutting corners. I&nbsp;love sweating the details until they feel <em>just</em> right. I obsess over dev experience almost as much as UX. I care as much about what doesn't get built as what does. I try to delete more than I add. I build the way I wish everything else worked.
        </p>

        <p>
          I've been all in on AI and how it's changing the way we design and build software, from the early GitHub Copilot autocomplete days to managing a large fleet of mainly cloud agents. I got pretty good at it.
        </p>

        <p>
          Beyond code, I'm deep into the
          <IconWithText
            text="Bitcoin"
            icon="logos:bitcoin"
            icon-size="0.9em"
            icon-class="translate-y-0.5"
          /> rabbit hole and a strong advocate for privacy, freedom of speech, self-sovereignty, and open-source software. I'm also into economics, cryptography, and literature.
        </p>

        <p>
          Here's my
          <NuxtLink
            :href="resume.url"
            external
            class="inline-flex w-fit items-center gap-1.5 not-prose text-foreground no-underline hover:underline decoration-0.1em underline-offset-[0.15em]"
            target="_blank"
            rel="noopener noreferrer"
          >
            early 2026 resume
            <Icon name="lucide:arrow-up-right" class="text-base text-muted-foreground" />
          </NuxtLink>
        </p>
      </section>

      <AboutTechStack />

      <AboutBookshelf />

      <AboutMovies />
    </div>
  </div>
</template>
