<script lang="ts" setup>
const { data: uses } = await useAsyncData(() => queryCollection('content').path('/uses').first())

useSeoMeta({
  title: 'Uses',
  ogTitle: 'Uses',
})
</script>

<template>
  <div>
    <PageHeading class="mb-4">
      My Uses
    </PageHeading>

    <div class="text-base md:text-lg">
      <p>Software I use, gadgets I love, and other things I recommend. </p>

      <div v-if="uses" class="prose dark:prose-invert prose-stone dark:prose-stone -mt-2">
        <ContentRenderer :value="uses" />
      </div>
    </div>
  </div>
</template>
