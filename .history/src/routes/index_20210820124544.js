import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index'

import AuthRoutes from './auth/AuthRoutes'
import AppRoutes from "./app/AppRoutes"

Vue.use(VueRouter);


const regroupementDesRoutes = [

  AuthRoutes,
  AppRoutes


];
const routes = [].concat(...regroupementDesRoutes);


const router = new VueRouter({
  routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {
 // console.log(store)
  // check if the route requires authentication and user is not logged in
  if (to.path === '/' && !store.state.Utilisateurs.isLoggedIn) {
      // redirect to login page
      next({ name: 'Login' })
      return
  }

  // if logged in redirect to dashboard
  if(to.path === '/' && store.state.Utilisateurs.isLoggedIn) {
    next({ name: 'Home' })
      return
  }

  next()
})

export default router;