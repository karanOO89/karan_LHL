const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ ${actual} === ${expected}`);
    } else {
      console.assert(actual === expected, `🛑🛑🛑 ${actual} !== ${expected}`);
    }
  };

const countOnly = function (allItems, itemsToCount) {
  const dumArr = {};

  for (let i = 0; i <= allItems.length - 1; i++) {
    const element = allItems[i];
    if (itemsToCount[`${element}`] && itemsToCount[`${element}`] === true) {
      const result = allItems.filter((x) => x === element);
      if (!dumArr[`${element}`]) {
        dumArr[`${element}`] = result.length;
      }
    }
  }
  return(dumArr);
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});
console.log(result1);

  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], 3);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], 1);
