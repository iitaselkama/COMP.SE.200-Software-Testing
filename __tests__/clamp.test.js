import clamp from '../src/clamp.js';

test('Give parameters 348, 0, 100, gives 100', () => {
  expect(clamp(348, 0, 100)).toBe(100);
});

test('Give parameters 56, 0, 100, gives 56', () => {
  expect(clamp(56, 0, 100)).toBe(56);
});

test('Give parameters -56, 0, 100, gives 0', () => {
  expect(clamp(-56, 0, 100)).toBe(0);
});