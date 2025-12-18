import { createRouter, createWebHistory } from 'vue-router';
import RegistrationComponent from '../components/Registration.vue';
import AuthorizationComponent from '../components/Authorization.vue';
import AuthorizationAdminComponent from '../components/AuthorizationAdmin.vue';
import AcceptationCodePageComponent from '../components/AcceptationCodePage.vue';
import RegistrationAdminComponent from '../components/RegistrationAdmin.vue';
import MainClientPageComponent from '../pages/MainClientPage.vue';
import EstablishmentPageComponent from '../pages/EstablishmentPage.vue'
import AddIdeaPageComponent from '../pages/AddIdeaPage.vue';

const routes = [
  { path: '/', name: 'Registration', component: RegistrationComponent },
  { path: '/auth', name: 'Authorization', component: AuthorizationComponent },
  { path: '/auth/code', name: 'AcceptationCodePage', component: AcceptationCodePageComponent },
  { path: '/admin/auth', name: 'AuthorizationAdmin', component: AuthorizationAdminComponent },
  { path: '/admin', name: 'RegistrationAdmin', component: RegistrationAdminComponent },
  { path: '/mainClient', name: 'MainClientPage', component: MainClientPageComponent},
  { path: '/establishmentClientPage', name: 'EstablishmentClientPage', component: EstablishmentPageComponent},
  { path: '/addIdea', name: 'AddIdeaClientPage', component: AddIdeaPageComponent},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
