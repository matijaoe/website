<script lang="ts" setup>
const { uniqueCategories, getProjectsByCategory } = useProjects()
</script>

<template>
  <div>
    <PageHeading>
      Projects
    </PageHeading>

    <div class="mt-6 flex flex-col">
      <div v-for="cat in uniqueCategories" :key="cat.value">
        <div v-if="cat.value !== 'projects'" :id="cat.value" class="flex items-center gap-4 py-6">
          <hr class="w-full grow border-color-default-200 dark:border-color-default-800/70">
          <NuxtLink :to="`#${cat.value}`" class="text-md w-fit shrink-0 font-display lowercase hover:text-dim-2 text-dim">
            {{ cat.label }}
          </NuxtLink>
          <hr class="w-full grow border-color-default-200 dark:border-color-default-800/70">
        </div>

        <div class="grid grid-cols-2 gap-x-4 gap-y-2 -mx-5">
          <template
            v-for="project in getProjectsByCategory(cat.value)"
            :key="project.slug"
          >
            <NuxtLink
              :to="{ name: 'projects-projectSlug', params: { projectSlug: project.slug } }"
              class="block flex flex-col rounded-xl px-5 py-4 transition hover:bg-default-100/60 dark:hover:bg-default-900/70"
            >
              <div>
                <div class="w-full flex items-center justify-between">
                  <p class="text-lg font-semibold">
                    {{ project.name }}
                  </p>
                  <span class="text-xs font-mono text-dim">{{ project.year }}</span>
                </div>
                <div class="mt-1.5">
                  <p class="text-sm text-dim-2">
                    {{ project.description }}
                  </p>
                </div>
              </div>

              <div v-if="project.tags.length" class="mt-auto flex pt-2">
                <div v-for="(tag, idx) in project.tags" :key="tag" class="flex items-center justify-center text-dim">
                  <span class="text-11px leading-none font-mono lowercase">{{ tag }}</span>
                  <span v-if="idx < project.tags.length - 1 " class="mx-1 font-light">/</span>
                </div>
              </div>
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
