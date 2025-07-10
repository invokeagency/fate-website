<script>
export default {
  name: 'App'
}
</script>

<template>
  <router-view></router-view>
</template>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: #000;
  color: #fff;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

a {
  color: inherit;
  text-decoration: none;
}

.app {
  min-height: 100vh;
  background: linear-gradient(180deg, #000000 0%, #1a1a1a 100%);
  color: #ffffff;
}
</style>
