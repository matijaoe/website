<script lang="ts" setup>
const now = useNow()
const year = computed(() => now.value.getFullYear())
</script>

<template>
  <footer class="mt-auto pt-20 pb-10 flex items-center justify-start text-sm text-foreground/40">
    <div class="w-full flex flex-col md:flex-row items-center justify-between gap-8">
      <p>Matija Osrečki {{ year }} &copy;</p>

      <div class="flex items-center gap-4 lowercase">
        <NuxtLink to="https://github.com/matijaoe/website" target="_blank" class="hover:underline hover:text-foreground">
          Code
        </NuxtLink>
        <NuxtLink to="https://2023.matijao.com" target="_blank" class="hover:underline hover:text-foreground">
          Old site
        </NuxtLink>
        <NuxtLink to="/attribution" class="hover:underline hover:text-foreground">
          Attribution
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
