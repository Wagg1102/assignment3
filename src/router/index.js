<<<<<<< HEAD
import { createRouter, createWebHashHistory } from "vue-router";
=======

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AdminLoginView from '../views/AdminLoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import RatingView from '../views/RatingView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import BookListView from '@/views/BookListView.vue'
import EditBookView from '@/views/EditBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
import GetAllBookAPI from '@/views/GetAllBookAPI.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/WeatherView',
    name: 'WeatherView',
    component: WeatherView,
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI,
  },
  {
    path: '/GetAllBookAPI',
    name: 'GetAllBookAPI',
    component: GetAllBookAPI,
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView,
  },
  {
    path: '/bookList',
    name: 'BookList',
    component: BookListView,
  },
  {
    path: '/edit/:id',  
    name: 'EditBook',
    component: EditBookView,
    props: true  
  },
  {
    path: '/addBook',
    name: 'addBook',
    component: AddBookView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: AdminLoginView
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
    meta: { requiresAuth: true }
  },
  {
    path: '/rating',
    name: 'Rating',
    component: RatingView,
    meta: { requiresAuth: true }
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  }
]
>>>>>>> 6ebdbcf0593d693b8597d4852604749c3d6e559f

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/home.vue')
        },
        {
          path: '/users',
          name: 'Users',
          component: () => import('@/views/users.vue')
        },
        {
          path: '/activities',
          name: 'Activities',
          component: () => import('@/views/activities.vue')
        },
        {
          path: '/myApply',
          name: 'MyApply',
          component: () => import('@/views/myApply.vue')
        },
        {
          path: '/apply',
          name: 'Apply',
          component: () => import('@/views/apply.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/auth.vue')
    }
  ]
})

<<<<<<< HEAD
export default router
=======
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuthenticated) {
      next();
    } else {
      alert('Please log in to access this page.');
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});

export default router;
>>>>>>> 6ebdbcf0593d693b8597d4852604749c3d6e559f
