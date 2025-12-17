import { createRouter, createWebHistory } from 'vue-router'
import RegistrationComponent from '../components/Registration.vue'
import AuthorizationComponent from '../components/Authorization.vue'

const routes = [
  { path: '/', name: 'Registration', component: RegistrationComponent },
  { path: '/auth', name: 'Authorization', component: AuthorizationComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
