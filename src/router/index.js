import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import ProjectView from '@/views/ProjectView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
      path: '/project/:project_id',
      name: 'ProjectView',
      component: ProjectView,
      props: route => {
        return { project_id: route.params.project_id.toString() }
      }
    }
  ]
})
