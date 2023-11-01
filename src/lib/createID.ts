let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0   //parseInt里面的‘0’确保至少得到一个字符串，外部确保至少得到一个0，而不是其他内容  
// let id: number = 0;
// let localID = window.localStorage.getItem('_idMax') || ''

function createId() {
  id++;
  window.localStorage.setItem('_idMax', id.toString());
  return id;
}
export default createId