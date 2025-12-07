import reduce from '../src/reduce.js'

test('Sum two numbers', () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3);
});

test('Sum decimal numbers', () => {
    expect(reduce([1.23, 2.55], (sum, n) => sum + n, 0)).toBe(3.78);
});

test('Empty list', () => {
    expect(reduce([], (sum, n) => sum + n, 0)).toBe(0);
});

test('One value', () => {
    expect(reduce([1.23], (sum, n) => sum + n, 0)).toBe(1.23);
});

test('Empty input', () => {
    expect(reduce()).toBe();
});

/*test('Illegal input', () => {
    expect(reduce("asdasd")).toBe(TypeError);
});*/