<script setup lang="ts">
type Podcast = {
  title: string
  author?: string
  url?: string
}

const podcasts: Podcast[] = [
  { title: 'Lex Fridman Podcast', url: 'https://lexfridman.com/podcast/' },
  { title: 'Lenny\'s Podcast', url: 'https://lennysnewsletter.com/podcast' },
  { title: 'Cheeky Pint', author: 'John Collison', url: 'https://cheekypint.transistor.fm/' },
  { title: 'Dwarkesh Podcast', url: 'https://www.dwarkesh.com/' },
  { title: 'Syntax.fm', url: 'https://syntax.fm/' },
  { title: 'Acquired', url: 'https://acquired.fm/' },
  { title: 'Darknet Diaries', url: 'https://darknetdiaries.com/' },
  { title: 'The Rest is History', url: 'https://podcasts.apple.com/hr/podcast/the-rest-is-history/id1537788786' },
  { title: 'The History of Literature', url: 'https://historyofliterature.com/' },
  { title: 'The Jack Mallers Show', url: 'https://podcasts.apple.com/us/podcast/the-jack-mallers-show/id1695949365' },
  { title: 'What Bitcoin Did', url: 'https://www.whatbitcoindid.com/' },
  { title: 'Rabbit Hole Recap', url: 'https://rhr.tv/' },
  { title: 'TFTC', author: 'Marty Bent', url: 'https://www.tftc.io/tag/podcasts/' },
  { title: 'Citadel Dispatch', author: 'Odell', url: 'https://citadeldispatch.com/' },
  { title: 'Bitcoin Review', author: 'NVK', url: 'https://bitcoin.review/' },
  { title: 'All-In Podcast', url: 'https://podcasts.apple.com/us/podcast/all-in-with-chamath-jason-sacks-friedberg/id1502871393' },
  { title: 'This Past Weekend', author: 'Theo Von', url: 'https://www.theovon.com/tpw/episodes' },
  { title: 'The Morgan Housel Podcast', url: 'https://podcasts.apple.com/us/podcast/the-morgan-housel-podcast/id1675310669' },
]
</script>

<template>
  <AboutProseWrapper title="Podcasts">
    <template #description>
      I listen to podcasts every single day. AI, Bitcoin, macro, finance, politics, business, tech, hacking, opsec, history, literature, comedy.
    </template>

    <ul>
      <li v-for="podcast in podcasts" :key="podcast.title">
        <NuxtLink :to="podcast.url" external target="_blank">
          {{ podcast.title }}
        </NuxtLink>
        <span v-if="podcast.author" class="text-muted-foreground">
          with {{ podcast.author }}
        </span>
      </li>
    </ul>
  </AboutProseWrapper>
</template>
