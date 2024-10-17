<!-- eslint-disable ts/naming-convention -->
<script lang="ts" setup>
import Toaster from './components/ui/toast/Toaster.vue'

const { toggleDark } = useTheme()

const { Meta_J, Ctrl_J } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.metaKey || e.ctrlKey) {
      e.preventDefault()
    }
  },
})

const { isApple } = useDevice()

if (isApple) {
  whenever(Meta_J, () => toggleDark())
} else {
  whenever(Ctrl_J, () => toggleDark())
}

const description = 'Frontend software engineer with a relentless focus on quality.'

useSeoMeta({
  titleTemplate: '%s • matijao',
  description,
  ogDescription: description,
  ogUrl: 'matijao.com',
  twitterTitle: 'Matija Osrečki',
  twitterDescription: description,
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
})
</script>

<template>
  <Html lang="en">
    <Body>
      <Toaster />

      <!-- <TheBackgroundBlobs /> -->

      <ClientOnly>
        <TheCanvas />
      </ClientOnly>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <Teleport to="body">
        <ClientOnly>
          <!-- <CommandBar /> -->
        </ClientOnly>
      </Teleport>
    </Body>
  </Html>
</template>

<style>
:root {
  --sidebar: 14rem;
}

html.dark {
  color-scheme: dark;
}

.hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
