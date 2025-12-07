import isEmpty from '../src/isEmpty.js';

test('Empty input', () => {
    expect(isEmpty()).toBe(true);
});

test('Empty list', () => {
    expect(isEmpty([])).toBe(true);
});

test('String', () => {
    expect(isEmpty("test")).toBe(false);
});

/*test('Integer', () => {
    expect(isEmpty(3)).toBe(false);
});*/

test('List of strings', () => {
    expect(isEmpty(["test", "test2"])).toBe(false);
});