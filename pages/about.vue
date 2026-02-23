<script lang="ts" setup>
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
          I'm a software engineer who ships fast without cutting corners. I&nbsp;genuinely love building products and sweating the details until they feel right. Right now, I'm all in on <IconWithText
            text="AI"
            icon="emojione:sparkles"
            icon-size="0.9em"
            icon-class="translate-y-0.5"
          /> and how it's changing the way we think, build, and ship software. I'm known as <em>the AI guy</em>. Claude Code is always by my side.
        </p>

        <p>
          I bring strong product taste to everything I build. I obsess over DevEx just as much as UX. I do my best work with full ownership and thrive in remote, async environments. Give me a goal and I'll ship something I'm proud of.
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
      </section>

      <AboutTechStack />

      <AboutBookshelf />

      <AboutPodcasts />

      <AboutMovies />
    </div>
  </div>
</template>
