<script lang="ts" setup>
const props = defineProps<{
  title: string
  description?: string
}>()

const titleId = computed(() => props.title.toLowerCase().replace(/ /g, '-'))
</script>

<template>
  <section class="prose dark:prose-invert prose-headings:mt-0 prose-li:my-1.5 prose-ul:ps-[1.25rem] prose-headings:font-medium prose-a:font-normal prose-h3:text-default-foreground prose-h3:font-medium prose-h3:text-xl text-default-foreground max-w-xl text-base md:text-lg">
    <div>
      <h2 :id="titleId" class="mb-2">
        <slot name="title">
          {{ title }}
        </slot>
      </h2>
      <p v-if="description || $slots.description" class="text-muted-foreground text-base">
        <slot name="description">
          {{ description }}
        </slot>
      </p>
    </div>

    <slot />
  </section>
</template>
