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

console.log(assertEqual(countLetters("lighthouse in the house")), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});
