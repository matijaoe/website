<template>
  <Html lang="en">
    <Body class="bg-[#F1F0E9] bg-default-50 text-default-900 font-sans dark:bg-[#111010] dark:text-default-200">
      <!-- <div class="fixed left-0 right-0 top-0 h-20 w-screen from-[#F1F0E9] to-transparent bg-gradient-to-b opacity-0 dark:from-[#111010]" /> -->
      <NuxtLayout class="min-h-screen">
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
  /* TODO */
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
