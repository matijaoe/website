<script lang="ts" setup>
import { Analytics } from '@vercel/analytics/nuxt'
import Toaster from './components/ui/toast/Toaster.vue'

const { toggleDark, isDark } = useTheme()

// eslint-disable-next-line ts/naming-convention
const { Meta_J, Ctrl_J } = useMagicKeys({
  passive: false,
})

const { isApple } = useDevice()

if (isApple) {
  whenever(Meta_J, () => toggleDark())
} else {
  whenever(Ctrl_J, () => toggleDark())
}

const description = 'I\'m Matija, a software engineer who ships fast and obsesses over the details that matter.'

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

      <ClientOnly>
        <TheCanvas v-if="isDark" />
        <TheGrain v-else />
      </ClientOnly>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <Analytics />
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
