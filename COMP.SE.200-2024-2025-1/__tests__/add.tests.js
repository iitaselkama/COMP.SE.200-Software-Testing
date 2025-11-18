import add from '../src/add.js';

test('add 6 + 4 to equal 10', () => {
    expect(add(6, 4)).toBe(10);
});

test('add -2 + 8 to equal 6', () => {
    expect(add(-2, 8)).toBe(6);
});

test('add 2 + -8 to equal -6', () => {
    expect(add(2, -8)).toBe(-6);
});

test('add -2 + -4 to equal -6', () => {
    expect(add(-2, -4)).toBe(-6);
});

test('add 0 + 10 to equal 10', () => {
    expect(add(0, 10)).toBe(10);
});

test('add 10 + 0 to equal 10', () => {
    expect(add(10, 0)).toBe(10);
});

test('add 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
});

test('add 7,02 + 18,22 to equal 25,24', () => {
    expect(add(7.02, 18.22)).toBe(25.24);
});

test('add 1000000 + 2000000 to equal 3000000', () => {
    expect(add(1000000, 2000000)).toBe(3000000);
});

test('add -1000000 + -2000000 to equal -3000000', () => {
    expect(add(-1000000, -2000000)).toBe(-3000000);
});

test('Call without parameters', () => {
    expect(add('', '')).not.toBe('');
});

test('Call with illegal parameter', () => {
    expect(add('5', 'b')).not.toBe("5b");
});