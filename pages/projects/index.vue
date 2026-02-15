<script lang="ts" setup>
import { motion, stagger } from 'motion-v'

const { uniqueCategories, getProjectsByCategory } = useProjects()

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Projects',
  ogTitle: 'Projects',
})

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.08),
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
}
</script>

<template>
  <div class="grid grid-cols-1 gap-12">
    <div>
      <PageHeading class="mb-6">
        Projects
      </PageHeading>

      <motion.div
        class="content-stretch flex flex-col items-stretch justify-stretch gap-8"
        :variants="containerVariants"
        initial="hidden"
        animate="show"
      >
        <motion.div
          v-for="project in getProjectsByCategory('projects')"
          :key="project.slug"
          :variants="itemVariants"
          style="will-change: transform, filter, opacity"
        >
          <ProjectCardBlock :project class="hidden md:block" />
          <ProjectCard :project class="md:hidden" />
        </motion.div>
      </motion.div>

      <div class="mt-6 flex flex-col max-w-8xl">
        <div v-for="cat in uniqueCategories.filter(cat => cat.value !== 'projects')" :key="cat.value" class="group">
          <div v-if="cat.value !== 'projects'" :id="cat.value" class="flex items-center gap-2 mt-6   pt-8 pb-6">
            <NuxtLink :to="`#${cat.value}`" class="font-display font-light text-3xl md:text-4xl transition duration-500 w-fit shrink-0 lowercase">
              {{ cat.label }}
            </NuxtLink>
          </div>

          <motion.div
            class="content-stretch projects-grid items-stretch justify-stretch gap-5"
            :variants="containerVariants"
            initial="hidden"
            animate="show"
          >
            <motion.div
              v-for="project in getProjectsByCategory(cat.value)"
              :key="project.slug"
              :variants="itemVariants"
              class="h-full"
              style="will-change: transform, filter, opacity"
            >
              <ProjectCard :project class="h-full md:min-h-auto" />
            </motion.div>
          </motion.div>
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
