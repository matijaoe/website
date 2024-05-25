<script lang="ts" setup>
const { uniqueCategories, getProjectsByCategory } = useProjects()

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Projects',
  ogTitle: 'Projects'
})
</script>

<template>
  <div class="grid grid-cols-[1fr_14rem] gap-12">
    <div>
      <PageHeading class="mb-6">
        Projects
      </PageHeading>

      <div class="content-stretch flex flex-col items-stretch justify-stretch gap-8">
        <template
          v-for="project in getProjectsByCategory('projects')"
          :key="project.slug"
        >
          <ProjectCardBlock :project />
        </template>
      </div>

      <div class="mt-6 flex flex-col max-w-8xl">
        <div v-for="cat in uniqueCategories.filter(cat => cat.value !== 'projects')" :key="cat.value" class="group">
          <div v-if="cat.value !== 'projects'" :id="cat.value" class="flex items-center gap-2 mt-6   pt-8 pb-6">
            <NuxtLink :to="`#${cat.value}`" class="font-display font-light text-4xl transition duration-500 w-fit shrink-0 lowercase">
              {{ cat.label }}
            </NuxtLink>
          </div>

          <div class="content-stretch projects-grid items-stretch justify-stretch gap-5">
            <template
              v-for="project in getProjectsByCategory(cat.value)"
              :key="project.slug"
            >
              <ProjectCard :project class="md:min-h-auto" />
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="sticky top-24 right-0">
        <div class="flex flex-col gap-2 text-lg font-sans font-medium text-muted-foreground text-right lowercase">
          <NuxtLink v-for="cat in uniqueCategories.filter(cat => cat.value !== 'projects')" :key="cat.value" :to="`#${cat.value}`" class="transition hover:text-foreground">
            {{ cat.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img.active {
  view-transition-name: selected-film;
  contain: layout;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr) );
}
</style>
