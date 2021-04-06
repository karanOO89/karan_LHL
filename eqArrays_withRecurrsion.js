const eqArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

  for (let i = 0; i <= arr1.length - 1; i++) {
    if (!Array.isArray(arr1[i]) || !Array.isArray(arr2[i])) {
     
      if (arr1[i] !== arr2[i]) {
        // console.log(arr1[i], arr2[i]);
        // console.log(false);
        
        return false;
        
      }
    } 
      // console.log(arr1[i], arr2[i]);
      eqArrays(arr1[i], arr2[i])};
    
  
  
  return true;
};

console.log(eqArrays([[2, 3], [4]], [[2, 3], [5]]));
