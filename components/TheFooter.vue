<script lang="ts" setup>
const { github, linkedin, x, goodreads, resume, email, source } = personalLinks

const year = new Date().getFullYear()

const { display: sourceDisplay, scramble: sourceScramble } = useTextScramble(source.label, { speed: 50 })

const footerLinks = [
  { ...github },
  { ...linkedin },
  { label: 'x.com', url: x.url },
  { ...goodreads },
  { ...resume },
]

const { copy } = useClipboard()
const copied = refAutoReset(false, 2000)
</script>

<template>
  <footer class="mt-auto pt-20 pb-6 md:pt-36 md:pb-10 text-sm md:text-xs text-foreground/40 lowercase font-mono">
    <!-- Mobile -->
    <div class="flex flex-col gap-4 md:hidden">
      <div class="flex flex-col gap-1">
        <NuxtLink
          v-for="item in footerLinks"
          :key="item.label"
          :href="item.url"
          class="hover:text-foreground hover:underline transition-colors w-fit"
          target="_blank"
        >
          {{ item.label }}
        </NuxtLink>

        <BaseTooltip
          side="right"
          :side-offset="8"
          :delay="0"
          :content="copied ? 'Copied!' : 'Click to copy'"
          disable-closing-trigger
        >
          <button
            class="hover:text-foreground hover:underline transition-colors w-fit"
            @mouseenter="copied = false"
            @click="copy(email.copyText).then(() => copied = true)"
          >
            {{ email.label }}
          </button>
        </BaseTooltip>
      </div>

      <div class="flex items-center justify-between">
        <span class="text-foreground/60"><span class="text-sm leading-none align-middle">&copy;</span> Matija Osrečki {{ year }}</span>

        <NuxtLink
          :to="source.url"
          target="_blank"
          class="hover:text-foreground hover:underline transition-colors inline-flex items-center gap-0.5"
          @mouseenter="sourceScramble"
        >
          {{ sourceDisplay }}
          <Icon name="lucide:arrow-up-right" class="text-xs" />
        </NuxtLink>
      </div>
    </div>

    <!-- Desktop -->
    <div class="hidden md:flex md:flex-wrap md:items-center md:gap-x-5 md:gap-y-2">
      <span class="text-foreground/60"><span class="text-sm leading-none align-middle">&copy;</span> Matija Osrečki {{ year }}</span>

      <span class="text-foreground/15 select-none">/</span>

      <NuxtLink
        v-for="item in footerLinks"
        :key="item.label"
        :href="item.url"
        class="hover:text-foreground hover:underline transition-colors"
        target="_blank"
      >
        {{ item.label }}
      </NuxtLink>

      <BaseTooltip
        side="top"
        :side-offset="4"
        :delay="0"
        :content="copied ? 'Copied!' : 'Click to copy'"
        disable-closing-trigger
      >
        <button
          class="hover:text-foreground hover:underline transition-colors"
          @mouseenter="copied = false"
          @click="copy(email.copyText).then(() => copied = true)"
        >
          {{ email.label }}
        </button>
      </BaseTooltip>

      <span class="text-foreground/15 select-none ml-auto">/</span>

      <NuxtLink
        :to="source.url"
        target="_blank"
        class="hover:text-foreground hover:underline transition-colors inline-flex items-center gap-0.5"
        @mouseenter="sourceScramble"
      >
        {{ sourceDisplay }}
        <Icon name="lucide:arrow-up-right" class="text-xs" />
      </NuxtLink>
    </div>
  </footer>
</template>
