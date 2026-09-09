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

/*
  The surface lives on <html>, not <body>: body stays transparent (see
  tailwind.css) so the fixed -z-10 fluid canvas is not painted over.

  Vercel serves one cached HTML to everyone, so <html> arrives with no theme
  class — color-mode's inline script adds it. Without an unconditional
  background there is a frame with no background at all, which the browser
  paints pure white. Default to the dark surface, and to the light one when
  the system asks for it, so that frame is already correct either way.
*/
html {
  color-scheme: dark;
  background-color: #0b0a09;
}

@media (prefers-color-scheme: light) {
  html:not(.dark) {
    color-scheme: light;
    background-color: #faf8f4;
  }
}

html.light {
  color-scheme: light;
  background-color: #faf8f4;
}

html.dark {
  color-scheme: dark;
  background-color: #0b0a09;
}

.hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
