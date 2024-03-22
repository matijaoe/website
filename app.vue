<template>
  <Html lang="en">
    <Body class="bg-default-50 bg-white text-default-900 font-sans dark:bg-[#111010] dark:text-default-200">
      <NuxtLayout class="min-h-screen">
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style>
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
</style>
