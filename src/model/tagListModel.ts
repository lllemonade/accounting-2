import createID from '@/lib/createID'

type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  save: () => void;
  create: (name: string) => 'success' | 'duplicated'; //如果字符串的值少可以不直接写string，而这样写。防止在其他地方使用的时候把字符串打错//联合类型
  updateTag: (id: string, name: string) => 'success' | 'not Found' | 'duplicated';
  deleteTag: (id: string) => boolean;
}

const tagListModel: TagListModel = {
  data: [],
  fetch() {
    const defaultTagList = [{ id: "衣", name: "衣" }, { id: "食", name: "食" }, { id: "住", name: "住" }, { id: "行", name: "行" }, { id: "彩票", name: "彩票" }]
    this.data = JSON.parse(window.localStorage.getItem('tagList') || JSON.stringify(defaultTagList));
    // '["衣", "食", "住", "行", "彩票"]'
    // [{id:"衣",name:"衣"}, {id:"食",name:"食"}, {id:"住",name:"住"},{id:"行",name:"行"}, {id:"彩票",name:"彩票"}]
    return this.data
  },
  create(name) {
    const names = this.data.map(item => item.name)
    if (names.indexOf(name) >= 0) {
      return 'duplicated';
    }
    const id = createID().toString()
    this.data.push({ id: id, name: name });
    this.save();
    return 'success';
  },
  updateTag(id, name) {
    const idList = this.data.map(item => item.id)
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name)
      if (names.indexOf(name) >= 0) {
        return 'duplicated'
      } else {
        const tag = this.data.filter(item => item.id === id)[0]
        tag.name = name;
        this.save();
        return 'success'
      }
    } else return 'not Found'
  },
  save() {
    window.localStorage.setItem('tagList', JSON.stringify(this.data))
  },
  deleteTag(id) {
    let index = -1
    for (let i = 0; i <= this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i
        break;
      }
    }
    this.data.splice(index, 1)
    this.save();
    return true;
  }
};
export default tagListModel;