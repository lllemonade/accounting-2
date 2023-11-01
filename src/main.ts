import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import navBar from './components/navBar.vue'
import layOut from './components/layOut.vue'
import icon from './components/icon.vue'
import tagListModel from './model/tagListModel'

Vue.config.productionTip = false

Vue.component('navBar', navBar)
Vue.component('layOut', layOut)
Vue.component('icon', icon)

window.tagList = tagListModel.fetch();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
