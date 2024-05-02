<script lang="ts" setup>
const props = defineProps<{
  label: string
  link: string
  linkText: string
  clickToCopy?: boolean
}>()

const copied = refAutoReset(false, 2000)

const { copy } = useClipboard()

const copyToClipboard = () => {
  copy(props.linkText)
  copied.value = true
}
</script>

<template>
  <BaseRow :label="label" class="items-center">
    <template #label>
      <slot name="label" />
    </template>

    <template #default>
      <BaseTooltip :disabled="!clickToCopy" :content="copied ? ' Copied!' : 'Right click to copy'" disable-closing-trigger>
        <NuxtLink
          :href="link"
          class="decoration-0.1em decoration-offset-0.15em hover:underline"
          target="_blank"
          @contextmenu.prevent=""
          @click.right="copyToClipboard()"
        >
          {{ linkText }}
        </NuxtLink>
      </BaseTooltip>

      <Icon name="lucide:arrow-up-right" class="ml-1 text-base" />
    </template>
  </BaseRow>
</template>
