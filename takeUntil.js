const takeUntil = function (array, callback) {
  let output = [];
  for (let ele of array) {
      
    if (callback(ele)) {
      output.push(ele);
     
    } else {
      return output;
    }
  }
  return output;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const result = takeUntil(data1, dontStop => dontStop > 0);
console.log(result);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x !== ",");
console.log(results2);
