<template>
	<transition name="fade">
	  <g v-if="showBubble" @click="focus=true">
		  <animateTransform attributeType="XML" attributeName="transform" 
		  type="translate" from="100, 300" to="100,-1000" dur="20s" fill="freeze" :begin="index" repeatCount="0"></animateTransform>
		  <circle :cx="circleXCoordinate" cy="900" r="100" :class="{ correct: isCorrect, wrong: !isCorrect }"></circle>
		  <text font-size="25" font-weight="bold" font-family="Verdana" :x="circleXCoordinate - 40" y="890">{{num1}} {{operator}} {{num2}}</text>
		  <text font-size="25" font-weight="bold" font-family="Verdana" :x="circleXCoordinate - 70" y="920">=</text>
		  <foreignObject :x="circleXCoordinate - 40" y="900" width="90" height="100">
		  	<input type="text" @keyup.enter="calculate" v-model="ans" v-focus="focus" @blur="focus=false">
		  </foreignObject>	  
	  </g>
	</transition>
</template>

<script>
export default {
  name: 'bubble',
  props: ['index', 'level', 'last'],
  data: function () {
    return {
      operators: ['+', '-', '*', '/', '%'],
      circleXCoordinate: Math.floor(Math.random() * 901) + 0,
      ans: '',
      showBubble: true,
      focus: false,
      isCorrect: true
    }
  },
  directives: {
    focus: {
      update: function (el, binding) {
        if (binding.value) {
          el.focus()
        }
      }
    }
  },
  created: function () {
    if (this.last) {
      console.log(this.index)
      setTimeout(function () {
        this.showResult()
      }.bind(this), (this.index + 20) * 1000)
    }
  },
  computed: {
    operator: function () {
      let max = 0
      let min = 0
      if (this.level === 1) {
        max = 2
      } else if (this.level === 2) {
        max = 4
      } else {
        max = 5
      }
      return this.operators[ Math.floor(Math.random() * max) + min ]
    },
    num2: function () {
      let max
      let min = 0
      if (this.operator === '*' || this.operator === '/') {
        max = 11
        min = 1
      } else {
        max = 100
      }
      return Math.floor(Math.random() * max) + min
    },
    num1: function () {
      let max
      let min = 0
      let number2
      if (this.operator === '%' || this.operator === '/') {
        max = 11
      } else {
        max = 100
      }
      number2 = Math.floor(Math.random() * max) + min
      return (this.level === 2 && this.operator === '/') ? number2 * this.num2 : number2
    }
  },
  methods: {
    calculate: function () {
      let answer = parseFloat(this.ans)
      if (this.operator === '+') {
        if (this.num1 + this.num2 === answer) { this.popBubble() } else { this.wrongAnswer() }
      } else if (this.operator === '-') {
        if (this.num1 - this.num2 === answer) { this.popBubble() } else { this.wrongAnswer() }
      } else if (this.operator === '*') {
        if (this.num1 * this.num2 === answer) { this.popBubble() } else { this.wrongAnswer() }
      } else if (this.operator === '/') {
        let quotient = this.num1 / this.num2
        if (quotient === answer || Math.ceil(quotient).toFixed(1) === answer || Math.ceil(quotient).toFixed(2) === answer) { this.popBubble() } else { this.wrongAnswer() }
      } else if (this.operator === '%') {
        let percent = (this.num1 / 100) * this.num2
        if (percent === answer || Math.ceil(percent).toFixed(1) === answer || Math.ceil(percent).toFixed(2) === answer) { this.popBubble() } else { this.wrongAnswer() }
      }
    },
    popBubble: function () {
      this.showBubble = false
      this.isCorrect = true
      this.$emit('correctAnswer')
    },
    wrongAnswer: function () {
      this.ans = ''
      this.isCorrect = false
    },
    showResult: function () {
      console.log('game over')
      this.$emit('showResult')
    }
  }
}
</script>

<style scoped>

circle, .correct {
  opacity: 0.6;
  stroke: "#FFF";
  stroke-width: 2;
  fill: url(#grad1);
  fill-opacity: 0.6;
}

text {
  fill : #FFF;
  stroke: "#a0e3e8";
  stroke-width: 0.5;
}

input[type=text] {
  border: none;
  height: 30px;
  width: 100px;
  border-bottom: 2px dashed #EEE;
  background-color: transparent;
  color: #FFF;
  font-size: 1.6em; 
  font-family: "Verdana"; 
  font-weight: bold; 
}

.wrong {
  fill: red;
  fill-opacity: 0.6;
}

.fade-leave-active {
  transition: opacity .5s
}
.fade-leave-to {
  opacity: 0
}
  
</style>

