<script lang="ts" setup>
const props = defineProps<{
  label: string
  links: { linkText: string, link: string, clickToCopy?: boolean }[]
  clickToCopy?: boolean
}>()

const copied = refAutoReset(false, 2000)

const { copy } = useClipboard()

const copyToClipboard = () => {
  copy(props.links[0]?.linkText ?? '')
  copied.value = true
}

// TODO: tooltip not showing anymore
const onContextMenu = (e: Event) => {
  if (props.clickToCopy) {
    e.preventDefault()
  }
}
</script>

<template>
  <BaseRow :label="label" class="items-start">
    <template #label>
      <slot name="label" />
    </template>

    <template #default>
      <!-- TODO: differentiate copy text vs copy link -->
      <div class="space-y-1">
        <template v-for="(link) in links" :key="link.link">
          <BaseTooltip
            side="right"
            :side-offset="28"
            :disabled="!clickToCopy"
            :content="copied ? ' Copied!' : 'Right click to copy'"
            disable-closing-trigger
          >
            <div class="flex items-center gap-1">
              <NuxtLink
                :href="link.link"
                class="decoration-0.1em decoration-offset-0.15em hover:underline"
                target="_blank"
                @contextmenu="onContextMenu"
                @click.right="copyToClipboard()"
              >
                {{ link.linkText }}
              </NuxtLink>

              <Icon name="lucide:arrow-up-right" class="text-base" />
            </div>
          </BaseTooltip>
        </template>
      </div>
    </template>
  </BaseRow>
</template>
