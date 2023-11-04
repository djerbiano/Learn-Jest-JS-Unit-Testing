const allData = require("../all");
/********************************custom test functions*********************************/
// first custom test function
expect.extend({
  toBeLargerThan(receiver, target) {
    const pass = receiver > target;
    if (pass) {
      return {
        message: () => `expected ${receiver} to be larger than ${target}`,
        // goul lel test function toBeLargerThan return test ok
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error : expected ${receiver} not to be larger than ${target}`,
        pass: false,
      };
    }
  },
});

test("check if number is larger than other number", () => {
  expect(10).toBeLargerThan(5);
});
// second custom test function
expect.extend({
  toBeBetween(receiver, start, end) {
    const pass = receiver > start && receiver < end;
    if (pass) {
      return {
        message: () => `expected ${receiver} to be between ${start} and ${end}`,
        // goul lel test function toBeBetween return test ok
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error : expected ${receiver} not to be between ${start} and ${end}`,
        pass: false,
      };
    }
  },
});

test("check if years is between years range", () => {
  expect(1990).toBeBetween(1900, 2023);
});
/********************************end custom test functions*********************************/

// expect.anything() anything except null and undefined
test("expect anything", () => {
  //let x;
  expect("saber").toEqual(expect.anything());
  expect(1).toEqual(expect.anything());
  expect([1, 2, 3, 4]).toEqual(expect.anything());
  // expect(x).toEqual(expect.anything());
  // expect(null).toEqual(expect.anything());
  // expect(undefined).toEqual(expect.anything());
});

// expect.any( kol chay fel constructor ta3 language)
test("expect any constructor", () => {
  expect("saber").toEqual(expect.any(String));
  expect(10).toEqual(expect.any(Number));
});

// expect.arrayContaining(array)
test("expect array to be found in array", () => {
  const myArray = [1, 2, 3, 4, 5];
  expect(myArray).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  expect(myArray).toEqual(expect.arrayContaining([1, 2]));
  expect(myArray).toEqual(expect.arrayContaining([5, 2, 1]));
});



test("check if array contains 6 elements, 1e methode with toBe", () => {
  expect(allData.length).toBe(6);
});

test("check if array contains 6 elements , 2e methode with toHaveLength", () => {
  expect("osamaa").toHaveLength(6);
});

test("check if array contains 6 elements , 2e methode with not.toHaveLength", () => {
  expect("osamaa").not.toHaveLength(7);
});

test("check if array contains number 6 ", () => {
  expect(allData).toContain(6);
});

test("check if array not contains number 7 with not ", () => {
  expect(allData).not.toContain(7);
});

test("check if array not contain number zero ", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[i]).not.toBe(0);
  }
});

test("check if array contain only number 1e methode", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBe(false);
  }
});

test("check if array contain only number 2e methode", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBeFalsy();
  }
});

test("check if array contain only number 3e methode", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).not.toBeTruthy();
  }
});

/*
// other methods
toBeGreaterThan
toBeGreaterThanOrEqual
toBeLessThan
toBeLessThanOrEqual
*/
it("check if array first element is larger than 0", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[0]).toBeGreaterThan(0);
  }
});

it("check if array first element is larger than 0", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[0]).toBeGreaterThanOrEqual(0);
  }
});

it("check for undefined", () => {
  let a;
  expect(a).toBeUndefined();
});

it("check for substring inside by regexp", () => {
  let myString = "hello world";
  expect(myString).toMatch(/hello world/);
});

it("check for property in object", () => {
  let myObject1 = {
    name: "saber",
    age: 30,
  };
  expect(myObject1).toHaveProperty("age");
});

it("check for property age value is 30", () => {
  let myObject2 = {
    name: "saber",
    age: 30,
  };
  expect(myObject2).toHaveProperty("age", 30);
});
