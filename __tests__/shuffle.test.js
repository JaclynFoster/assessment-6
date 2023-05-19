const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
    test("shuffle return an array the same length as argument sent in", () => {
      expect(shuffle([1,2,3,4,5])).toHaveLength(5)
    })
    test("shuffle should return an array ", () => {
      expect(shuffle([1,2,3,4,5])).toBeInstanceOf(Array)
    })
});
