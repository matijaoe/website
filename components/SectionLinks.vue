<script lang="ts" setup>
const { github, linkedin, x, email } = personalLinks

const links = [github, linkedin, x]

const copied = refAutoReset(false, 2000)
const { copy } = useClipboard()

function copyToClipboard(text: string) {
  copy(text)
  copied.value = true
}
</script>

<template>
  <div class="grid grid-cols-1 gap-y-0.5 sm:grid-flow-col sm:grid-rows-2 sm:grid-cols-[180px_1fr] sm:gap-x-5 sm:gap-y-0.5">
    <NuxtLink
      v-for="item in links"
      :key="item.label"
      :href="item.url"
      class="flex w-fit items-center gap-1.5 text-lg hover:underline decoration-0.1em underline-offset-[0.15em]"
      target="_blank"
    >
      {{ item.label }}
      <Icon name="lucide:arrow-up-right" class="text-base text-muted-foreground" />
    </NuxtLink>

    <BaseTooltip
      side="right"
      :side-offset="8"
      :content="copied ? 'Copied!' : 'Click to copy'"
      disable-closing-trigger
    >
      <button
        class="flex w-fit items-center gap-1.5 text-lg hover:underline decoration-0.1em underline-offset-[0.15em]"
        @click="copyToClipboard(email.copyText)"
      >
        {{ email.label }}
        <Icon name="lucide:copy" class="text-sm text-muted-foreground" />
      </button>
    </BaseTooltip>
  </div>
</template>
