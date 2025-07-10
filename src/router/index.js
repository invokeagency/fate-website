import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Privacy from '../views/Privacy.vue'
import License from '../views/License.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    },
  
    {
      path: '/license',
      name: 'License',
      component: License
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 