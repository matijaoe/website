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
          I'm a software engineer who ships fast without cutting corners. I&nbsp;genuinely love building products and sweating the details until they feel right. Over the past few years, I've been all in on <IconWithText
            text="AI"
            icon="emojione:sparkles"
            icon-size="0.9em"
            icon-class="translate-y-0.5"
          /> and the way it's transforming the way we think, build, and ship software. I got pretty good at it.
        </p>

        <p>
          I bring strong product taste to everything I build. I obsess over dev experience just as much as UX. I do my best work with full ownership and thrive in remote, async environments. Give me a goal and I'll ship something I'm proud of.
        </p>

        <p>
          Beyond code, I'm deep into
          <IconWithText
            text="Bitcoin"
            icon="logos:bitcoin"
            icon-size="0.9em"
            icon-class="translate-y-0.5"
          /> and a strong advocate for privacy, freedom of speech, self-sovereignty, and open-source software. I'm also into economics, cryptography, psychology, and literature.
        </p>
        
        <p>
          Here's my 
          <NuxtLink
          :href="resume.url"
          class="inline-flex w-fit items-center gap-1.5 not-prose text-foreground no-underline hover:underline decoration-0.1em underline-offset-[0.15em]"
          target="_blank"
        >
          {{ resume.label.toLowerCase() }}
          <Icon name="lucide:arrow-up-right" class="text-base text-muted-foreground" />
        </NuxtLink>
        </p>
      </section>

      <AboutTechStack />

      <AboutBookshelf />

      <AboutPodcasts />

      <AboutMovies />
    </div>
  </div>
</template>
