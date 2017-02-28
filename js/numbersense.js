
Vue.directive('focus', {
  update: function (el, binding) {
  	if(binding.value) {
  		el.focus()
  	}
  }
})

var Home = Vue.component('home', {
	name:'home',
	template: '#home-template',
	methods: {
		play: function() {
			this.$emit('play')
		}
	}
});

var Bubbles = Vue.component('bubbles', {
	name: 'bubbles',
	template: '#bubbles-template',
	data: function() {
		return {
    		counter: [0,1,2,3,4,5,6,7,8,9],
			score: 0
		}
	},
	methods: {
		increaseScore: function() {
			this.score += 100;
		}
	}
})

var Bubble = Vue.component('bubble', {

  	name:'bubble',
	template: '#bubble-template',
	props: ['index'],
	data: function() {
		return {
		    operators : ['+', '-', '*', '/', '%'],
		    circleXCoordinate: Math.floor(Math.random() * 901) + 0,
		    ans: '',
		    showBubble: true,
		    focus:false
		}
	},
	computed: {
		operator : function() {
			let max = 0, min = 0, level = 3;
			if(level == 1) {
				max = 2; 
			} else if(level == 2) {
				max = 4;
			} else {
				max = 5;
			}
			return this.operators[ Math.floor(Math.random() * max) + min ];
		},
		num2: function() {
			let max, min = 0;
			if(this.operator == '*' || this.operator == '/') {
				max = 11;
				min = 1;
			} else {
				max = 100;
			}
			return Math.floor(Math.random() * max) + min;
		},
		num1: function() {
			let max, min = 0;
			if(this.operator == '%') {
				max = 11;
			} else {
				max = 100;
			}
			return Math.floor(Math.random() * max) + min;
		}
	},
	methods: {
		focus: function() {
			console.log("on focus");
		},
		calculate: function() {
			if(this.operator == '+') {
				if(this.num1 + this.num2 == this.ans) { this.popBubble(); }
			} else if(this.operator == '-') {
				if(this.num1 - this.num2 == this.ans) { this.popBubble(); }
			} else if(this.operator == '*') {
				if(this.num1 * this.num2 == this.ans) { this.popBubble(); }
			} else if(this.operator == '/') {
				let quotient = this.num1 / this.num2;
				if(quotient == this.ans || Math.ceil(quotient).toFixed(1) == this.ans || Math.ceil(quotient).toFixed(2) == this.ans) { this.popBubble(); }
			} else if(this.operator == '%') {
				let percent = (this.num1 / 100) * this.num2;
				if(percent == this.ans || Math.ceil(percent).toFixed(1) == this.ans || Math.ceil(percent).toFixed(2) == this.ans) { this.popBubble(); }
			}
		},
		popBubble: function() {
			this.showBubble = false;
			this.$emit('correctAnswer');
		}
	}
	
})


var Root = new Vue({
  el: '#root',
  data: {
    currentView: Home
  },
  components: {
  	'home': Home,
  	'bubble': Bubble
  }
})

