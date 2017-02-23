
var Home = Vue.component('home', {
	name:'home',
	template: '#home-template',
	methods: {
		play: function() {
			this.$emit('play')
		}
	}
});


var Bubble = Vue.component('bubble', {

  	name:'bubble',
	template: '#bubble-template',
	data: function() {
		return {
			num1 : Math.floor(Math.random() * (99 - 1 + 1) + 1),
			num2 : Math.floor(Math.random() * (99 - 1 + 1) + 1),
		    operator : '+',
		    ans: '',
		    show: true
		}
	},
	computed: {
		circleXCoordinate : function() {
			return Math.floor(Math.random() * (900 - 0 + 1) + 0);
		},
		circleYCoordinate: function() {
			return 300;
		}
	},
	methods: {
		focus: function() {
			Vue.nextTick(function () {
			  this.$$.ans.focus();
			});
		},
		calculate: function() {
			if(this.operator == '+') {
				if(this.num1 + this.num2 == this.ans) {
					this.show = false;
					console.log('correct');
				}
			}
		}
	}
	
})


var Root = new Vue({
  el: '#root',
  data: {
    currentView: Home,
    counter: [0,1,2,3,4]
  },
  components: {
  	'home': Home,
  	'bubble': Bubble
  }
})

