import filter from '../src/filter.js';


test('Filter positive numbers', () => {
    const list = [123, 222, -1];
    expect(filter(list, ( x ) => x > 0 )).toStrictEqual([123, 222]);
});

test('Filter negative numbers', () => {
    const list = [123, 222, -1];
    expect(filter(list, ( x ) => x < 0 )).toStrictEqual([-1]);
});

test('Filter zeros', () => {
    const list = [123, 222, -1, 0, 0, 0];
    expect(filter(list, ( x ) => x == 0 )).toStrictEqual([0, 0, 0]);
});

test('Filter positive decimal numbers', () => {
    const list = [6.6, 2.94, 3.18, 0];
    expect(filter(list, ( x ) => x > 0 )).toStrictEqual([6.6, 2.94, 3.18]);
});

test('Empty list', () => {
    const list = [];
    expect(filter(list, ( x ) => x > 0 )).toStrictEqual([[]]);
});

