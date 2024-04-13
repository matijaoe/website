<template>
  <Html lang="en">
    <Body>
      <TheCanvas />
      <NuxtLayout class="overflow-y-auto">
        <NuxtPage />
      </NuxtLayout>
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
