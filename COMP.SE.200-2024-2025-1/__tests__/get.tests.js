import get from '../src/get.js';

let test1Object = {};
let test1Path = {};
let test1Result = '';

test('words input "" without pattern to return array []', () => {
    expect(get(test1Data)).toBe(test1Result);
});