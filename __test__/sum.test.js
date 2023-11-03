const theSum = require("../sum");

/*
test(name, fn, timeout)
it(name, fn, timeout)
describe(name, fn)

exemple skip or only in describe or one test = 

describe.skip("check the number sum total", () => {
  test("return 0 if there is no number", () => {
    expect(theSum()).toBe(0);
  });

    test.only("return the numbre one + two", () => {
    expect(theSum(10, 25)).toBe(35);
  });

*/

describe("check the number sum total", () => {
  test("return 0 if there is no number", () => {
    expect(theSum()).toBe(0);
  });

  test("return the numbre one + two", () => {
    expect(theSum(10, 25)).toBe(35);
  });

  test("return the numbre one + two + tree", () => {
    expect(theSum(10, 20, 30)).toBe(60);
  });

  test("return the numbre one + two + tree + four", () => {
    expect(theSum(10, 20, 30, 10)).toBe(70);
  });

  test("return the total", () => {
    expect(theSum(1, 9, 10, 40, 20, 10, 100, 10)).toBe(200);
  });
});
console.log([].reduce((a, b) => a + b, 0));
