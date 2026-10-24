<template>
  <section class="text-default-foreground max-w-xl leading-7 prose dark:prose-invert text-base md:text-lg">
    <h2 class="text-default-foreground font-display font-medium mb-4">
      Stack
    </h2>

    <!-- IconWithText is inline-flex, and browsers allow a line break right
         after it even before punctuation, so each one that is followed by a
         comma or period shares a nowrap span with it. Vue drops whitespace
         between two elements when it contains a newline, so spans that follow
         one another share a line, separated by a plain space. -->
    <p>
      I'm pretty much tech agnostic at this point. Most of my work happens in
      <IconWithText text="Amp" icon="custom:amp" /> and
      <IconWithText text="Claude Code" icon="logos:claude-icon" />
      (as of Nov 2026, these change every few weeks), almost exclusively in the cloud, alongside
      <IconWithText text="Ghostty" icon="custom:ghostty" /> and
      <span class="text-nowrap"><IconWithText text="Wispr Flow" icon="custom:wispr-flow" />.</span>
    </p>
  </section>
</template>
