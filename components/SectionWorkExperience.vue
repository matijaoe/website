<template>
  <section>
    <h2 class="mb-4 text-3xl font-medium font-display">
      Experience
    </h2>
    <div class="flex flex-col gap-1">
      <WorkExperienceEntry
        company="TheyDo"
        company-url="https://www.theydo.com"
        company-location="Amsterdam, Netherlands"
        location-icon="circle-flags:nl"
        position="Frontend Engineer"
        start-date="Jul 2024"
        end-date="Present"
        slug="theydo"
        logo="/theydo-logo.png"
        :used="['Vue', 'TypeScript', 'Apollo', 'GraphQL', 'Tailwind', 'Vite', 'Vitest', 'Playwright', 'Radix', 'Storybook']"
      >
        Helping enterprises map and improve customer journeys by building intuitive tools for collaboration and decision-making.
      </WorkExperienceEntry>

      <WorkExperienceEntry
        company="Four of them LLC"
        company-url="https://www.4ofthem.eu/"
        company-location="Zapresic, Croatia"
        location-icon="circle-flags:hr"
        position="Frontend Developer"
        start-date="Aug 2022"
        end-date="Jun 2024"
        slug="4ofthem"
        logo="/4ot-logo.png"
        :used="['Nuxt 3', 'Vue', 'TypeScript', 'Pinia', 'UnoCSS', 'Quasar', 'Vite', 'Storybook', 'GraphQL']"
        logo-class="h-[14px]"
      >
        <template #default>
          Developing innovative e-commerce solutions tailored to the German pharmaceutical sector, impacting millions of users.
        </template>
      </WorkExperienceEntry>

      <WorkExperienceEntry
        company="mannacare"
        company-url="https://www.mannacare.de/"
        company-location="Cologne, Germany"
        location-icon="circle-flags:de"
        position="Frontend Developer"
        start-date="Jun 2023"
        end-date="Oct 2023"
        slug="cura"
        logo="/cura-logo.jpeg"
        :used="['Vue', 'JavaScript', 'Tanstack Query', 'Vuetify', 'Cypress', 'Vitest']"
      >
        <template #default>
          Contributed to the development of a web platform for nurses and caregivers to effectively support patients with severe disabilities, ensuring seamless management of their complex medical needs.
        </template>
      </WorkExperienceEntry>

      <WorkExperienceEntry
        company="Three of them Ltd."
        company-url="https://www.3ofthem.eu/"
        company-location="Zapresic, Croatia"
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
        company="Infokarta d.o.o"
        company-url="https://gis.infokarta.hr/"
        company-location="Split, Croatia"
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
          Developed an interactive web-based GIS platform enabling local governments to visualize, analyze, and manage spatial data for urban planning, asset tracking, and public services.
        </template>
      </WorkExperienceEntry>
    </div>
  </section>
</template>
