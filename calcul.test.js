const { addition } = require("./calcul");

test("additionne 1 + 2 pour donner 3", () => {
  expect(addition(1, 2)).toBe(3);
});
