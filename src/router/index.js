import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Inscription from '@/components/Inscription.vue'
import TimeLine from '@/components/TimeLine.vue'
import Profil from '@/components/Profil.vue'
import Messages from '@/components/Messages.vue'
import NewTweet from '@/components/NewTweet.vue'
import Conversation from '@/components/Conversation.vue'
import ListProfils from '@/components/ListProfils.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TimeLine',
    component: TimeLine
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: Inscription
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
    {
    path: '/newTweet',
    name: 'NewTweet',
    component: NewTweet
  },
    {
    path: '/conversation',
    name: 'Conversation',
    component: Conversation
  },
    {
    path: '/listprofils',
    name: 'ListProfils',
    component: ListProfils
  }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
