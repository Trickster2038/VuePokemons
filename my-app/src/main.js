import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'

import PokeList from './components/PokeList.vue'
import PokePage from './components/PokePage.vue'
import vuetify from './plugins/vuetify'

Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.config.productionTip = false

console.log(Vue.version);

const routes = [
  {
    path: "/",
    component: PokeList,
  },
  {
    path: "/pokemon/:id",
    component: PokePage,
    props: true,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
