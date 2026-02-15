<script setup lang="ts">
const tools = [
  { name: 'Vue', icon: 'logos:vue' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'Apollo', icon: 'simple-icons:apollographql' },
  { name: 'GraphQL', icon: 'logos:graphql' },
  { name: 'Pinia', icon: 'logos:pinia' },
  { name: 'VueUse', icon: 'logos:vueuse' },
  { name: 'Vitest', icon: 'logos:vitest' },
  { name: 'Playwright', icon: 'logos:playwright' },
  { name: 'Radix', icon: 'simple-icons:radixui' },
  { name: 'shadcn', icon: 'simple-icons:shadcnui' },
  { name: 'Storybook', icon: 'logos:storybook-icon' },
  { name: 'Vite', icon: 'logos:vitejs' },
  { name: 'Bun', icon: 'logos:bun' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Deno', icon: 'logos:deno' },
  { name: 'Nitro', icon: 'unjs:nitro' },
  { name: 'Hono', icon: 'logos:hono' },
  { name: 'Tanstack Query', icon: 'logos:react-query-icon' },
  { name: 'React', icon: 'logos:react' },
  { name: 'Svelte', icon: 'logos:svelte-icon' },
]

function getRotation(index: number): string {
  // Deterministic pseudo-random rotation between -6 and 6 degrees
  const seed = Math.sin(index * 127.1 + 311.7) * 43758.5453
  const rotation = ((seed - Math.floor(seed)) * 2 - 1) * 6
  return `rotate(${rotation.toFixed(1)}deg)`
}
</script>

<template>
  <section class="text-default-foreground max-w-xl leading-7 prose dark:prose-invert text-base md:text-lg">
    <h2 class="text-default-foreground font-display font-medium mb-4">
      Tech stack
    </h2>

    <p>
      I build with
      <IconWithText text="Vue" icon="logos:vue" />,
      <IconWithText text="Nuxt" icon="logos:nuxt-icon" />,
      and full-stack
      <IconWithText text="TypeScript" icon="logos:typescript-icon" />, with
      <span class="text-nowrap">
        <IconWithText text="Tailwind" icon="logos:tailwindcss-icon" />
      </span> for styling and
      <IconWithText text="Vitest" icon="logos:vitest" /> for testing. On the backend, I usually reach for
      <IconWithText text="Bun" icon="logos:bun" />.
    </p>

    <p>
      These days, most of that happens in
      <IconWithText text="Claude Code" icon="logos:claude-icon" />,
      <IconWithText text="Cursor" icon="simple-icons:cursor" />,
      <span>OpenCode</span> and
      <span>Ghostty</span>, using
      <IconWithText text="Wispr Flow" icon="custom:wispr-flow" />
    </p>

    <div class="not-prose flex flex-wrap gap-3 mt-7">
      <BaseTooltip v-for="(tool, index) in tools" :key="tool.name" :content="tool.name">
        <div
          class="flex items-center justify-center size-10 rounded-lg border bg-background hover:bg-accent transition-all hover:rotate-0!"
          :style="{ transform: getRotation(index) }"
        >
          <Icon :name="tool.icon" size="1em" />
        </div>
      </BaseTooltip>
    </div>
  </section>
</template>
