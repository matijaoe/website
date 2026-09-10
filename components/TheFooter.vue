<script lang="ts" setup>
const { github, linkedin, x, email, source } = personalLinks

const year = new Date().getFullYear()

const { display: sourceDisplay, scramble: sourceScramble } = useTextScramble(source.label, { speed: 50 })

const footerLinks = [github, linkedin, x]

const { copy } = useClipboard()
const copied = refAutoReset(false, 2000)
</script>

<template>
  <!-- Below `sm` the extra bottom padding lets the last line scroll clear of
       the fixed MobileNav instead of ending up underneath it. -->
  <footer class="mt-auto pt-20 pb-20 sm:pb-6 md:pt-48 md:pb-10 text-sm md:text-xs text-foreground/40 lowercase font-mono">
    <!-- One DOM for both layouts. Mobile stacks two groups, with the company
         on its own line so it never wraps mid-name; on desktop the groups
         collapse with `md:contents` so every child becomes a flex item of this
         row, reordered with `md:order-first` and `md:ml-auto`. -->
    <div class="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:gap-x-5 md:gap-y-2">
      <div class="flex flex-col gap-1 md:contents">
        <NuxtLink
          v-for="item in footerLinks"
          :key="item.label"
          :href="item.url"
          class="hover:text-foreground hover:underline transition-colors w-fit"
          target="_blank"
          rel="noopener noreferrer"
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
            class="hover:text-foreground hover:underline transition-colors w-fit"
            @mouseenter="copied = false"
            @click="copy(email.copyText).then(() => copied = true)"
          >
            {{ email.label }}
          </button>
        </BaseTooltip>
      </div>

      <div class="flex items-end justify-between gap-4 md:contents">
        <span class="flex flex-col md:block text-foreground/60 md:order-first"><span><span class="text-sm leading-none align-middle">&copy;</span> Matija Osrečki {{ year }}</span> <span class="hidden md:inline text-foreground/25">·</span> <span>Byproduct Studio d.o.o.</span></span>

        <span class="hidden md:inline md:order-first text-foreground/15 select-none">/</span>
        <span class="hidden md:inline md:ml-auto text-foreground/15 select-none">/</span>

        <NuxtLink
          :to="source.url"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-foreground hover:underline transition-colors inline-flex items-center gap-0.5"
          @mouseenter="sourceScramble"
        >
          {{ sourceDisplay }}
          <Icon name="lucide:arrow-up-right" class="text-xs" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
