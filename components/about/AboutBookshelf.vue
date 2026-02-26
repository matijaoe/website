<script setup lang="ts">
type Book = {
  title: string
  author?: string
  url?: string
  description?: string
}

type BookCategory = {
  title: string
  description?: string
  books: Book[]
}

const readingStreakStart = new Date('2020-04-27')
const readingStreakDays = computed(() => {
  const today = new Date()
  const diffTime = Math.abs(today.getTime() - readingStreakStart.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays.toLocaleString()
})

const fictionBooks: Book[] = [
  { title: 'Animal Farm', author: 'George Orwell', url: 'https://www.goodreads.com/book/show/8349198-animal-farm', description: '📖 🎧' },
  { title: 'Stoner', author: 'John Williams', url: 'https://www.goodreads.com/book/show/166997.Stoner', description: '📖' },
  { title: 'Grapes of Wrath', author: 'John Steinbeck', url: 'https://www.goodreads.com/book/show/22024055-the-grapes-of-wrath', description: '📖' },
  { title: 'The Metamorphosis', author: 'Franz Kafka', url: 'https://www.goodreads.com/book/show/17986414-the-metamorphosis', description: '📖' },
  { title: 'The Death of Ivan Ilyich', author: 'Leo Tolstoy', url: 'https://www.goodreads.com/book/show/18386.The_Death_of_Ivan_Ilych', description: '📖' },
  { title: 'The Overcoat', author: 'Nikolai Gogol', url: 'https://www.goodreads.com/book/show/24381671-the-overcoat', description: '📖' },
  { title: 'The Mandibles', author: 'Lionel Shriver', url: 'https://www.goodreads.com/book/show/27064345-the-mandibles', description: '📖' },
  { title: 'Convenience Store Woman', author: 'Sayaka Murata', url: 'https://www.goodreads.com/book/show/38357895-convenience-store-woman', description: '📖' },
  { title: 'The Stranger', author: 'Albert Camus', url: 'https://www.goodreads.com/book/show/49552.The_Stranger', description: '📖' },
  { title: 'Chess', author: 'Stefan Zweig', url: 'https://www.goodreads.com/book/show/32599701-chess', description: '📖' },
  { title: 'Notes from Underground', author: 'Fyodor Dostoevsky', url: 'https://www.goodreads.com/book/show/49455.Notes_from_Underground', description: '📖' },
  { title: 'Project Hail Mary', author: 'Andy Weir', url: 'https://www.goodreads.com/book/show/54493401-project-hail-mary', description: '📖' },
  { title: 'Earthseed', author: 'Octavia E. Butler', url: 'https://www.goodreads.com/series/57804-earthseed', description: '📖' },
]

const nonfictionBooks: Book[] = [
  { title: 'Meditations', author: 'Marcus Aurelius', url: 'https://www.goodreads.com/book/show/1168191.Meditations', description: '📖' },
  { title: 'Man\'s Search for Meaning', author: 'Viktor Frankl', url: 'https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning', description: '📖' },
  { title: 'Psycho-Cybernetics', author: 'Maxwell Maltz', url: 'https://www.goodreads.com/book/show/24611751-psycho-cybernetics', description: '📖' },
  { title: 'The Almanack of Naval Ravikant', url: 'https://www.goodreads.com/book/show/54898389-the-almanack-of-naval-ravikant', description: '📖' },

  { title: 'Broken Money', author: 'Lyn Alden', url: 'https://www.goodreads.com/book/show/197566578-broken-money', description: '📖' },
  { title: 'Thank God for Bitcoin', author: 'Jimmy Song', url: 'https://www.goodreads.com/book/show/56428689-thank-god-for-bitcoin', description: '📖' },
  { title: 'The Genesis Book', author: 'Aaron van Wirdum', url: 'https://www.goodreads.com/book/show/204250558-the-genesis-book', description: '📖' },
  { title: 'The Richest Man in Babylon', author: 'George S. Clason', url: 'https://www.goodreads.com/book/show/29937903-the-richest-man-in-babylon', description: '🎧' },
  { title: 'Psychology of Money', author: 'Morgan Housel', url: 'https://www.goodreads.com/book/show/41881472-the-psychology-of-money', description: '📖' },

  { title: 'Down and Out in Paris and London', author: 'George Orwell', url: 'https://www.goodreads.com/book/show/393199.Down_and_Out_in_Paris_and_London', description: '📖' },
  { title: 'The Boys in the Boat', author: 'Daniel James Brown', url: 'https://www.goodreads.com/book/show/16158542-the-boys-in-the-boat', description: '🎧' },
  { title: 'Shoe Dog', author: 'Phil Knight', url: 'https://www.goodreads.com/book/show/30508222-shoe-dog', description: '🎧' },
  { title: 'Born a Crime', author: 'Trevor Noah', url: 'https://www.goodreads.com/book/show/29780253-born-a-crime', description: '🎧' },
  { title: 'Elon Musk', author: 'Walter Isaacson', url: 'https://www.goodreads.com/book/show/122765395-elon-musk', description: '🎧' },
  { title: 'Steve Jobs', author: 'Walter Isaacson', url: 'https://www.goodreads.com/book/show/11084145-steve-jobs', description: '🎧' },
  { title: 'I\'m Glad My Mom Died', author: 'Jennette McCurdy', url: 'https://www.goodreads.com/book/show/59366244-i-m-glad-my-mom-died', description: '🎧' },

  { title: 'The Code Book', author: 'Simon Singh', url: 'https://www.goodreads.com/book/show/17994.The_Code_Book', description: '📖' },
  { title: 'Stephen Fry\'s Great Mythology (series)', author: 'Stephen Fry', url: 'https://www.goodreads.com/series/243176-stephen-fry-s-great-mythology', description: '🎧' },
  { title: 'Sapiens', author: 'Yuval Noah Harari', url: 'https://www.goodreads.com/book/show/23692271-sapiens', description: '📖' },
  { title: 'Maus', author: 'Art Spiegelman', url: 'https://www.goodreads.com/book/show/15195.The_Complete_Maus', description: '📖' },
]

const categories: BookCategory[] = [
  {
    title: 'Fiction',
    description: 'Mostly classics, a few modern works.',
    books: fictionBooks,
  },
  {
    title: 'Nonfiction',
    description: 'Mix of philosophy, economics, memoirs, tech, business, history, and anything else I find interesting at the moment.',
    books: nonfictionBooks,
  },
]
</script>

<template>
  <AboutProseWrapper title="Bookshelf">
    <template #description>
      I picked up reading in 2020 and it stuck. Over <strong class="font-semibold text-muted-foreground">300</strong> books and a <span class="font-semibold text-muted-foreground">{{ readingStreakDays }}-day</span> streak later, here are some of my top picks. Find me on <NuxtLink :to="personalLinks.goodreads.url" target="_blank" class="text-muted-foreground">
        Goodreads{{ }}
      </NuxtLink> for more.
    </template>

    <div class="flex flex-col gap-8">
      <div v-for="category in categories" :key="category.title">
        <h3 class="mb-1 text-xl">
          {{ category.title }}
        </h3>
        <p v-if="category.description" class="text-base text-muted-foreground mb-2">
          {{ category.description }}
        </p>

        <ul v-if="category.books" class="mb-0">
          <li v-for="book in category.books" :key="book.title">
            <NuxtLink :to="book.url" external target="_blank">
              {{ book.title }}
            </NuxtLink>
            <span v-if="book.author" class="text-muted-foreground">
              <span class="px-2">·</span>{{ book.author }}
            </span>
            <span v-if="book.description" class="text-muted-foreground" title="📖 = read, 🎧 = listened">
              &nbsp;{{ book.description }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </AboutProseWrapper>
</template>
