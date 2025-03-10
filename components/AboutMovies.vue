<script setup lang="ts">
type Movie = {
  title: string
  url?: string
  year?: string
}

const movies: Movie[] = [
  { title: 'Parasite', url: 'https://letterboxd.com/film/parasite-2019/', year: '2019' },
  { title: 'American Psycho', url: 'https://letterboxd.com/film/american-psycho/', year: '2000' },
  { title: 'Nightcrawler', url: 'https://letterboxd.com/film/nightcrawler/', year: '2014' },
  { title: '12 Angry Men', url: 'https://letterboxd.com/film/12-angry-men/', year: '1957' },
  { title: 'A Clockwork Orange', url: 'https://letterboxd.com/film/a-clockwork-orange/', year: '1971' },
  { title: 'The Machinist', url: 'https://letterboxd.com/film/the-machinist/', year: '2004' },
]
</script>

<template>
  <section class="prose-h1 prose-headings:mt-0 prose-a:font-normal prose-h3:text-default-foreground prose-h3:font-medium prose-h3:text-xl text-default-foreground max-w-xl leading-7 prose dark:prose-invert prose:font-normal text-base md:text-lg">
    <div>
      <h2 class="font-display font-medium mb-2">
        Movie shelf
      </h2>
      <p class="text-muted-foreground text-base">
        I'm not a huge movie buff, but these ones stuck with me.
      </p>
    </div>

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
  </section>
</template>
