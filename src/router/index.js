import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./../components/pages/Index.vue')
    },
    {
      path: '/add',
      name: 'add-user',
      component: () => import('./../components/pages/AddUser.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit-user',
      props: (route) => ({id: +route.params.id}),
      component: () => import('./../components/pages/EditUser.vue')
    }
  ]
})
