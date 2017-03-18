<template>
  <svg :class="'l' + level">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="90%" x2="100%" y2="0%">
        <stop offset="20%" stop-color="#FFF" />
        <stop offset="70%" stop-color="#a0e3e8" />
      </linearGradient>
    </defs>
    <foreignObject x="15" y="15" width="70" height="70">
      <img src="../assets/heart.png" alt="Star" height="50" width="50"></img>
    </foreignObject>
    <text font-size="25" font-weight="bold" font-family="Verdana" x="75" y="50">{{score}}</text>
    <bubble v-for="count in counter" :index='count * 3' :level="level" :last='count === 9' v-on:showResult="showResult" v-on:correctAnswer="increaseScore"></bubble>
    <g v-show="showScore">
      <foreignObject x="550" y="300" width="300" height="450">
        <div class="scoreReport">{{msg}}</div>
        <router-link class="button is-primary is-inverted is-large" to='/' exact>Play Again</router-link>
      </foreignObject>
    </g>
  </svg>
</template>
<script>
import Bubble from './Bubble.vue'

export default {
  name: 'bubbles',
  data () {
    return {
      counter: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      score: 0,
      level: parseInt(this.$route.params.gameLevel),
      showScore: false,
      msg: ''
    }
  },
  components: {
    'bubble': Bubble
  },
  methods: {
    increaseScore: function () {
      this.score += 100
    },
    showResult: function () {
      switch (this.score) {
        case 100: this.msg = 'Nice job!'
          break
        case 200: this.msg = 'Excellent!'
          break
        case 300: this.msg = 'Man are you good!'
          break
        case 400: this.msg = 'You are a pro!'
          break
        case 500: this.msg = 'Unbelievable!'
          break
        case 600: this.msg = 'Insanity!'
          break
        case 700: this.msg = 'You are on fire!'
          break
        case 800: this.msg = 'That was crazy!'
          break
        case 900: this.msg = 'You are blowing my mind!'
          break
        case 1000: this.msg = 'WINNER! \n OMG! You are a Genius!!!'
          break
      }
      this.showScore = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.scoreReport {
  font-family: "Verdana";
  font-weight: bold;
  font-size: 2em;
  color: #FFF;
}

.l1 {
  background: url(../assets/1.png) no-repeat center center fixed;
}

.l2 {
  background: url(../assets/4.png) no-repeat center center fixed;
}

.l3 {
  background: url(../assets/3.png) no-repeat center center fixed;
}

svg {
  padding: 0px;
  margin: 0px;
  width: 100vw;
  height: 100vh;
  text-align: center;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

text {
  fill : #FFF;
  stroke: "#a0e3e8";
  stroke-width: 0.5;
}
</style>
