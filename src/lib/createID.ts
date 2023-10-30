let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0   //parseInt里面的‘0’确保至少得到一个字符串，外部确保至少得到一个0，而不是其他内容  
// let id = 0;

function createId() {
  id++
  return id
}
export default createId