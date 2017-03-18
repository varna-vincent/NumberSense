import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Bubbles from 'components/Bubbles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/play/:gameLevel',
      name: 'bubbles',
      component: Bubbles
    }
  ]
})
