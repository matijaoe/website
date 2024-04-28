<script lang="ts" setup>
const now = useNow()
const year = computed(() => now.value.getFullYear())
</script>

<template>
  <footer class="py-10 flex items-center justify-start text-sm text-foreground/40 mt-auto">
    <div class="w-full flex items-center justify-between gap-8">
      <p>Matija Osrečki {{ year }} &copy; All Rights Reserved</p>
      <div>
        <NuxtLink to="/attribution" class="hover:underline hover:text-foreground">
          attribution
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
