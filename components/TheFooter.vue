<script lang="ts" setup>
const now = useNow()
const year = computed(() => now.value.getFullYear())

const { display: sourceDisplay, scramble: sourceScramble } = useTextScramble('Source', { speed: 50 })
</script>

<template>
  <footer class="mt-auto pt-24 pb-10 flex items-center justify-start text-xs text-foreground/40">
    <div class="w-full flex flex-col md:flex-row items-center justify-between gap-8">
      <p class="font-mono">
        &copy; Matija Osrečki {{ year }}
      </p>

      <div class="flex items-center gap-7 lowercase">
        <NuxtLink to="https://github.com/matijaoe/website" target="_blank" class="hover:underline hover:text-foreground font-mono" @mouseenter="sourceScramble">
          {{ sourceDisplay }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
