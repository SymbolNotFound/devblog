<template>
  <div v-for="post in posts" key="post.url">
    <!-- date isn't getting translated, hmm... we'll come back to this
      {{ post.title }} ({{ post.date }})
    I might need to be explicit in the frontmatter?  I thought it was picked up from github commit or file timestamp...
  --></div>
</template>

<script setup>
import { data as posts } from '../posts.data.ts'
</script>