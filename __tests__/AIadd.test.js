import add from '../src/add.js';

test('add 6 + 4 to equal 10', () => {
  expect(add(6, 4)).toBe(10);
});

test('add positive and negative: 10 + (-3) = 7', () => {
  expect(add(10, -3)).toBe(7);
});

test('add negative and positive: (-10) + 3 = -7', () => {
  expect(add(-10, 3)).toBe(-7);
});

test('add two negatives: (-5) + (-8) = -13', () => {
  expect(add(-5, -8)).toBe(-13);
});

test('add with zeros: 0 + 0 = 0', () => {
  expect(add(0, 0)).toBe(0);
});

test('add with zeros: 0 + 5 = 5', () => {
  expect(add(0, 5)).toBe(5);
});

test('add with zeros: 5 + 0 = 5', () => {
  expect(add(5, 0)).toBe(5);
});

test('add floating-point numbers: 0.1 + 0.2 ≈ 0.3', () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
});

test('add floating-point numbers: 1.2345 + 2.3456 ≈ 3.5801', () => {
  expect(add(1.2345, 2.3456)).toBeCloseTo(3.5801, 10);
});

test('add very large numbers: 1e15 + 1 = 1000000000000001', () => {
  expect(add(1e15, 1)).toBe(1000000000000001);
});

test('add Infinity + 1 = Infinity', () => {
  expect(add(Infinity, 1)).toBe(Infinity);
});

test('add -Infinity + (-1) = -Infinity', () => {
  expect(add(-Infinity, -1)).toBe(-Infinity);
});

test('add Infinity + (-Infinity) = NaN', () => {
  expect(add(Infinity, -Infinity)).toBeNaN();
});

test('NaN propagates: NaN + 5 = NaN', () => {
  expect(add(NaN, 5)).toBeNaN();
});

test('NaN propagates: 5 + NaN = NaN', () => {
  expect(add(5, NaN)).toBeNaN();
});

test('NaN propagates: NaN + NaN = NaN', () => {
  expect(add(NaN, NaN)).toBeNaN();
});

test('undefined defaults: undefined + 5 = 5', () => {
  expect(add(undefined, 5)).toBe(5);
});

test('undefined defaults: 5 + undefined = 5', () => {
  expect(add(5, undefined)).toBe(5);
});

test('undefined defaults: undefined + undefined = 0', () => {
  expect(add(undefined, undefined)).toBe(0);
});

test('missing params: add() = 0', () => {
  expect(add()).toBe(0);
});

test('missing params: add(7) = 7', () => {
  expect(add(7)).toBe(7);
});

/*test('numeric strings are coerced: "6" + "4" = 10', () => {
  expect(add('6', '4')).toBe(10);
});

test('numeric strings are coerced: "2.5" + "3.1" ≈ 5.6', () => {
  expect(add('2.5', '3.1')).toBeCloseTo(5.6, 10);
});

test('mixed number and string: 6 + "4" = 10', () => {
  expect(add(6, '4')).toBe(10);
});

test('mixed number and string: "6" + 4 = 10', () => {
  expect(add('6', 4)).toBe(10);
});

test('non-numeric strings produce NaN: "foo" + 1 = NaN', () => {
  expect(add('foo', 1)).toBeNaN();
});

test('non-numeric strings produce NaN: 1 + "bar" = NaN', () => {
  expect(add(1, 'bar')).toBeNaN();
});*/

test('null coerces to 0: null + 5 = 5', () => {
  expect(add(null, 5)).toBe(5);
});

test('null coerces to 0: 5 + null = 5', () => {
  expect(add(5, null)).toBe(5);
});

test('null coerces to 0: null + null = 0', () => {
  expect(add(null, null)).toBe(0);
});

test('object input produces NaN: {} + 1 = NaN', () => {
  expect(add({}, 1)).toBeNaN();
});

test('array coercion: [] + 1 = 1', () => {
  expect(add([], 1)).toBe(1);
});

test('array coercion: [2] + 3 = 5', () => {
  expect(add([2], 3)).toBe(5);
});

test('non-scalar array produces NaN: [1,2] + 3 = NaN', () => {
  expect(add([1, 2], 3)).toBeNaN();
});
