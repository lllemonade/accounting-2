import clone from '@/lib/clone'
import createID from '@/lib/createID'

const store = {
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    return this.recordList
  },
  saveRecords() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList))
  },
  //recordStore
  recordList: [] as RecordItem[],
  createRecord(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createAt = new Date();
    this.recordList && this.recordList.push(record2); //判断data存在才push
    // this.recordList?.push(record2)  //和上面作用相同
    store.saveRecords();
  },

  //tagStore
  tagList: [] as Tag[],
  fetchTags() {
    const defaultTagList = [{ id: "衣", name: "衣" }, { id: "食", name: "食" }, { id: "住", name: "住" }, { id: "行", name: "行" }, { id: "彩票", name: "彩票" }]
    this.tagList = JSON.parse(window.localStorage.getItem('tagList') || JSON.stringify(defaultTagList));
    // '["衣", "食", "住", "行", "彩票"]'
    // [{id:"衣",name:"衣"}, {id:"食",name:"食"}, {id:"住",name:"住"},{id:"行",name:"行"}, {id:"彩票",name:"彩票"}]
    return this.tagList
  },
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0]
  },
  createTag(name: string) {
    const names = this.tagList.map(item => item.name)
    if (names.indexOf(name) >= 0) {
      window.alert('标签重复')
      return 'duplicated';
    }
    const id = createID().toString()
    this.tagList.push({ id: id, name: name });
    this.saveTags();
    return 'success';
  },

  removeTag(id: string) {
    let index = -1
    for (let i = 0; i <= this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i
        break;
      }
    }
    this.tagList.splice(index, 1)
    this.saveTags();
    return true;
  },

  updateTag(id: string, name: string) {
    const idList = this.tagList.map(item => item.id)
    if (idList.indexOf(id) >= 0) {
      const names = this.tagList.map(item => item.name)
      if (names.indexOf(name) >= 0) {
        return 'duplicated'
      } else {
        const tag = this.tagList.filter(item => item.id === id)[0]
        tag.name = name;
        this.saveTags();
        return 'success'
      }
    } else return 'not Found'
  },
  saveTags() {
    window.localStorage.setItem('tagList', JSON.stringify(this.tagList))
  }
}
store.fetchRecords();
store.fetchTags();
export default store;