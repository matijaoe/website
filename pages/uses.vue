<script lang="ts" setup>
useSeoMeta({
  title: 'Projects',
  ogTitle: 'Projects',
})
</script>

<template>
  <div>
    <PageHeading class="mb-4">
      My Uses
    </PageHeading>

    <div class="text-base md:text-lg">
      <p>Software I use, gadgets I love, and other things I recommend. </p>

      <div class="prose dark:prose-invert prose-stone dark:prose-stone -mt-2">
        <ContentDoc path="/uses" />
      </div>
    </div>
  </div>
</template>
