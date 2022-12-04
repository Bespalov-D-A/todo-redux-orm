//Если клик не попал не в один из ref в refArray
//то выполняем callback
export const handlerClickOutside = (event, refArray, callback) => {
  refArray.find((item) => item.current.contains(event.target)) || callback();
};
