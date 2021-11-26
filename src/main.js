import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import PaginacionSimple from './components/PaginacionSimple.vue'
import PaginacionEnumerada from './components/PaginacionEnumerada.vue'
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate);

Vue.use(VueRouter);

const routes = [
  { path: "/", component: PaginacionSimple },
  { path: '/paginacionenumerada', component: PaginacionEnumerada }
]

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
