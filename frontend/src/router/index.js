import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Profile from '../views/profile.vue'
import Login from '../views/login.vue'
import Races from '../views/races.vue'
Vue.use(VueRouter)

export default function init(store) {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/races',
        name: 'Races',
        component: Races
      }
    ]
  })
}
