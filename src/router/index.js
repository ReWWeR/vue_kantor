import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('./../components/pages/Index.vue');
const AddUser = () => import('./../components/pages/AddUser.vue');
const EditUser = () => import('./../components/pages/EditUser.vue');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/add',
      name: 'add-user',
      component: AddUser
    },
    {
      path: '/edit/:id',
      name: 'edit-user',
      component: EditUser
    }
  ]
})
