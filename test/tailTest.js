
const assert = require("chai").assert;
const tail = require('../tail');
describe("#tail", () => {
    it("returns 'Lighthouse', 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
      assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
    });
    it("returns 'Lighthouse', 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
        assert.deepEqual(tail(['Lighthouse', 'Labs']), [ 'Labs']);
      });
    // it("returns '5' for ['5']", () => {
    //   assert.strictEqual(head(["5"]), "5");
    // });
    // it("returns 5 for [5 ,6 ,7]", () => {
    //   assert.strictEqual(head([5, 6, 7]), 5);
    // });
    // it("returns 'Hello' for ['Hello','Lighthouse', 'Labs']", () => {
    //   assert.strictEqual(head(['Hello','Lighthouse', 'Labs']), 'Hello');
    // });
    
  });

//   tail(["Hello", "Lighthouse", "Labs"]);  
// assertEqual(result[0],"Lighthouse"); // => will always fail!
// assertEqual(result[1],"Labs");