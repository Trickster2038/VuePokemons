import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

console.log(Vue.version);

new Vue({
  render: h => h(App),
}).$mount('#app')
