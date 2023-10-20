type tagListModel = {
  data: string[],
  fetch: () => string[],
  save: () => void,
  create: (name: string) => 'success' | 'duplicated'  //如果字符串的值少可以不直接写string，而这样写。防止在其他地方使用的时候把字符串打错
}                                                     //联合类型
const tagListModel: tagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem('tagList') || '["衣", "食", "住", "行", "彩票"]');
    return this.data
  },
  create(name) {
    if (this.data.indexOf(name) >= 0) {
      return 'duplicated';
    }
    this.data.push(name);
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem('tagList', JSON.stringify(this.data))
  },
};
export default tagListModel;