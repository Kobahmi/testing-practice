const capitalize = require("./capitalize");

test("captitalizes first letter", () => {
  expect(capitalize("value")).toBe("Value");
});
