<template>
  <component :is="this.$route.meta.layoutComponent">
    <router-view />
  </component>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterView,
  },
}
</script>
