import {
  addition, subtract, divide, multiply,
} from './simpleCalc.js';

// const SimpleCalc = require('./simpleCalc.js');

// Test function
describe('Testing JS files', () => {
  test('Testing Addition function', () => {
    expect(addition(3, 5)).toBe(8);
  });
});
describe('Testing JS files', () => {
  test('Testing Addition function', () => {
    expect(addition(5, 5)).toBe(10);
  });
});
describe('Testing JS files', () => {
  test('Testing Addition function', () => {
    expect(addition(-3, 5)).toBe(2);
  });
});

// Subtraction Function
describe('Testing JS files', () => {
  test('Testing Subtraction function', () => {
    expect(subtract(-5, -2)).toBe(-3);
  });
});

describe('Testing JS files', () => {
  test('Testing Subtraction function', () => {
    expect(subtract(9, 5)).toBe(4);
  });
});

describe('Testing JS files', () => {
  test('Testing Subtraction function', () => {
    expect(subtract(5, 5)).toBe(0);
  });
});

// Division Function
describe('Testing JS files', () => {
  test('Testing Division function', () => {
    expect(divide(3, 5)).toBe(0.6);
  });
});

describe('Testing JS files', () => {
  test('Testing Division function', () => {
    expect(divide(12, 6)).toBe(2);
  });
});

describe('Testing JS files', () => {
  test('Testing Division function', () => {
    expect(divide(6, 6)).toBe(1);
  });
});

// Multiplication function
describe('Testing JS files', () => {
  test('Testing multiplication function', () => {
    expect(multiply(3, 5)).toBe(15);
  });
});

describe('Testing JS files', () => {
  test('Testing multiplication function', () => {
    expect(multiply(1, 5)).toBe(5);
  });
});

describe('Testing JS files', () => {
  test('Testing multiplication function', () => {
    expect(multiply(5, 5)).toBe(25);
  });
});
