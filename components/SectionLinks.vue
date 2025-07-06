<script lang="ts" setup>
type LinkItem = { label: string, links: { linkText: string, link: string, clickToCopy?: boolean }[] }

const links = [
  {
    label: 'GitHub',
    links: [{ linkText: 'matijaoe', link: 'https://github.com/matijaoe' }],
  },
  {
    label: 'LinkedIn',
    links: [{ linkText: 'matijao', link: 'https://www.linkedin.com/in/matijao' }],
  },
  {
    label: 'Goodreads',
    links: [{ linkText: 'matijao', link: 'https://www.goodreads.com/matijao' }],
  },
  {
    label: 'Signal',
    links: [{ linkText: 'let\'s chat', link: 'https://signal.me/#eu/lC_xtCm-HAQfuw6teYnoABnKphlSXt5Tw-4ZtMmpsobhYkWORv9Dj79r1oMYNoFG' }],
  },
  {
    label: 'Email',
    links: [{ linkText: 'hi@matijao.com', link: 'mailto:hi@matijao.com', clickToCopy: true }],
  },
  {
    label: 'Resume',
    links: [
      { linkText: 'cv.pdf', link: '/cv.pdf' },
    ],
  },
] satisfies LinkItem[]
</script>

<template>
  <section>
    <h2 class="mb-4 text-3xl font-medium font-display">
      @
    </h2>
    <div>
      <LinkRow
        v-for="contact in links"
        :key="contact.label"
        v-bind="contact"
      />
    </div>
  </section>
</template>
