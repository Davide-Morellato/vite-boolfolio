import { createApp } from 'vue'
import './style/general.scss'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'

import AppHome from './components/pages/AppHome.vue'
import AppPortfolio from './components/pages/AppPortfolio.vue'
import AppContact from './components/pages/AppContact.vue'
import AppProject from './components/pages/AppProject.vue'

const routes = [
  { path: '/', component: AppHome },
  { path: '/portfolio', component: AppPortfolio },
  { path: '/portfolio/:slug', name: 'project.show' , component: AppProject},
  { path: '/contact', component: AppContact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


createApp(App).use(router).mount('#app')
