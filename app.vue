<script lang="ts" setup>
const { isDark } = useTheme()
</script>

<template>
  <Html lang="en">
    <Body>
      <!-- <TheBackgroundBlobs v-if="isDark" /> -->
      <ClientOnly>
        <LazyTheCanvas />
      </ClientOnly>

      <NuxtLayout class="overflow-y-auto">
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
  --sidebar: 18rem;
}

html.dark {
  color-scheme: dark;
}

.hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
