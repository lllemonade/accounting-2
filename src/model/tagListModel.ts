type Tag = {
  id: string;
  name: string;
}
type tagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  save: () => void;
  create: (name: string) => 'success' | 'duplicated'  //如果字符串的值少可以不直接写string，而这样写。防止在其他地方使用的时候把字符串打错
}                                                     //联合类型
const tagListModel: tagListModel = {
  data: [],
  fetch() {
    let defaultTagList = [{ id: "衣", name: "衣" }, { id: "食", name: "食" }, { id: "住", name: "住" }, { id: "行", name: "行" }, { id: "彩票", name: "彩票" }]
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
    this.data.push({ id: name, name: name });
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem('tagList', JSON.stringify(this.data))
  },
};
export default tagListModel;