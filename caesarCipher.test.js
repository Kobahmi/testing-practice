const caesarCipher = require("./caesarCipher");

test("ceasar cipher", () => {
  expect(caesarCipher("hi", 1)).toBe("ij");
});
