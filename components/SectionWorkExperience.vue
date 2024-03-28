<script lang="ts" setup>

</script>

<template>
  <section>
    <h2 class="mb-4 text-3xl font-medium font-display text-rich">
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
            class="hyperlink"
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
          <Icon name="lucide:map" class="aspect-square h-5 w-5 rounded-sm -ml-0.5" alt="company logo" />
        </template>

        <template #default>
          Collaborated with a small team to develop a geographic information system (GIS) based web application for several local governments in the Dalmatian Region.
        </template>
      </WorkExperienceEntry>
    </div>
  </section>
</template>
