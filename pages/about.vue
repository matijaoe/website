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

    <div class="flex flex-col gap-12 max-w-xl">
      <section class="text-default-foreground max-w-xl leading-7 prose text-base md:text-lg">
        <p>
          I'm a software engineer with a sharp eye for UX and design, meticulous attention to detail, and a relentless focus on quality. <br> Skilled in
          <IconWithText text="Vue" icon="logos:vue" />,
          <IconWithText text="Nuxt" icon="logos:nuxt-icon" />,
          <IconWithText text="Tailwind" icon="logos:tailwindcss-icon" /> and full-stack
          <IconWithText text="TypeScript" icon="logos:typescript-icon" />, I turn ideas into refined, user-friendly experiences. I'm driven by a deep curiosity and a passion for UX/UI design, developer experience, and writing clean, maintainable code.
        </p>

        <p>
          Beyond code, I'm obsessed with
          <IconWithText
            text="Bitcoin"
            icon="logos:bitcoin"
            icon-size="0.9em"
            icon-class="translate-y-0.5"
          /> and a strong advocate for the right to privacy, freedom of speech, self-sovereignty, and open-source software. I'm also deeply interested in economics, cryptography, psychology, and literature.
        </p>
      </section>
    </div>
  </div>
</template>
