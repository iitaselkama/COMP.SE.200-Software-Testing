import words from '../src/words.js';

let testString = 'Granny, smith & apple';
const noPatternArray = ["Granny", "smith", "apple"]
const patterArray = ["Granny", "smith", "&", "apple"];

test('parameter is \"Granny, smith & apple", no pattern,\
    gives Array["Granny", "smith", "apple"]', () => {
  expect(words(testString)).toStrictEqual(noPatternArray);
});

test('parameter is \"Granny, smith & apple", pattern /[^, ]+/g,\
    gives Array["Granny", "smith", "&", "apple"]', () => {
  expect(words(testString, /[^, ]+/g)).toStrictEqual(patterArray);
});


let testEmpty = '';
const emptyArray = [];

test('parameter is empty string, no pattern,\
    gives Array[]', () => {
  expect(words(testEmpty)).toStrictEqual(emptyArray);
});

test('parameter is empty string, pattern /[^, ]+/g,\
    gives Array[]', () => {
  expect(words(testEmpty, /[^, ]+/g)).toStrictEqual(emptyArray);
});