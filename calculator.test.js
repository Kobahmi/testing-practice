const calculator = require("./calculator");

test("calculates add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("calculates substract", () => {
  expect(calculator.substract(2, 1)).toBe(1);
});

test("calculates multiply", () => {
  expect(calculator.multiply(4, 4)).toBe(16);
});

test("calculates divide", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});
