<script setup lang="ts">
import { motion, stagger } from 'motion-v'

const tools = [
  { name: 'Vue', icon: 'logos:vue' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'Apollo', icon: 'simple-icons:apollographql' },
  { name: 'GraphQL', icon: 'logos:graphql' },
  { name: 'Tanstack Query', icon: 'logos:react-query-icon' },
  { name: 'React', icon: 'logos:react' },
  { name: 'Vitest', icon: 'logos:vitest' },
  { name: 'Playwright', icon: 'logos:playwright' },
  { name: 'Pinia', icon: 'logos:pinia' },
  { name: 'VueUse', icon: 'logos:vueuse' },
  { name: 'Radix', icon: 'simple-icons:radixui' },
  { name: 'shadcn', icon: 'simple-icons:shadcnui' },
  { name: 'Storybook', icon: 'logos:storybook-icon' },
  { name: 'Bun', icon: 'logos:bun' },
  { name: 'Deno', icon: 'logos:deno' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Vite', icon: 'logos:vitejs' },
  { name: 'Nitro', icon: 'unjs:nitro' },
  { name: 'Hono', icon: 'logos:hono' },
  { name: 'Drizzle', icon: 'simple-icons:drizzle' },
]

function getRotation(index: number): number {
  // Deterministic pseudo-random rotation between -6 and 6 degrees
  const seed = Math.sin(index * 127.1 + 311.7) * 43758.5453
  return ((seed - Math.floor(seed)) * 2 - 1) * 6
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

    <motion.div
      class="not-prose flex flex-wrap gap-3 mt-7"
      :variants="{
        hidden: {},
        show: {
          transition: {
            delayChildren: stagger(0.04),
          },
        },
      }"
      initial="hidden"
      while-in-view="show"
      :once="true"
      :viewport="{ amount: 0.2 }"
    >
      <motion.div
        v-for="(tool, index) in tools"
        :key="tool.name"
        :variants="{
          hidden: { opacity: 0, y: 12 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            },
          },
        }"
      >
        <BaseTooltip :content="tool.name">
          <motion.div
            class="flex items-center justify-center size-10 rounded-lg border border-foreground/10 bg-background-alt hover:bg-muted transition-colors cursor-default"
            :style="{ rotate: `${getRotation(index)}deg` }"
            :while-hover="{ y: -4, scale: 1.15, rotate: 0, transition: { duration: 0.2 } }"
          >
            <Icon :name="tool.icon" size="1em" />
          </motion.div>
        </BaseTooltip>
      </motion.div>
    </motion.div>
  </section>
</template>
