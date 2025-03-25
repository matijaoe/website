<script lang="ts" setup>
type LinkItem = { label: string, linkText: string, link: string, clickToCopy?: boolean }

const links = [
  {
    label: 'GitHub',
    linkText: 'matijaoe',
    link: 'https://github.com/matijaoe',
  },
  {
    label: 'LinkedIn',
    linkText: 'matijao',
    link: 'https://www.linkedin.com/in/matijao',
  },
  {
    label: 'Goodreads',
    linkText: 'matijao',
    link: 'https://www.goodreads.com/matijao',
  },
  {
    label: 'Email',
    linkText: 'hello@matijao.com',
    link: 'mailto:hello@matijao.com',
    clickToCopy: true,
  },
  {
    label: 'CV',
    linkText: 'cv.pdf',
    link: '/cv.pdf',
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
        :key="contact.link"
        v-bind="contact"
      />
    </div>
  </section>
</template>
