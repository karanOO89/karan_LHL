const eqArraysRecurrsion = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i <= arr1.length - 1; i++) {
    if (!Array.isArray(arr1[i]) || !Array.isArray(arr2[i])) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } else {
      if (eqArrays(arr1[i], arr2[i])) {
        eqArrays(arr1[i], arr2[i]);
      } else {
        return false;
      }
    }
  }

  return true;
};
module.exports = eqArraysRecurrsion; // deprecated
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [5]]));
