<script setup lang="ts">
type ScreenContent = {
  title: string
  url?: string
  year?: string
}

const screenContent: ScreenContent[] = [
  { title: 'Parasite', url: 'https://letterboxd.com/film/parasite-2019/', year: '2019' },
  { title: 'Perfect Days', url: 'https://letterboxd.com/film/perfect-days-2023/', year: '2023' },
  { title: 'Nightcrawler', url: 'https://letterboxd.com/film/nightcrawler/', year: '2014' },
  { title: 'American Psycho', url: 'https://letterboxd.com/film/american-psycho/', year: '2000' },
  { title: 'A Clockwork Orange', url: 'https://letterboxd.com/film/a-clockwork-orange/', year: '1971' },
  { title: '12 Angry Men', url: 'https://letterboxd.com/film/12-angry-men/', year: '1957' },
  { title: 'The Machinist', url: 'https://letterboxd.com/film/the-machinist/', year: '2004' },
  { title: 'Good Will Hunting', url: 'https://letterboxd.com/film/good-will-hunting/', year: '1997' },
  { title: 'Margin Call', url: 'https://letterboxd.com/film/margin-call/', year: '2011' },
  { title: 'The Big Short', url: 'https://letterboxd.com/film/the-big-short/', year: '2015' },
  { title: 'Conclave', url: 'https://letterboxd.com/film/conclave/', year: '2024' },
  { title: 'Chernobyl', url: 'https://www.imdb.com/title/tt7366338/', year: '2019' },
  { title: 'Better Call Saul', url: 'https://www.imdb.com/title/tt3032476/', year: '2015' },
]
</script>

<template>
  <AboutProseWrapper title="Screen favorites">
    <template #description>
      I don't watch much, so I'm very picky when I do. <NuxtLink to="https://boxd.it/6OXxN" external target="_blank" class="text-muted-foreground">
        These{{ }}
      </NuxtLink> ones stuck with me.
    </template>

    <ul>
      <li v-for="item in screenContent" :key="item.title">
        <NuxtLink :to="item.url" external target="_blank">
          {{ item.title }}
        </NuxtLink>
        <span v-if="item.year" class="text-muted-foreground font-mono text-sm">
          ({{ item.year }})
        </span>
      </li>
    </ul>
  </AboutProseWrapper>
</template>
