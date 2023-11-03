import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import navBar from './components/navBar.vue'
import layOut from './components/layOut.vue'
import icon from './components/icon.vue'

Vue.config.productionTip = false

Vue.component('navBar', navBar)
Vue.component('layOut', layOut)
Vue.component('icon', icon)

// window.store = {
//   //recordStore
//   recordList: recordListModel.fetch(),
//   createRecord: (record: RecordItem) => {
//     recordListModel.create(record)
//   },

//   //tagStore
//   tagList: tagListModel.fetch(),
//   findTag: (id: string) => {
//     return window.store.tagList.filter(t => t.id === id)[0]
//   },
//   createTag: (name: string) => {
//     const message = tagListModel.create(name);
//     if (message === 'duplicated') {
//       alert('标签重复')
//     } else if (message === 'success') {
//       return;
//     }
//   },

//   removeTag: (id: string) => {
//     return tagListModel.deleteTag(id)
//   },

//   updateTag: (id: string, name: string) => {
//     return tagListModel.updateTag(id, name)
//   },
// }


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
