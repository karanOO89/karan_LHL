const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `🛑🛑🛑 ${actual} !== ${expected}`);
  }
};

const countLetters = (args) => {
  const result = {};
  const newString = args.split(" ").join("");
  for (let element of newString) {
    //   console.log(element)
    // const noOfEle = newString.split("").filter((x) => x === element);
    // result[`${element}`] = noOfEle.length;
    if (result[element]) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  }

  // console.log(result)
  return result;
};
module.exports = countLetters
console.log(countLetters("lighthouse in the house"))