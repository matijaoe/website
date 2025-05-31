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
    label: 'Email',
    links: [{ linkText: 'hello@matijao.com', link: 'mailto:hello@matijao.com', clickToCopy: true }],
  },
  {
    label: 'Resume',
    links: [
      { linkText: 'cv.pdf', link: '/cv.pdf' },
      { linkText: 'cv.pdf ₿', link: '/cv-btc.pdf' },
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
