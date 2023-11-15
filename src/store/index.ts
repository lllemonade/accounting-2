import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'
import createID from '@/lib/createID'
import router from '@/router'

Vue.use(Vuex)

type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  // tagList2: Tag[],
  currentTag?: Tag,
}
const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    // tagList2: [],
    currentTag: undefined,
  } as RootState,

  mutations: {
    // tags记录
    fetchTags(state) {
      const defaultTagList = [
        { id: "衣", name: "衣" },
        { id: "食", name: "食" },
        { id: "住", name: "住" },
        { id: "行", name: "行" },
        { id: "彩票", name: "彩票" }
      ]
      // const defaultTagList2 = [
      //   { id: "工资", name: "工资" },
      //   { id: "奖金", name: "奖金" },
      //   { id: "报销", name: "报销" },
      //   { id: "理财", name: "理财" },
      //   { id: "其他", name: "其他" },
      // ]
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || JSON.stringify(defaultTagList));
      // state.tagList2 = JSON.parse(window.localStorage.getItem('tagList2') || JSON.stringify(defaultTagList2));
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name)
      if (names.indexOf(name) > 0) {
        window.alert('标签已经存在')
        return;
      }
      const id = createID().toString()
      state.tagList.push({ id, name: name });
      store.commit('saveTags')
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
    },
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0]
    },
    updateTag(state, payload: { id: string, name: string }) {
      const idList = state.tagList.map(item => item.id)
      if (idList.indexOf(payload.id) >= 0) {
        const names = state.tagList.map(item => item.name)
        if (names.indexOf(payload.name) > 0) {
          window.alert('标签名重复')
        } else {
          const tag = state.tagList.filter(item => item.id === payload.id)[0]
          tag.name = payload.name;
          store.commit('saveTags')
        }
      }
    },
    removeTag(state, id: string) {
      let index = -1
      for (let i = 0; i <= state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i
          break;
        }
      }
      if (index >= 0) {
        state.tagList.splice(index, 1)
        store.commit('saveTags');
        router.back();  //用this不指向实例，所以用导入的方法
      } else { window.alert('删除失败') }
    },
    // Record记录
    fetchRecordList(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.createAt = new Date();
      state.recordList.push(record2);
      // this.recordList?.push(record2)  //判断data存在才push
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
    },
  }
})

export default store