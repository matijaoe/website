<script lang="ts" setup>
const { data: btcRecs } = await useAsyncData(() => queryCollection('content').path('/btc-recs').first())

useSeoMeta({
  title: 'Bitcoin recs',
  ogTitle: 'Bitcoin recs',
})
</script>

<template>
  <div class="text-base md:text-lg">
    <PageHeading class="mb-4">
      Bitcoin recs
    </PageHeading>

    <div
      v-if="btcRecs"
      class="prose dark:prose-invert prose-h2:mb-3 prose-li:text-muted-foreground prose-ul:ps-[1.25rem] prose-li:my-1.5 prose-h3:text-xl prose-a:font-normal text-base md:text-lg !leading-relaxed -mt-2"
    >
      <ContentRenderer :value="btcRecs" />
    </div>
  </div>
</template>
