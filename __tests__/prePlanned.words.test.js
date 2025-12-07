import words from '../src/words.js';

let testString = 'Granny, smith & apple';
const noPatternArray = ["Granny", "Smith", "Apple"]
const patterArray = ["Granny", "Smith", "&", "Apple"];

test('parameter is \"Granny, smith & apple", no pattern, \
    gives Array["Granny", "Smith", "Apple"]', () => {
  expect(words(testString)).toBe(noPatternArray);
});

test('parameter is \"Granny, smith & apple", pattern /[^, ]+/g, \
    gives Array["Granny", "Smith", "&", "Apple"]', () => {
  expect(words(testString, /[^, ]+/g)).toBe(patterArray);
});


let testEmpty = '';
const emptyArray = [];

test('parameter is empty string, no pattern, \
    gives Array["Granny", "Smith", "&", "Apple"]', () => {
  expect(words(testEmpty)).toBe(emptyArray);
});

test('parameter is empty string, pattern /[^, ]+/g, \
    gives Array["Granny", "Smith", "&", "Apple"]', () => {
  expect(words(testEmpty, /[^, ]+/g)).toBe(emptyArray);
});