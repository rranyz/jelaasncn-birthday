<template>
  <main>
    <slot />
  </main>
</template>

<script>
export default {
  name: 'birthday',
}
</script>

<style>
main {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgb(0 0 0 / 78%), rgb(0 0 0 / 39%)),
    url(/src/assets/img/main-bg.png);
  background-position: center;
  background-size: cover;
}
</style>
