import get from '../src/get.js';

let testObject = { "id" : [ {"name" : ["Flint", "Lockwood"]}, {"age" : 24} ] };
let defaultValue = "error"

test('For testObject give path ["id", "0", "name", "1"], no defaultValue, gives "Lockwood"', () => {
  expect(get(testObject, ["id", "0", "name", "1"])).toBe("Lockwood");
});

test('For testObject give path "id[0].name[1]", no defaultValue, gives "Lockwood"', () => {
  expect(get(testObject, "id[0].name[1]")).toBe("Lockwood");
});

test('For testObject give path ["id", "0", "name", "1"] and defaultValue, gives "Lockwood"', () => {
  expect(get(testObject, ["id", "0", "name", "1"], defaultValue)).toBe("Lockwood");
});

test('For testObject give path "id[0].name[1]" and defaultValue, gives "Lockwood"', () => {
  expect(get(testObject, "id[0].name[1]", defaultValue)).toBe("Lockwood");
});

test('For testObject give path ["id", "1", "age"], no defaultValue, gives 24', () => {
  expect(get(testObject, ["id", "1", "age"])).toBe(24);
});

test('For testObject give path "id[1].age" and defaultValue, gives 24', () => {
  expect(get(testObject, "id[1].age", defaultValue)).toBe(24);
});

test('For testObject give path ["id", "2"], no defaultValue, gives undefined', () => {
  expect(get(testObject, ["id", "2"])).toBe(undefined);
});

test('For testObject give path "id[2]" and defaultValue, gives defaultValue', () => {
  expect(get(testObject, "id[2]", defaultValue)).toBe(defaultValue);
});

test('For testObject give path [], no defaultValue, gives undefined', () => {
  expect(get(testObject, [])).toBe(undefined);
});

test('For testObject give path [] and defaultValue, gives defaultValue', () => {
  expect(get(testObject, [], defaultValue)).toBe(defaultValue);
});