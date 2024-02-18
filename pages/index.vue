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

const projects = [
  {
    name: 'Fare',
    description: 'Application for tracking personal finances and attaining financial independence.',
    tags: ['Nuxt', 'TypeScript', 'UnoCSS', 'Prisma'],
    year: 2022,
    repo: 'https://github.com/matijaoe/fare',
    thumbnail: '/projects/fare.webp',
    categories: ['projects'],
  },
  {
    name: 'Qwiz',
    description: 'Platform for creation, organization & discovery of pub quizzes.',
    tags: ['Next', 'TypeScript', 'Nest', 'Prisma'],
    year: 2022,
    repo: 'https://github.com/qwiz-app/qwiz',
    url: 'https://app.qwiz.party',
    thumbnail: '/projects/qwiz.webp',
    categories: ['projects'],
  },
  {
    name: 'Aimo',
    description: 'Social media platform connecting motivated individuals with accountability partners.',
    tags: ['Nuxt', 'Tailwind', 'Firebase'],
    year: 2021,
    repo: 'https://github.com/matijaoe/aimo',
    url: 'https://aimo.vercel.app',
    thumbnail: '/projects/aimo.webp',
    categories: ['projects'],
  },
]
</script>

<template>
  <div class="flex flex-col gap-12">
    <section>
      <h1 class="text-balance text-3xl/[1.2] font-semibold tracking-tighter capitalize capitalize lg:text-5xl/[1.3]">
        Software Developer Crafting Sleek Web Experiences
      </h1>

      <div class="mt-5 prose prose-neutral dark:prose-invert">
        <p>
          I'm Matija, a Croatia-based software engineer with a knack for simplifying the complex web.
          My focus is on building interactive web applications using TypeScript, Vue & Nuxt. I'm deeply passionate about open-source, UI/UX design, developer experience, clean code practices, and performance optimization.
        </p>

        <p>Beyond the digital realm, my interests are rooted in advancing self-sovereignty, making sense of macroeconomics, and actively participating in the Bitcoin community, witnessing firsthand its transformative impact on the global economy.</p>
      </div>
    </section>

    <section class="mt--4">
      <h2 class="mb-4 text-3xl font-bold">
        @
      </h2>
      <div>
        <LinkRow
          v-for="contact in contacts"
          :key="contact.link"
          v-bind="contact"
        />
      </div>
    </section>

    <section>
      <h2 class="mb-4 text-3xl font-bold">
        Featured Projects
      </h2>

      <div class="grid gap-6 sm:grid-cols-2 sm:gap-8">
        <div
          v-for="project in projects"
          :key="project.name"
          class="flex items-baseline justify-between"
        >
          <div>
            <NuxtLink class="group flex items-center font-medium hover:underline" :href="project.repo" external target="_blank">
              <p>{{ project.name }}</p>
            </NuxtLink>

            <p class="text-xs text-default-500 dark:text-default-300">
              {{ project.year }}
            </p>
          </div>

          <!-- <BaseTag>wip</BaseTag> -->
        </div>
      </div>
    </section>

    <section>
      <h2 class="mb-4 text-3xl font-bold">
        Work Experience
      </h2>
      <div class="flex flex-col gap-4">
        <WorkExperienceEntry
          company="Four of them LLC"
          company-url="https://www.4ofthem.eu/"
          company-location="Zapresic, Croatia"
          position="Frontend Developer"
          start-date="Aug 2022"
          end-date="Present"
        >
          <template #logo>
            <img src="/4ot-logo.png" class="aspect-square h-4 w-4 rounded-sm" alt="company logo">
          </template>

          <template #default>
            Rebuilding
            <NuxtLink
              to="https://ihreapotheken.de"
              external
              target="_blank"
              class="underline"
            >
              IhreApotheken.de{{ }}
            </NuxtLink>, the biggest e-commerce platform for pharmacies in Germany. Shipped our core platform as interactive web components used in hundreds of pharmacy websites across Germany.
          </template>
        </WorkExperienceEntry>

        <WorkExperienceEntry
          company="Cura4You GmbH"
          company-url="https://cura4you.de/"
          company-location="Cologne, Germany"
          position="Frontend Developer"
          start-date="Jun 2023"
          end-date="Oct 2023"
        >
          <template #logo>
            <img src="/cura-logo.jpeg" class="aspect-square h-4 w-4 rounded-sm" alt="company logo">
          </template>

          <template #default>
            Worked on Anna App, an application with a goal of making everyday life easier for people in need of extensive medical care. Implemented front-end redesign and new features, improved the performance implementing TanStack Query site-wide, organized the codebase.
          </template>
        </WorkExperienceEntry>

        <WorkExperienceEntry
          company="Three of them Ltd."
          company-url="https://www.3ofthem.eu/"
          company-location="Zapresic, Croatia"
          position="Junior Frontend Developer"
          start-date="Aug 2021"
          end-date="Sep 2022"
        >
          <template #logo>
            <img src="/3ot-logo.jpeg" class="aspect-square h-4 w-4 rounded-sm" alt="company logo">
          </template>

          <template #default>
            <p>
              Optimized the performance of the flagship IhreApotheken.de platform.
              Led the development of the custom component library and internal libraries, used as a base for core platform rebuild.
              Built and shipped inventory tracking application for pharmacy suppliers. Developed and maintained COVID-19 Vaccine Booking System.
            </p>
          </template>
        </WorkExperienceEntry>

        <WorkExperienceEntry
          company="Infokarta d.o.o"
          company-url="https://gis.infokarta.hr/"
          company-location="Split, Croatia"
          position="Full-Stack Developer"
          start-date="May 2021"
          end-date="Jul 2021"
        >
          <template #logo>
            <Icon name="ph:map-trifold-duotone" class="aspect-square h-5 w-5 rounded-sm -ml-0.5" alt="company logo" />
          </template>

          <template #default>
            Collaborated with a small team to develop a geographic information system (GIS) based web application for several local governments in the Dalmatian Region.
          </template>
        </WorkExperienceEntry>
      </div>
    </section>
  </div>
</template>
