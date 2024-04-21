<script lang="ts" setup>

</script>

<template>
  <section>
    <h2 class="mb-4 text-3xl font-medium font-display">
      Experience
    </h2>
    <div class="flex flex-col gap-1">
      <WorkExperienceEntry
        company="Four of them LLC"
        company-url="https://www.4ofthem.eu/"
        company-location="Zapresic, Croatia"
        location-icon="circle-flags:hr"
        position="Frontend Developer"
        start-date="Aug 2022"
        end-date="Present"
        slug="4ofthem"
        :used="['Nuxt', 'Vue', 'TypeScript', 'Pinia', 'Uno CSS', 'Quasar', 'Vite', 'Storybook', 'GraphQL']"
      >
        <template #logo>
          <img src="/4ot-logo.png" class="aspect-square h-4 w-4 rounded-sm" alt="company logo">
        </template>

        <template #default>
          Developing innovative e-commerce solutions tailored to the German pharmaceutical sector, impacting millions of users.
        </template>
      </WorkExperienceEntry>

      <WorkExperienceEntry
        company="Cura4You GmbH"
        company-url="https://cura4you.de/"
        company-location="Cologne, Germany"
        location-icon="circle-flags:de"
        position="Frontend Developer"
        start-date="Jun 2023"
        end-date="Oct 2023"
        slug="cura"
        :used="['Vue', 'JavaScript', 'Tanstack Query', 'Vuetify', 'Cypress', 'Vitest']"
      >
        <template #logo>
          <img src="/cura-logo.jpeg" class="aspect-square h-4 w-4 rounded-sm" alt="company logo">
        </template>

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
        :used="['Vue', 'JavaScript', 'TypeScript', 'Nuxt', 'Pinia', 'Vuex', 'Tailwind', 'Uno CSS', 'Sass', 'PrimeVue', 'Storybook', 'Vite']"
      >
        <template #logo>
          <img src="/3ot-logo.jpeg" class="aspect-square h-4 w-4 rounded-sm" alt="company logo">
        </template>

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
        position="Full-Stack Developer"
        start-date="May 2021"
        end-date="Jul 2021"
        slug="infokarta"
        :used="['Nuxt 2', 'Vuex', 'JavaScript', 'Mapbox', 'Bootstrap', 'Sass', 'Node', 'Express', 'Postgres']"
      >
        <template #logo>
          <Icon name="lucide:map" class="aspect-square h-5 w-5 rounded-sm -ml-0.5" alt="company logo" />
        </template>

        <template #default>
          Built a highly dynamic web-based GIS application tailored for local governments.
        </template>
      </WorkExperienceEntry>
    </div>
  </section>
</template>
