const numbers = {
  zero: [11, 12, 13, 14],
  one: [1],
  two: [2, 3, 4],
  three: [0, 5, 6, 7, 8, 9],
};

const ending = {
  zero: " ",
  one: "а",
  two: "и",
  three: " ",
};

const numFunc = (num, key) => {
  if(key === 'zero') {
    return num
  } else return Number(String(num).slice(-1))
}

export const wordEndingChoice = (num, str) => {
  let newNum = Number(String(num).slice(-2));
  let end = null
  for (let key in numbers) {
    if(end) break
    if (numbers[key].includes(numFunc(newNum, key))) {
      end = ending[key];
    }
  }
  return str + end;
};
