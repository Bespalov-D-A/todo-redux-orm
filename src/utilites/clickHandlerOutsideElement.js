//Если клик не попал не в один из ref в refArray
//то выполняем callback
//Использовать осторожно, выполняется после каждого клика
//т.е. каждый раз идёт перебор массива рефов
export const handlerClickOutside = (event, refArray, callback) => {
  refArray.find((item) => item.current.contains(event.target)) || callback();
};
