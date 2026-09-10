<script setup lang="ts">
type Book = {
  title: string
  author?: string
  url?: string
  description?: string
}

const props = defineProps<{
  categories: { title: string, description?: string, books: Book[] }[]
}>()

// Book-cloth colours. Each spine takes its colour, height and thickness from a
// hash of its title, so the shelf looks the same on every visit.
const CLOTHS = [
  { bg: '#2f4a3a', fg: '#ece5d3' }, // bottle green
  { bg: '#6b2626', fg: '#f3e7d7' }, // oxblood
  { bg: '#1e2b47', fg: '#e9e3d1' }, // navy
  { bg: '#c9a349', fg: '#2a2210' }, // mustard
  { bg: '#e8dfca', fg: '#2c261c' }, // cream
  { bg: '#2a2927', fg: '#e8e2d4' }, // charcoal
  { bg: '#a5543a', fg: '#fbefe3' }, // terracotta
  { bg: '#51606a', fg: '#eef0ec' }, // slate
  { bg: '#5d4b6e', fg: '#f1eaf4' }, // aubergine
  { bg: '#cfc3a6', fg: '#3a3024' }, // linen
]

function hash(text: string) {
  let h = 2166136261
  for (const char of text) {
    h ^= char.charCodeAt(0)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

const shelves = computed(() => props.categories.map((category) => ({
  ...category,
  spines: category.books.map((book) => {
    const h = hash(book.title)
    const cloth = CLOTHS[h % CLOTHS.length]!
    return {
      book,
      bands: (h >>> 12) % 3,
      style: {
        '--h': `${176 + ((h >>> 4) % 6) * 10}px`,
        '--pad': `${6 + ((h >>> 8) % 4) * 2}px`,
        '--bg': cloth.bg,
        '--fg': cloth.fg,
      },
    }
  }),
})))

const lastName = (author: string) => author.split(' ').at(-1)
</script>

<template>
  <div class="not-prose flex flex-col gap-10">
    <div v-for="shelf in shelves" :key="shelf.title">
      <h3 class="mb-1 font-display text-xl text-default-foreground">
        {{ shelf.title }}
      </h3>
      <p v-if="shelf.description" class="mb-1 text-base text-muted-foreground">
        {{ shelf.description }}
      </p>

      <!-- Wider than the prose column on purpose: a shelf needs the room.
           Below that it scrolls sideways instead of wrapping. -->
      <div class="w-[min(62rem,calc(100vw_-_2.5rem))] md:w-[min(62rem,calc(100vw_-_4rem))] lg:w-[min(62rem,calc(100vw_-_10rem))]">
        <ul role="list" class="hide-scrollbar flex items-end gap-[3px] overflow-x-auto pl-1 pt-5 [scrollbar-width:none]">
          <li
            v-for="(spine, i) in shelf.spines"
            :key="spine.book.title"
            class="shrink-0"
            :class="{ lean: i === shelf.spines.length - 1 }"
          >
            <!-- Still opens Goodreads for now; what a click should do is open -->
            <NuxtLink
              :to="spine.book.url"
              external
              target="_blank"
              rel="noopener noreferrer"
              class="spine"
              :class="`bands-${spine.bands}`"
              :style="spine.style"
              :aria-label="[spine.book.title, spine.book.author].filter(Boolean).join(' by ')"
            >
              <span class="spine-title">{{ spine.book.title }}</span>
              <span v-if="spine.book.author" class="spine-author">{{ lastName(spine.book.author) }}</span>
            </NuxtLink>
          </li>
        </ul>
        <div class="ledge" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.spine {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  writing-mode: vertical-rl;
  height: var(--h);
  padding: 12px var(--pad);
  color: var(--fg);
  background-color: var(--bg);
  /* Rounded-spine shading: dark at both edges, a soft highlight left of centre */
  background-image: linear-gradient(90deg, rgb(0 0 0 / 0.3), rgb(255 255 255 / 0.12) 20%, rgb(255 255 255 / 0) 45%, rgb(0 0 0 / 0.1) 80%, rgb(0 0 0 / 0.34));
  border-radius: 2px 2px 1px 1px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.18);
  transition: transform 350ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.spine:hover,
.spine:focus-visible {
  transform: translateY(-12px);
}

.spine:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

/* In vertical-rl the inline axis is the spine's height, so this caps the
   title's length and long titles wrap into a second column instead. */
.spine-title {
  max-inline-size: calc(var(--h) - 80px);
  font-family: 'Instrument Serif', ui-serif, serif;
  font-size: 15px;
  line-height: 1.1;
  text-wrap: balance;
}

.spine-author {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 8.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.7;
}

.bands-1::before,
.bands-1::after {
  content: '';
  position: absolute;
  left: 3px;
  right: 3px;
  height: 1px;
  background: currentColor;
  opacity: 0.35;
}

.bands-1::before {
  top: 7px;
}

.bands-1::after {
  bottom: 7px;
}

.bands-2::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 18px;
  height: 10px;
  background: currentColor;
  opacity: 0.16;
}

/* The last book on each shelf leans on its neighbour */
.lean {
  margin-left: 20px;
  rotate: -5deg;
  transform-origin: bottom left;
}

.ledge {
  height: 7px;
  border-radius: 1px;
  background: hsl(var(--foreground) / 0.14);
  box-shadow: 0 10px 18px -10px rgb(0 0 0 / 0.6);
}

@media (prefers-reduced-motion: reduce) {
  .spine {
    transition: none;
  }
}
</style>
