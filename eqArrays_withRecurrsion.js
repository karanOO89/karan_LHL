const eqArrays = (arr1, arr2) => {
  x = false;
  if (arr1.length !== arr2.length) return x;

  for (let i = 0; i <= arr1.length - 1; i++) {
    if (!Array.isArray(arr1[i]) || !Array.isArray(arr2[i])) {
      if (arr1[i] !== arr2[i]) {
        console.log(arr1[i], arr2[i]);
        return x;
      }
    } else {
      eqArrays(arr1[i], arr2[i]);
    }
  }
  x = true;
  return x;
};

console.log(eqArrays([[2, 3], [4]], [[2, 3], [5]]));
