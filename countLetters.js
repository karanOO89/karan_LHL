const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `🛑🛑🛑 ${actual} !== ${expected}`);
  }
};

const countLetters = (args) => {
  result = {};
  const newString = args.split(" ").join("");
  for (let element of newString) {
    //   console.log(element)
    const noOfEle = newString.split("").filter((x) => x === element);
    
  
    result[`${element}`] = noOfEle.length;
    
  
}

  // console.log(result)
  return result;
};

console.log(countLetters("lighthouse in the house"));
