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

      <div
        v-if="uses"
        class="prose dark:prose-invert prose-h2:mb-3 prose-li:text-muted-foreground prose-ul:ps-[1.25rem] prose-li:my-1.5 prose-h3:text-xl prose-a:font-normal text-base md:text-lg !leading-relaxed -mt-2"
      >
        <ContentRenderer :value="uses" />
      </div>
    </div>
  </div>
</template>
