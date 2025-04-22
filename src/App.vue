<script setup>
import Hero from './components/Hero.vue'
</script>

<template>
  <div class="app-container">
    <Hero />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  background-color: #0c0c0c;
  color: #ffffff;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: 700;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
}
</style>
