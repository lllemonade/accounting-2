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
window.findTag = (id: string) => {
  return window.tagList.filter(t => t.id === id)[0]
}
window.createTag = (name: string) => {
  const message = tagListModel.create(name);
  if (message === 'duplicated') {
    window.alert('标签重复')
  } else if (message === 'success') {
    return;
  }
};

window.removeTag = (id: string) => {
  return tagListModel.deleteTag(id)
};

window.updateTag = (id: string, name: string) => {
  return tagListModel.updateTag(id, name)
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
