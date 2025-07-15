const fs = require("fs");

const content = `
const { add, subtract, multiply } = require('../src/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('multiplies 3 * 2 to equal 6', () => {
  expect(multiply(3, 2)).toBe(6);
});
`;

fs.mkdirSync("__tests__", { recursive: true });
fs.writeFileSync("__tests__/calculator.test.js", content);
console.log("✅ Dummy test cases generated!");
