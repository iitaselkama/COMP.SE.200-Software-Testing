import ceil from '../src/ceil.js';

test('Round up', () => {
    expect(ceil(6.001)).toBe(7);
});

test('Round up negative number', () => {
    expect(ceil(-6.001)).toBe(-6);
});

test('Same number', () => {
    expect(ceil(6.000)).toBe(6);
});

test('Two decimals', () => {
    expect(ceil(6.005, 2)).toBe(6.01);
});

test('Illegal input', () => {
    expect(ceil("asdasd")).toBe(NaN);
});
test('Empty input', () => {
    expect(ceil()).toBe(NaN);
});