<template>
  <!-- F1F0E9 -->
  <Html lang="en">
    <!--  dark:bg-[#111010] -->
    <Body>
      <!-- <div class="from-secondary fixed left-0 right-0 top-0 h-15 w-screen to-transparent bg-gradient-to-b dark:from-[#111010]" /> -->
      <NuxtLayout class="min-h-screen overflow-y-auto">
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

::selection {
  --uno: bg-default-300/30 dark:(bg-default-300/4);
}

.hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}

::view-transition-old(root) {
  /* animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out; */
}

::view-transition-new(root) {
  /* animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in; */
}
</style>
