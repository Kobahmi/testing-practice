const analyzeArray = require("./analyzeArray");

test("analyzes the array", () => {
  expect(analyzeArray([5, 5, 5, 5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 4,
  });
});
