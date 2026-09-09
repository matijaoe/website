<script lang="ts" setup>
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

const description = 'Senior Frontend Engineer from Croatia. Crafting sleek software, obsessing over the details.'

// Absolute URLs — crawlers resolve these off-site, so a relative path yields no preview.
const siteUrl = 'https://matijao.com'
const ogImage = `${siteUrl}/og.png`

// titleTemplate lives in nuxt.config's app.head; setting it here too just gives
// two places to edit.
useSeoMeta({
  description,
  ogType: 'website',
  ogSiteName: 'Matija Osrečki',
  ogUrl: siteUrl,
  ogDescription: description,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Matija Osrečki — crafting sleek web experiences',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Matija Osrečki',
  twitterDescription: description,
  twitterImage: ogImage,
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
    </Body>
  </Html>
</template>

<style>
:root {
  --sidebar: 14rem;
}

/* color-scheme only — the surface lives on <body>, see tailwind.css for why. */
html.light {
  color-scheme: light;
}

html.dark {
  color-scheme: dark;
}

.hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
