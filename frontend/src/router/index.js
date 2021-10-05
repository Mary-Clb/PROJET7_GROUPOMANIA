import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import UserProfile from '../views/UserProfile.vue'
import FocusPost from '../views/FocusPost.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/myprofile/:userId',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/profile/:userId',
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    path: '/focuspost/:postId',
    name: 'FocusPost',
    component: FocusPost,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
