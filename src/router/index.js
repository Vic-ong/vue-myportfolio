import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import ProjectView from '@/views/ProjectView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      // Homepage
      path: '/projects',
      alias: '/',
      name: 'Projects',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects=:id',
      name: 'ProjectView',
      component: ProjectView,
      props: true
    }
  ]
})
