
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
    		counter: [0,1,2,3,4],
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
			num1 : Math.floor(Math.random() * (99 - 1 + 1) + 1),
			num2 : Math.floor(Math.random() * (99 - 1 + 1) + 1),
		    operator : '+',
		    ans: '',
		    showBubble: true,
		    focus:false
		}
	},
	computed: {
		circleXCoordinate : function() {
			return Math.floor(Math.random() * (900 - 0 + 1) + 0);
		}
	},
	methods: {
		focus: function() {
			console.log("on focus");
		},
		calculate: function() {
			if(this.operator == '+') {
				if(this.num1 + this.num2 == this.ans) {
					this.showBubble = false;
					this.$emit('correctAnswer');
				}
			}
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

