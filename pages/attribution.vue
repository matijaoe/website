<script lang="ts" setup>
const techItems = [
  { label: 'Nuxt 3', link: 'https://nuxt.com' },
  { label: 'Tailwind CSS', link: 'https://tailwindcss.com' },
  { label: 'Shadcn-vue', link: 'https://shadcn-vue.com' },
  { label: 'VueUse', link: 'https://vueuse.org/' },
  { label: 'Zod', link: 'https://github.com/colinhacks/zod' },
]

useSeoMeta({
  title: 'Attribution',
  ogTitle: 'Attribution',
})
</script>

<template>
  <div>
    <PageHeading>
      Attribution
    </PageHeading>

    <div>
      <h3 class="font-sans text-xl mb-2">
        Tech stack:
      </h3>

      <ul class="text-lg list-disc list-inside space-y-1 mt-4">
        <li v-for="item in techItems" :key="item.label">
          <NuxtLink :href="item.link" class="decoration-0.1em decoration-offset-0.15em hover:underline" target="_blank">
            {{ item.label }}
          </NuxtLink>
          <Icon name="lucide:arrow-up-right" class="ml-1 text-base" />
        </li>
      </ul>
    </div>
  </div>
</template>
