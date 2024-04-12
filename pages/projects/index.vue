<script lang="ts" setup>
const { uniqueCategories, getProjectsByCategory } = useProjects()
</script>

<template>
  <div>
    <div>
      <PageHeading>
        Projects
      </PageHeading>

      <div class="mt-6 flex flex-col">
        <div v-for="cat in uniqueCategories" :key="cat.value">
          <div v-if="cat.value !== 'projects'" :id="cat.value" class="flex items-center gap-4 py-6">
            <hr class="w-full grow border-color-default-200 dark:border-color-default-800/70">
            <NuxtLink :to="`#${cat.value}`" class="text-md hover:text-muted-foreground text-muted-foreground w-fit shrink-0 font-display lowercase">
              {{ cat.label }}
            </NuxtLink>
            <hr class="w-full grow border-color-default-200 dark:border-color-default-800/70">
          </div>

          <div class="grid grid-cols-2 gap-x-4 gap-y-2 -mx-5">
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
</style>
