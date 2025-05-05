<script setup lang="ts">
type Movie = {
  title: string
  url?: string
  year?: string
}

const movies: Movie[] = [
  { title: 'Parasite', url: 'https://letterboxd.com/film/parasite-2019/', year: '2019' },
  { title: 'Perfect Days', url: 'https://letterboxd.com/film/perfect-days-2023/', year: '2023' },
  { title: 'American Psycho', url: 'https://letterboxd.com/film/american-psycho/', year: '2000' },
  { title: 'Nightcrawler', url: 'https://letterboxd.com/film/nightcrawler/', year: '2014' },
  { title: '12 Angry Men', url: 'https://letterboxd.com/film/12-angry-men/', year: '1957' },
  { title: 'A Clockwork Orange', url: 'https://letterboxd.com/film/a-clockwork-orange/', year: '1971' },
  { title: 'The Machinist', url: 'https://letterboxd.com/film/the-machinist/', year: '2004' },
  { title: 'Margin Call', url: 'https://letterboxd.com/film/margin-call/', year: '2011' },
  { title: 'The Big Short', url: 'https://letterboxd.com/film/the-big-short/', year: '2015' },
]
</script>

<template>
  <AboutProseWrapper title="Movie shelf">
    <template #description>
      I'm not a huge movie buff, but these ones stuck with me.
    </template>

    <ul>
      <li v-for="movie in movies" :key="movie.title">
        <NuxtLink :to="movie.url" external target="_blank">
          {{ movie.title }}
        </NuxtLink>
        <span v-if="movie.year" class="text-muted-foreground">
          ({{ movie.year }})
        </span>
      </li>
    </ul>
  </AboutProseWrapper>
</template>
