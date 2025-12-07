import toNumber from '../src/toNumber.js';

test('parameter is 5.263, gives 5.263', () => {
  expect(toNumber(5.263)).toBe(5.263);
});

test('parameter is -4832, gives -4832', () => {
  expect(toNumber(-4832)).toBe(-4832);
});

test('parameter is 0, gives 0', () => {
  expect(toNumber(0)).toBe(0);
});

test('parameter is "123", gives 123', () => {
  expect(toNumber('123')).toBe(123);
});

test('parameter is "abc", gives NAN', () => {
  expect(toNumber("abc")).toBe(NaN);
});

test('parameter is new Number(58), gives 58', () => {
  expect(toNumber(new Number(58))).toBe(58);
});

test('parameter is new String("abc"), gives NAN', () => {
  expect(toNumber(new String("abc"))).toBe(NaN);
});

test('parameter is new String("123"), gives 123', () => {
  expect(toNumber(new String("123"))).toBe(123);
});