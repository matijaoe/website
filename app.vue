<template>
  <!-- F1F0E9 -->
  <Html lang="en">
    <Body class="bg-background">
      <!-- <div class="from-background fixed left-0 right-0 top-0 h-15 w-screen to-transparent bg-gradient-to-b" /> -->
      <NuxtLayout class="overflow-y-auto">
        <NuxtPage />
        <TheCanvas />
      </NuxtLayout>
      <!-- <div class="from-background fixed bottom-0 left-0 right-0 h-15 w-screen to-transparent bg-gradient-to-t" /> -->
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
