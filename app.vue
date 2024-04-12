<template>
  <!-- F1F0E9 -->
  <Html lang="en">
    <Body class="bg-background">
      <!-- <div class="from-secondary fixed left-0 right-0 top-0 h-15 w-screen to-transparent bg-gradient-to-b dark:from-[#111010]" /> -->
      <NuxtLayout class="overflow-y-auto">
        <NuxtPage />
      </NuxtLayout>
      <!-- <div class="from-secondary fixed bottom-0 left-0 right-0 h-15 w-screen to-transparent bg-gradient-to-t dark:from-[#111010]" /> -->
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
