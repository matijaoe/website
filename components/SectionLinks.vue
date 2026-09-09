<script lang="ts" setup>
const { github, linkedin, x, email, work } = personalLinks

// the mark reads better than the domain here; the footer keeps x.com
const links = [github, linkedin, { ...x, label: '𝕏' }]
const emails = [
  { ...email, hint: 'Click to copy' },
  // The address stays in the tooltip so "Hire me" still says what it copies
  { ...work, hint: work.copyText },
]

const { copy } = useClipboard()
const copied = refAutoReset<string | null>(null, 2000)
</script>

<template>
  <div class="grid grid-cols-1 gap-y-1 sm:grid-flow-col sm:grid-rows-3 sm:grid-cols-[180px_1fr] sm:gap-x-5 sm:gap-y-1">
    <NuxtLink
      v-for="item in links"
      :key="item.label"
      :href="item.url"
      class="flex w-fit items-center gap-1.5 text-lg hover:underline decoration-0.1em underline-offset-[0.15em]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ item.label }}
      <Icon name="lucide:arrow-up-right" class="text-base text-muted-foreground" />
    </NuxtLink>

    <BaseTooltip
      v-for="item in emails"
      :key="item.label"
      side="right"
      :side-offset="8"
      :delay="0"
      :content="copied === item.copyText ? 'Copied!' : item.hint"
      disable-closing-trigger
    >
      <button
        class="flex w-fit items-center gap-1.5 text-lg hover:underline decoration-0.1em underline-offset-[0.15em]"
        @mouseenter="copied = null"
        @click="copy(item.copyText).then(() => copied = item.copyText)"
      >
        {{ item.label }}
        <Icon name="lucide:copy" class="text-sm text-muted-foreground" />
      </button>
    </BaseTooltip>
  </div>
</template>
