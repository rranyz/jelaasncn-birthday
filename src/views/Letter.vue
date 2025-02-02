<template>
  <div class="container">
    <div class="envelope-wrapper" :class="[toggle ? 'flap' : '']">
      <div class="envelope">
        <div class="letter">
          <div class="text">
            <strong> Dear Anje, </strong>
            <p class="body-letter">
              I hope you are having a good day today! Happy Birthday!🎂🍰
              <router-link class="routes custom" to="/birthday">Let's Celebrate!</router-link>
            </p>
            <p class="sincerely">From, Rannie 🙌</p>
          </div>
        </div>
      </div>
      <div class="heart" @click="toogleHandler"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'letter',
  data() {
    return {
      toggle: false,
    }
  },
  methods: {
    toogleHandler() {
      this.toggle = !this.toggle
    },
  },
}
</script>

<style lang="scss" scoped>
.action-section {
  .btn {
    font-size: 8px !important;
  }
}

.container {
  height: 100vh;
  display: grid;
  place-items: center;
}
.container > .envelope-wrapper {
  background: #7e8fb7;
  box-shadow: 0 0 40px #1c1c1c;
}
.envelope-wrapper > .envelope {
  position: relative;
  width: 350px;
  height: 250px;
}
.envelope-wrapper > .envelope::before {
  content: '';
  position: absolute;
  top: 0;
  z-index: 2;
  border-top: 130px solid #7e8fb7;
  border-right: 175px solid transparent;
  border-left: 175px solid transparent;
  transform-origin: top;
  transition: all 0.5s ease-in-out 0.7s;
}
.envelope-wrapper > .envelope::after {
  content: '';
  position: absolute;
  z-index: 2;
  width: 0px;
  height: 0px;
  border-top: 130px solid transparent;
  border-right: 175px solid #a7bae6;
  border-bottom: 120px solid #a7bae6;
  border-left: 175px solid #a7bae6;
}
.sincerely {
  text-align: right;
}

.envelope > .letter {
  position: absolute;
  right: 20%;
  bottom: 0;
  width: 54%;
  height: 80%;
  background: white;
  text-align: center;
  transition: all 1s ease-in-out;
  box-shadow: 0 0 5px #1c1c1c;
  padding: 15px 10px;
}

.envelope > .letter > .text {
  font-family: 'Caveat', cursive;
  font-style: normal;
  color: var(--txt-color);
  text-align: justify;
  font-size: 11px;
  padding-right: 2px;
}

.text strong {
  font-size: 8px !important;
}

.heart {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 15px;
  height: 15px;
  background: #c2465d;
  z-index: 4;
  transform: translate(-50%, -20%) rotate(45deg);
  transition: transform 0.5s ease-in-out 1s;
  box-shadow: 0 1px 6px var(--shadow-color);
  cursor: pointer;
}
.heart:before,
.heart:after {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #c2465d;
  border-radius: 50%;
}
.heart:before {
  top: -7.5px;
}
.heart:after {
  right: 7.5px;
}
.flap > .envelope:before {
  transform: rotateX(180deg);
  z-index: 0;
}
.flap > .envelope > .letter {
  bottom: 100px;
  transform: scale(1.5);
  transition-delay: 1s;
}
.flap > .heart {
  transform: rotate(90deg);
  transition-delay: 0.4s;
}

.body-letter {
  font-size: 8px !important;
}

.touch-area {
  background-color: #1c1c1c;
  width: 50%;
}

// .routes.custom {
//   position: absolute;
//   z-index: 100;
// }
</style>
