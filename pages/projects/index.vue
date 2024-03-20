<script lang="ts" setup>
const { uniqueCategories, getProjectsByCategory } = useProjects()
</script>

<template>
  <div>
    <h1 class="text-4xl font-medium font-display">
      Projects
    </h1>

    <div class="mt-6 flex flex-col gap-8">
      <div v-for="cat in uniqueCategories" :key="cat.value">
        <div v-if="cat.value !== 'projects'" class="mb-6 flex items-center gap-4">
          <hr class="w-full grow border-color-default-200 dark:border-color-default-800/70">
          <h2 class="w-fit text-sm font-display text-dim">
            {{ cat.label }}
          </h2>
          <hr class="w-full grow border-color-default-200 dark:border-color-default-800/70">
        </div>

        <div class="grid grid-cols-2 gap-x-4 gap-y-2 -mx-4">
          <template
            v-for="project in getProjectsByCategory(cat.value)"
            :key="project.slug"
          >
            <NuxtLink
              :to="{ name: 'projects-slug', params: { slug: project.slug } }"
              class="rounded-lg p-4 transition hover:bg-default-100/65 dark:hover:bg-default-800/15"
            >
              <div>
                <div class="w-full flex items-center justify-between">
                  <p class="font-semibold">
                    {{ project.name }}
                  </p>
                  <span class="text-xs text-dim">{{ project.year }}</span>
                </div>
                <div class="mt-1">
                  <p class="text-sm text-dim">
                    {{ project.description }}
                  </p>
                </div>
              </div>
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
