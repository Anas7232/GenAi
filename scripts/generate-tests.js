console.log("📦 Running generate-tests.js script...");

const fs = require("fs");
const path = "__tests__";
const fileName = `${path}/calculator.test.js`;

const testContent = `
const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator Functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplies 3 * 2 to equal 6', () => {
    expect(multiply(3, 2)).toBe(6);
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
`;

try {
  fs.mkdirSync(path, { recursive: true });
  fs.writeFileSync(fileName, testContent.trim());
  console.log("✅ Dummy test cases generated successfully!");
} catch (err) {
  console.error("❌ Failed to generate test cases:", err.message);
}
