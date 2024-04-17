<script lang="ts" setup>
const { isDark, toggleDark } = useTheme()

const { Meta_J, Ctrl_J } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
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
</script>

<template>
  <Html lang="en">
    <Body class="font-sans">
      <!-- <TheBackgroundBlobs /> -->
      <ClientOnly>
        <TheCanvas />
      </ClientOnly>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <Teleport to="body">
        <ClientOnly>
          <CommandBar />
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
