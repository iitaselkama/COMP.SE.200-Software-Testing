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

test('For testObject give path ["id", "0", "age"], no defaultValue, gives 24', () => {
  expect(get(testObject, ["id", "0", "age"])).toBe(24);
});

test('For testObject give path "id[0].age" and defaultValue, gives 24', () => {
  expect(get(testObject, "id[0].age", defaultValue)).toBe(24);
});

//This one is not passing as there is no consideration for a faulty path with no defaultValue established
test('For testObject give path ["id", "1"], no defaultValue, gives "not found" error code', () => {
  expect(get(testObject, ["id", "1"])).toBe("404");
});

test('For testObject give path ["id", "1"] and defaultValue, gives defaultValue', () => {
  expect(get(testObject, ["id", "1"], defaultValue)).toBe(defaultValue);
});

//This one is not passing as there is no consideration for a faulty path with no defaultValue established
test('For testObject give path [], no defaultValue, gives "not found" error code', () => {
  expect(get(testObject, [])).toBe("404");
});

test('For testObject give path [] and defaultValue, gives defaultValue', () => {
  expect(get(testObject, [], defaultValue)).toBe(defaultValue);
});