<script lang="ts" setup>
defineProps<{
  label: string
  links: { linkText: string, link: string, clickToCopy?: boolean }[]
}>()

const copied = refAutoReset(false, 2000)

const { copy } = useClipboard()

const copyToClipboard = (text: string) => {
  copy(text)
  copied.value = true
}
</script>

<template>
  <BaseRow :label="label" class="items-start">
    <template #label>
      <slot name="label" />
    </template>

    <template #default>
      <div class="space-y-1">
        <template v-for="(link) in links" :key="link.link">
          <BaseTooltip
            side="right"
            :side-offset="8"
            :disabled="!link.clickToCopy"
            :content="copied ? 'Copied!' : 'Click to copy'"
            disable-closing-trigger
          >
            <div class="flex w-fit items-center">
              <button
                v-if="link.clickToCopy"
                class="decoration-0.1em decoration-offset-0.15em hover:underline flex items-center gap-1"
                @click="copyToClipboard(link.linkText)"
              >
                {{ link.linkText }}
                <Icon name="lucide:copy" class="ml-1 text-sm text-muted-foreground" />
              </button>
              <NuxtLink
                v-else
                :href="link.link"
                class="decoration-0.1em decoration-offset-0.15em hover:underline flex items-center gap-1"
                target="_blank"
              >
                {{ link.linkText }}
                <Icon name="lucide:arrow-up-right" class="text-base" />
              </NuxtLink>
            </div>
          </BaseTooltip>
        </template>
      </div>
    </template>
  </BaseRow>
</template>
