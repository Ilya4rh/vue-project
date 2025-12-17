import { createRouter, createWebHistory } from 'vue-router'
import RegistrationComponent from '../components/Registration.vue'
import AuthorizationComponent from '../components/Authorization.vue'
import AuthorizationAdminComponent from '../components/AuthorizationAdmin.vue'
import RegistrationAdminComponent from '../components/RegistrationAdmin.vue'

const routes = [
  { path: '/', name: 'Registration', component: RegistrationComponent },
  { path: '/auth', name: 'Authorization', component: AuthorizationComponent },
  { path: '/admin/auth', name: 'AuthorizationAdmin', component: AuthorizationAdminComponent },
  { path: '/admin', name: 'RegistrationAdmin', component: RegistrationAdminComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
