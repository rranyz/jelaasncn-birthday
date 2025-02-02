<template></template>

<script>
export default {
  name: 'ballons',
  data() {
    return {
      balloonContainer: document.getElementById('balloon-container'),
    }
  },
  methods: {
    random(num) {
      return Math.floor(Math.random() * num)
    },
    getRandomStyles() {
      var r = this.random(255)
      var g = this.random(255)
      var b = this.random(255)
      var mt = this.random(200)
      var ml = this.random(50)
      var dur = this.random(5) + 5
      return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7);
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `
    },
    createBalloons(num) {
      for (var i = num; i > 0; i--) {
        var balloon = document.createElement('div')
        balloon.className = 'balloon'
        balloon.style.cssText = this.getRandomStyles()
        document.getElementById('balloon-container').append(balloon)
      }
    },
    removeBalloons() {
      document.getElementById('balloon-container').style.opacity = 0
      setTimeout(() => {
        document.getElementById('balloon-container').remove()
      }, 500)
    },
  },
  mounted() {
    this.createBalloons(30)
    console.log(document.getElementById('balloon-container'))
  },
}
</script>

<style lang="scss" scoped>
#balloon-container {
  height: 100vh;
  padding: 1em;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  transition: opacity 500ms;
}

.balloon {
  height: 125px;
  width: 105px;
  border-radius: 75% 75% 70% 70%;
  position: relative;
}

.balloon:before {
  content: '';
  height: 75px;
  width: 1px;
  padding: 1px;
  background-color: #fdfd96;
  display: block;
  position: absolute;
  top: 125px;
  left: 0;
  right: 0;
  margin: auto;
}

.balloon:after {
  content: '▲';
  text-align: center;
  display: block;
  position: absolute;
  color: inherit;
  top: 120px;
  left: 0;
  right: 0;
  margin: auto;
}

@keyframes float {
  from {
    transform: translateY(100vh);
    opacity: 1;
  }
  to {
    transform: translateY(-300vh);
    opacity: 0;
  }
}
</style>
