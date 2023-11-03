const allData = require("../all");

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
test("check if array first element is larger than 0", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[0]).toBeGreaterThan(0);
  }
});

test("check if array first element is larger than 0", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[0]).toBeGreaterThanOrEqual(0);
  }
});
