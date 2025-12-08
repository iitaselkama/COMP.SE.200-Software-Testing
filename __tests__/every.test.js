import every from '../src/every.js';


import isArguments from '../src/isArguments.js';

let t1_1 = [function() {return arguments}(), function() {return arguments}()];

test('Give array [function() {return arguments}(), function() {return arguments}()]\
  with predicate isArguments, gives true', () => {
  expect(every(t1_1, isArguments)).toBe(true);
});

let t1_2 = [function() {return arguments}(), 0];

test('Give array [function() {return arguments}(), 0] with predicate isArguments, gives false', () => {
  expect(every(t1_2, isArguments)).toBe(false);
});

test('Give empty array with predicate isArguments, gives true', () => {
  expect(every([], isArguments)).toBe(true);
});


import isArrayLike from '../src/isArrayLike.js';

let t2_1 = [[1,2,3], [4,5,6], [7,8,9]];

test('Give array [[1,2,3], [4,5,6], [7,8,9]] with predicate isArrayLike, gives true', () => {
  expect(every(t2_1, isArrayLike)).toBe(true);
});

let t2_2 = [[1,2,3], 2, [7,8,9]];

test('Give array [[1,2,3], 2, [7,8,9]] with predicate isArrayLike, gives false', () => {
  expect(every(t2_2, isArrayLike)).toBe(false);
});

test('Give empty array with predicate isArrayLike, gives true', () => {
  expect(every([], isArrayLike)).toBe(true);
});

import isArrayLikeObject from '../src/isArrayLikeObject.js';

test('Give array [[1,2,3], [4,5,6], [7,8,9]] with predicate isArrayLikeObject, gives true', () => {
  expect(every(t2_1, isArrayLikeObject)).toBe(true);
});

test('Give array [[1,2,3], 2, [7,8,9]] with predicate isArrayLikeObject, gives false', () => {
  expect(every(t2_2, isArrayLikeObject)).toBe(false);
});

test('Give empty array with predicate isArrayLikeObject, gives true', () => {
  expect(every([], isArrayLikeObject)).toBe(true);
});


import isBoolean from '../src/isBoolean.js';

let t3_1 = [true, true, false, true];

test('Give array [true, true, false, true] with predicate isBoolean, gives true', () => {
  expect(every(t3_1, isBoolean)).toBe(true);
});

let t3_2 = [true, null, false, true];

test('Give array [true, null, false, true] with predicate isBoolean, gives false', () => {
  expect(every(t3_2, isBoolean)).toBe(false);
});

test('Give empty array with predicate isBoolean, gives true', () => {
  expect(every([], isBoolean)).toBe(true);
});


/*import isBuffer from '../src/isBuffer.js';

let t4_1 = [new Buffer(5), new Buffer(3), new Buffer(9)];

test('Give array [new Buffer(5), new Buffer(3), new Buffer(9)] with predicate isBuffer, gives true', () => {
  expect(every(t4_1, isBuffer)).toBe(true);
});

let t4_2 = [new Buffer(5), new Date, new Buffer(9)];

test('Give array [new Buffer(5), new Date, new Buffer(9)] with predicate isBuffer, gives false', () => {
  expect(every(t4_2, isBuffer)).toBe(false);
});

test('Give empty array with predicate isBuffer, gives true', () => {
  expect(every([], isBuffer)).toBe(true);
});*/


import isDate from '../src/isDate.js';

let t5_1 = [new Date, new Date, new Date];

test('Give array [new Date, new Date, new Date] with predicate isDate, gives true', () => {
  expect(every(t5_1, isDate)).toBe(true);
});

let t5_2 = [new Date, "March 23rd 2026", new Date];

test('Give array [new Date, "March 23rd 2026", new Date] with predicate isDate, gives false', () => {
  expect(every(t5_2, isDate)).toBe(false);
});

test('Give empty array with predicate isDate, gives true', () => {
  expect(every([], isDate)).toBe(true);
});


import isEmpty from '../src/isEmpty.js';

let t6_1 = [null, "", [], 0, false];

test('Give array [null, "", [], 0, false] with predicate isEmpty, gives true', () => {
  expect(every(t6_1, isEmpty)).toBe(true);
});

let t6_2 = [null, "abc", [], 0, false];

test('Give array [null, "abc", [], 0, false] with predicate isEmpty, gives false', () => {
  expect(every(t6_2, isEmpty)).toBe(false);
});

test('Give empty array with predicate isEmpty, gives true', () => {
  expect(every([], isEmpty)).toBe(true);
});


import isLength from '../src/isLength.js';

let t7_1 = [1, 2, 3, 4, 5, 6];

test('Give array [1, 2, 3, 4, 5, 6] with predicate isLength, gives true', () => {
  expect(every(t7_1, isLength)).toBe(true);
});

let t7_2 = [1, 2, 3, "4", 5, 6];

test('Give array [1, 2, 3, "4", 5, 6] with predicate isLength, gives false', () => {
  expect(every(t7_2, isLength)).toBe(false);
});

test('Give empty array with predicate isLength, gives true', () => {
  expect(every([], isLength)).toBe(true);
});


import isObject from '../src/isObject.js';

let t8_1 = [[], {}, isObject];

test('Give array [[], {}, isObject] with predicate isObject, gives true', () => {
  expect(every(t8_1, isObject)).toBe(true);
});

let t8_2 = [[], {}, isObject, null];

test('Give array [[], {}, isObject, null] with predicate isObject, gives false', () => {
  expect(every(t8_2, isObject)).toBe(false);
});

test('Give empty array with predicate isObject, gives true', () => {
  expect(every([], isObject)).toBe(true);
});

import isObjectLike from '../src/isObjectLike.js';

let t8_3 = [[], {}, []];

test('Give array [[], {}, []] with predicate isObjectLike, gives true', () => {
  expect(every(t8_3, isObjectLike)).toBe(true);
});

test('Give array [[], {}, isObject] with predicate isObjectLike, gives false', () => {
  expect(every(t8_2, isObjectLike)).toBe(false);
});

test('Give empty array with predicate isObjectLike, gives true', () => {
  expect(every([], isObjectLike)).toBe(true);
});


import isSymbol from '../src/isSymbol.js';

let t9_1 = [Symbol.iterator, Symbol.iterator, Symbol.iterator];

test('Give array [Symbol.iterator, Symbol.iterator, Symbol.iterator]\
  with predicate isSymbol, gives true', () => {
  expect(every(t9_1, isSymbol)).toBe(true);
});

let t9_2 = [Symbol.hasInstance, "#", Symbol.iterator, Symbol.length];

test('Give array [Symbol.hasInstance, "#", Symbol.iterator, Symbol.length]\
  with predicate isSymbol, gives false', () => {
  expect(every(t9_2, isSymbol)).toBe(false);
});

test('Give empty array with predicate isSymbol, gives true', () => {
  expect(every([], isSymbol)).toBe(true);
});


import isTypedArray from '../src/isTypedArray.js';

let t10_1 = [Uint8Array, Uint16Array, Uint32Array];

/*test('Give array [Uint8Array, Uint16Array, Uint32Array]\
  with predicate isTypedArray, gives true', () => {
  expect(every(t10_1, isTypedArray)).toBe(true);
});*/

let t10_2 = [Uint8Array, Uint8ClampedArray, [], Uint32Array];

test('Give array [Uint8Array, Uint8ClampedArray, [], Uint32Array]\
  with predicate isTypedArray, gives false', () => {
  expect(every(t10_2, isTypedArray)).toBe(false);
});

test('Give empty array with predicate isTypedArray, gives true', () => {
  expect(every([], isTypedArray)).toBe(true);
});