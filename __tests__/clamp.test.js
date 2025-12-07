import clamp from '../src/clamp.js';

test('Give parameters 348, 0, 100, gives 100', () => {
  expect(clamp(348, 0, 100)).toBe(100);
});

test('Give parameters 70, 0, 100, gives 0', () => {
  expect(clamp(70, 0, 100)).toBe(0);
});

test('Give parameters 20, 0, 100, gives 0', () => {
  expect(clamp(20, 0, 100)).toBe(0);
});

test('Give parameters 50, 0, 100, gives 0', () => {
  expect(clamp(50, 0, 100)).toBe(0);
});

test('Give parameters -56, 0, 100, gives 0', () => {
  expect(clamp(-56, 0, 100)).toBe(0);
});