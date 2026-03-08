import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Yumzy from '../views/yumzy.vue'
import StudyBuddy from '../views/StudyBuddy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/yumzy',
      name: 'yumzy',
      component: Yumzy
    },
    {
      path: '/studybuddy',
      name: 'studybuddy',
      component: StudyBuddy
    },
    {
      path: '/stockly',
      name: 'stockly',
      component: StudyBuddy
    }
  ]
})

export default router
