<script lang="ts" setup>
const { uniqueCategories, getProjectsByCategory } = useProjects()

definePageMeta({
  layout: 'thirds',
})
</script>

<template>
  <div>
    <div>
      <PageHeading>
        Projects
      </PageHeading>

      <div class="mt-6 flex flex-col max-w-8xl">
        <div v-for="cat in uniqueCategories" :key="cat.value">
          <div v-if="cat.value !== 'projects'" :id="cat.value" class="flex items-center gap-4 py-6 mt-5">
            <hr class="border-color-default-200 dark:border-color-default-800/70 w-14">
            <NuxtLink :to="`#${cat.value}`" class="font-mono text-sm hover:text-muted-foreground text-muted-foreground w-fit shrink-0 lowercase">
              {{ cat.label }}
            </NuxtLink>
            <hr class="border-color-default-200 dark:border-color-default-800/70 w-full grow">
          </div>

          <div class="content-stretch projects-grid items-stretch justify-stretch gap-2">
            <template
              v-for="project in getProjectsByCategory(cat.value)"
              :key="project.slug"
            >
              <ProjectCard :project />
            </template>
          </div>
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
  grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
  gap: 1rem;
}
</style>
