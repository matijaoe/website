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
        slug="4ot"
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
            class="decoration-dotted hyperlink"
          >
            IhreApotheken.de{{ }}
          </NuxtLink>, the biggest e-commerce platform for pharmacies in Germany.
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
      >
        <template #logo>
          <img src="/cura-logo.jpeg" class="aspect-square h-4 w-4 rounded-sm" alt="company logo">
        </template>

        <template #default>
          Contributed to the development of the Anna App, a web-based platform tailored for nurses and caregivers to effectively support patients with disabilities, ensuring seamless management of their complex medical needs.
        </template>
      </WorkExperienceEntry>

      <WorkExperienceEntry
        company="Three of them Ltd."
        company-url="https://www.3ofthem.eu/"
        company-location="Zapresic, Croatia"
        location-icon="circle-flags:hr"
        position="Junior Frontend Developer"
        start-date="Aug 2021"
        end-date="Sep 2022"
        slug="3ot"
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
      >
        <template #logo>
          <Icon name="lucide:map" class="aspect-square h-5 w-5 rounded-sm -ml-0.5" alt="company logo" />
        </template>

        <template #default>
          Built web based GIS application for local governments in the Dalmatian Region.
        </template>
      </WorkExperienceEntry>
    </div>
  </section>
</template>
