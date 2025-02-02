<template>
  <div class="confetti-section" v-if="toggleInvite">
    <confetti-explosion
      :stageHeight="1200"
      :stageWidth="1270"
      :particleCount="180"
      :duration="5000"
    />
  </div>
  <div class="greeting-section">
    <img class="image-one wiggle" src="../assets/img/g-2.png" alt="Girl one" />
    <img class="image-two wiggle" src="../assets/img/image-1.png" alt="Girl two" />
    <span class="happy-birthday">Happy Birthday</span>
    <span class="to-you">TO YOU</span>
  </div>
</template>

<script>
import ConfettiExplosion from 'vue-confetti-explosion'
import Balloons from '@/components/Balloons.vue'

export default {
  name: 'home',
  components: {
    ConfettiExplosion,
    Balloons,
  },
  data() {
    return {
      toggleInvite: false,
    }
  },
  methods: {},
  mounted() {
    this.toggleInvite = true
  },
}
</script>

<style>
.confetti-section {
  display: flex;
  justify-content: center;
}

.greeting-section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-content: center;
  justify-items: center;
}

.image-one {
  position: absolute;
  top: 20%;
  left: 65%;
  z-index: 1;
  height: 200px;
}

.image-two {
  position: absolute;
  top: 24%;
  left: 30%;
  z-index: 1;
  height: 175px;
}

.happy-birthday {
  font-family: 'ballonfont', sans-serif;
  font-size: 200px;
  color: #dd9a4b;
  width: 800px;
  text-align: center;
}

.to-you {
  font-family: 'cotton', sans-serif;
  font-size: 100px;
  color: #fff;
  width: 500px;
  text-align: center;
}

.wiggle {
  /* animation */
  animation: jiggle 0.7s infinite;
  -webkit-animation: jiggle 0.7s infinite;
  -moz-animation-duration: 0.7s;
  -moz-animation-name: jiggle;
  -moz-animation-iteration-count: infinite;
  -webkit-transform: rotate(-2deg);
  -moz-transform: rotate(-2deg);
}

@keyframes jiggle {
  0% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
}

@-webkit-keyframes jiggle {
  0% {
    -webkit-transform: rotate(-2deg);
  }
  50% {
    -webkit-transform: rotate(2deg);
  }
}

@-moz-keyframes jiggle {
  0% {
    -moz-transform: rotate(-2deg);
  }
  50% {
    -moz-transform: rotate(2deg);
  }
}
</style>
