
import { createWebHistory, createRouter } from 'vue-router'

import AppHome from './components/pages/AppHome.vue'
import AppPortfolio from './components/pages/AppPortfolio.vue'
import AppContact from './components/pages/AppContact.vue'
import AppProject from './components/pages/AppProject.vue'
import AppNotFound from './components/pages/AppNotFound.vue'

const routes = [
  { path: '/', component: AppHome },
  { path: '/portfolio', component: AppPortfolio },
  { path: '/portfolio/:slug', name: 'project.show' , component: AppProject},
  { path: '/contact', component: AppContact },
  { path: '/:pathMatch(.*)*', name:'not-found', component: AppNotFound},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router