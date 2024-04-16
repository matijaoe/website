<script lang="ts" setup>
const { isDark } = useTheme()
</script>

<template>
  <Html lang="en">
    <Body class="font-sans">
      <!-- <TheBackgroundBlobs v-if="isDark" /> -->
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
