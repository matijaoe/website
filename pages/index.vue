<script lang="ts" setup>
type ContactItem = { label: string, linkText: string, link: string }[]

const contacts: ContactItem = [
  {
    label: 'GitHub',
    linkText: 'matijaoe',
    link: 'https://github.com/matijaoe'
  },
  {
    label: 'LinkedIn',
    linkText: 'matijao',
    link: 'https://www.linkedin.com/in/matijao'
  },
  {
    label: 'Twitter',
    linkText: 'matijaoe',
    link: 'https://twitter.com/matijaoe'
  },
  {
    label: 'Goodreads',
    linkText: 'matijao',
    link: 'https://www.goodreads.com/matijao'
  },
  {
    label: 'Email',
    linkText: 'hello@matijao.com',
    link: 'mailto:hello@matijao.com'
  },
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <section>
      <h1 class="text-balance text-3xl/[1.2] font-semibold tracking-tighter capitalize capitalize lg:text-5xl/[1.3]">
        Software Developer Crafting Sleek Web Experiences
      </h1>

      <div class="prose prose-neutral dark:prose-invert mt-5">
        <p>
          I'm Matija, a Croatia-based software engineer with a knack for simplifying the complex web.
          My focus is on building interactive web applications using TypeScript, Vue & Nuxt. I'm deeply passionate about open-source, UI/UX design, developer experience, clean code practices, and performance optimization.
        </p>

        <p>Beyond the digital realm, my interests are rooted in advancing self-sovereignty, making sense of macroeconomics, and actively participating in the Bitcoin community, witnessing firsthand its transformative impact on the global economy.</p>
      </div>
    </section>

    <section>
      <!-- <h2 class="mb-4 text-3xl font-bold">
        @
      </h2> -->
      <div>
        <LinkRow
          v-for="contact in contacts"
          :key="contact.link"
          v-bind="contact"
        />
      </div>
    </section>
  </div>
</template>
