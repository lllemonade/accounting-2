
type RecordItem = {
  type: string;
  tags: string[];
  notes: string;
  total: number; // 类型
  createAt?: Date  //类 /构造函数
};
type Tag = {
  id: string;
  name: string;
};
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  save: () => void;
  create: (name: string) => 'success' | 'duplicated'; //如果字符串的值少可以不直接写string，而这样写。防止在其他地方使用的时候把字符串打错//联合类型
  updateTag: (id: string, name: string) => 'success' | 'not Found' | 'duplicated';
  deleteTag: (id: string) => boolean;
};

interface Window {
  tagList: Tag[]
}