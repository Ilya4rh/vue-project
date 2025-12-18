import { createRouter, createWebHistory } from 'vue-router';
import RegistrationComponent from '../components/Registration.vue';
import AuthorizationComponent from '../components/Authorization.vue';
import AuthorizationAdminComponent from '../components/AuthorizationAdmin.vue';
import AcceptationCodePageComponent from '../components/AcceptationCodePage.vue';
import RegistrationAdminComponent from '../components/RegistrationAdmin.vue';
import MainClientPageComponent from '../pages/MainClientPage.vue';
import EstablishmentPageComponent from '../pages/EstablishmentPage.vue'
import AddIdeaPageComponent from '../pages/AddIdeaPage.vue';
import PersonalAccountClientComponent from '../pages/PersonalAccountClient.vue';
import CoffeeShopPageComponent from "@/pages/CoffeeShopPage.vue";
import CitePageAdminComponent from "../pages/CitePageAdmin.vue"
import IdeaPageComponent from "@/pages/IdeaPage.vue";

const routes = [
  { path: '/', name: 'Registration', component: RegistrationComponent },
  { path: '/auth', name: 'Authorization', component: AuthorizationComponent },
  { path: '/auth/code', name: 'AcceptationCodePage', component: AcceptationCodePageComponent },
  { path: '/admin/auth', name: 'AuthorizationAdmin', component: AuthorizationAdminComponent },
  { path: '/admin', name: 'RegistrationAdmin', component: RegistrationAdminComponent },
  { path: '/mainClient', name: 'MainClientPage', component: MainClientPageComponent},
  { path: '/establishmentClientPage', name: 'EstablishmentClientPage', component: EstablishmentPageComponent},
  { path: '/addIdea', name: 'AddIdeaClientPage', component: AddIdeaPageComponent},
  { path: '/personalAccClient', name: 'PersonalAccountClient', component: PersonalAccountClientComponent},
  { path: '/coffeeShopPage', name: 'CoffeeShopPageComponent', component: CoffeeShopPageComponent},
  { path: '/citePageAdmin', name: 'CitePageAdmin', component: CitePageAdminComponent},
  { path: '/ideaPage', name: 'IdeaPageComponent', component: IdeaPageComponent}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
