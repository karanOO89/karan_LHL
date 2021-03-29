const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ " + actual + " === " + expected);
  } else {
    console.assert(actual === expected, `🛑🛑🛑 ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);