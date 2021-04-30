import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Profile from '../views/profile.vue'
import Races from '../views/races.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import CreateRace from '../views/create-race.vue'
import LiveChat from '../views/live-chat.vue'

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
        component: Profile,
        beforeEnter(to, from, next) {
          if (!store.state.user) return next('/login')
          return next()
        }
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        }
      },
      {
        path: '/races',
        name: 'Races',
        component: Races
      },
      {
        path: '/register',
        name: 'Register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        }
      },
      {
        path: '/create-race',
        name: 'CreateRace',
        component: CreateRace
      },
      {
        path: '/live-chat',
        name: 'LiveChat',
        component: LiveChat
      }
    ]
  })
}
