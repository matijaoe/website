<script lang="ts" setup>
type Experience = {
  company: string
  companyUrl: string
  companyLocation: string
  position: string
  period: string
  description: string
  used: string[]
  logo?: string
  icon?: string
  logoClass?: string
}

const experience: Experience[] = [
  {
    company: 'Preview',
    companyUrl: 'https://preview.io/',
    companyLocation: 'United States',
    position: 'Member of Technical Staff',
    period: 'Apr 2026 — Present',
    logo: '/preview-logo.svg',
    description: 'The production platform for AI video. One platform to storyboard, generate, and direct, from chaotic ideation to final cut.',
    used: ['Next', 'React', 'TypeScript', 'Tailwind', 'Tiptap', 'tldraw'],
  },
  {
    company: 'TheyDo',
    companyUrl: 'https://www.theydo.com',
    companyLocation: 'Netherlands',
    position: 'Senior Frontend Engineer',
    period: 'Jul 2024 — Apr 2026',
    logo: '/theydo-logo.webp',
    description: 'Shaping the journey management platform that helps enterprises connect customer insights and drive decisions across teams.',
    used: ['Vue', 'TypeScript', 'GraphQL', 'Tailwind', 'Tiptap'],
  },
  {
    company: 'Four of them',
    companyUrl: 'https://www.4ofthem.eu/',
    companyLocation: 'Croatia',
    position: 'Frontend Developer',
    period: 'Aug 2021 — Jun 2024',
    logo: '/4ot-logo.webp',
    logoClass: 'h-[14px]',
    description: 'Built innovative e-commerce solutions for the German pharmaceutical sector, serving millions of users.',
    used: ['Nuxt', 'Vue', 'TypeScript', 'Tanstack', 'Tailwind'],
  },
  {
    company: 'Infokarta',
    companyUrl: 'https://gis.infokarta.hr/',
    companyLocation: 'Croatia',
    position: 'Frontend Developer',
    period: 'May 2021 — Jul 2021',
    icon: 'lucide:map',
    description: 'Built an interactive GIS platform for local governments to manage spatial data for urban planning and public services.',
    used: ['Nuxt', 'Mapbox', 'Express', 'Postgres'],
  },
]
</script>

<template>
  <section>
    <h2 class="mb-4 text-3xl font-medium font-display">
      Experience
    </h2>

    <ul role="list" class="space-y-6">
      <WorkExperienceEntry
        v-for="entry in experience"
        :key="entry.company"
        v-bind="entry"
      />
    </ul>
  </section>
</template>
