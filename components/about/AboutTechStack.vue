<script setup lang="ts">
import { motion, stagger } from 'motion-v'

const tools = [
  { name: 'React', icon: 'logos:react' },
  { name: 'Next.js', icon: 'logos:nextjs-icon' },
  { name: 'Vue', icon: 'logos:vue' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'Tiptap', icon: 'custom:tiptap' },
  { name: 'Base UI', icon: 'custom:base-ui' },
  { name: 'shadcn', icon: 'simple-icons:shadcnui' },
  { name: 'Tanstack Query', icon: 'logos:react-query-icon' },
  { name: 'Vitest', icon: 'logos:vitest' },
  { name: 'Playwright', icon: 'logos:playwright' },
  { name: 'Storybook', icon: 'logos:storybook-icon' },
  { name: 'Vite', icon: 'custom:vite' },
  { name: 'Bun', icon: 'logos:bun' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Nitro', icon: 'unjs:nitro' },
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
      These days I mostly build with
      <IconWithText text="React" icon="logos:react" />, full-stack
      <IconWithText text="TypeScript" icon="logos:typescript-icon" /> and
      <span class="text-nowrap">
        <IconWithText text="Tailwind" icon="logos:tailwindcss-icon" />
      </span>, though my favorite stack is still
      <IconWithText text="Vue" icon="logos:vue" /> and
      <IconWithText text="Nuxt" icon="logos:nuxt-icon" />. On the backend, I usually reach for
      <IconWithText text="Bun" icon="logos:bun" />.
    </p>

    <p>
      Most of that happens in
      <IconWithText text="Cursor" icon="simple-icons:cursor" />,
      <IconWithText text="Codex" icon="custom:codex" />,
      <IconWithText text="Claude Code" icon="logos:claude-icon" /> and
      <IconWithText text="Grok" icon="custom:grok" />, alongside
      <IconWithText text="Ghostty" icon="custom:ghostty" /> and
      <IconWithText text="Wispr Flow" icon="custom:wispr-flow" />.
    </p>

    <motion.div
      class="not-prose grid grid-cols-6 sm:grid-cols-9 gap-2 sm:gap-3 mt-7"
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
            class="flex aspect-square w-full items-center justify-center rounded-lg border border-foreground/10 bg-background-alt hover:bg-muted transition-colors cursor-default"
            :style="{ rotate: `${getRotation(index)}deg` }"
            :while-hover="{ y: -4, scale: 1.15, rotate: 0, transition: { duration: 0.2 } }"
          >
            <Icon :name="tool.icon" size="1.25em" />
          </motion.div>
        </BaseTooltip>
      </motion.div>
    </motion.div>
  </section>
</template>
