<script lang="ts" setup>
type LinkItem = { label: string, linkText: string, link: string }[]

const links: LinkItem = [
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
    label: 'Twitter',
    linkText: 'matijaoe',
    link: 'https://twitter.com/matijaoe',
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
  },
  {
    label: 'Bitcoin (lightning)',
    linkText: 'matijao@getalby.com',
    link: 'lightning:matijao@getalby.com',
  },
]
</script>

<template>
  <section class="mt--4">
    <h2 class="mb-4 text-3xl font-bold text-rich">
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
