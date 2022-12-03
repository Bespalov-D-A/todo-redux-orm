export const equalStrOnArr = (str, arr) => {
  let bool = false
  for(let i = 0; i < arr.length; i++) {
    if(str === arr[i].name) bool = true
  }
  return bool
}
