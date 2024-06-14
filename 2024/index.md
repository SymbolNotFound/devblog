<script setup>
import { data as posts } from './posts.data.js'
</script>

<template>
  <h1>2024 blog posts</h2>
  <ul>
    <li v-for="post of posts">
      <a :href="post.url">{{ post.title }}</a>
      <span>{{ post.date.string }}</span>
    </li>
  </ul>
</template>
