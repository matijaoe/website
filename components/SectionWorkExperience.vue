<template>
  <section>
    <h2 class="mb-4 text-3xl font-medium font-display">
      Experience
    </h2>
    <div class="flex flex-col gap-1">
      <WorkExperienceEntry
        company="TheyDo"
        company-url="https://www.theydo.com"
        company-location="Netherlands"
        location-icon="circle-flags:nl"
        position="Senior Frontend Engineer"
        start-date="Jul 2024"
        end-date="Present"
        slug="theydo"
        logo="/theydo-logo.webp"
        :used="['Vue', 'TypeScript', 'Apollo', 'GraphQL', 'Tailwind', 'Vitest', 'Playwright', 'Radix', 'Storybook', 'Tiptap', 'Vite']"
      >
        Shaping the frontend of a journey management platform that helps enterprises connect customer insights and drive decisions across teams.
      </WorkExperienceEntry>

      <WorkExperienceEntry
        company="Four of them"
        company-url="https://www.4ofthem.eu/"
        company-location="Croatia"
        location-icon="circle-flags:hr"
        position="Frontend Developer"
        start-date="Aug 2022"
        end-date="Jun 2024"
        slug="4ofthem"
        logo="/4ot-logo.png"
        :used="['Nuxt', 'Vue', 'TypeScript', 'Pinia', 'UnoCSS', 'Quasar', 'Storybook', 'Vite', 'GraphQL']"
        logo-class="h-[14px]"
      >
        <template #default>
          Built innovative e-commerce solutions for the German pharmaceutical sector, serving millions of users.
        </template>
      </WorkExperienceEntry>

      <WorkExperienceEntry
        company="mendracare"
        company-url="https://www.mendracare.de/"
        company-location="Germany"
        location-icon="circle-flags:de"
        position="Frontend Developer"
        start-date="Jun 2023"
        end-date="Oct 2023"
        slug="mendracare"
        logo="/mendracare-logo.jpeg"
        :used="['Vue', 'JavaScript', 'Tanstack Query', 'Vuetify', 'Cypress', 'Vitest']"
      >
        <template #default>
          Developed core features for a platform that helps nurses and caregivers manage the complex needs of patients with disabilities.
        </template>
      </WorkExperienceEntry>

      <WorkExperienceEntry
        company="Three of them"
        company-url="https://www.3ofthem.eu/"
        company-location="Croatia"
        location-icon="circle-flags:hr"
        position="Junior Frontend Developer"
        start-date="Aug 2021"
        end-date="Jul 2022"
        slug="3ofthem"
        logo="/3ot-logo.jpeg"
        :used="['Vue', 'JavaScript', 'TypeScript', 'Nuxt 3', 'Pinia', 'Vuex', 'Tailwind', 'UnoCSS', 'Sass', 'PrimeVue', 'Storybook', 'Vite']"
      >
        <template #default>
          <p>
            Maintained the flagship IhreApotheken.de platform. Developed and maintained COVID-19 Vaccine Booking System.
          </p>
        </template>
      </WorkExperienceEntry>

      <WorkExperienceEntry
        company="Infokarta"
        company-url="https://gis.infokarta.hr/"
        company-location="Croatia"
        location-icon="circle-flags:hr"
        position="Frontend Developer"
        start-date="May 2021"
        end-date="Jul 2021"
        slug="infokarta"
        :used="['Nuxt', 'Vuex', 'JavaScript', 'Mapbox', 'Bootstrap', 'Sass', 'Node', 'Express', 'Postgres']"
      >
        <template #logo>
          <Icon name="emojione:world-map" class="aspect-square size-4 rounded-[2px] -ml-0.5" alt="company logo" />
        </template>

        <template #default>
          Built an interactive GIS platform for local governments to manage spatial data for urban planning and public services.
        </template>
      </WorkExperienceEntry>
    </div>
  </section>
</template>
