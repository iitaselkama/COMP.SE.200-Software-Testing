// words.test.js
import words from '../src/words.js'; //changed import path + added semicolons 
                                     // to ends of lines, everything else is AI

// Tell Jest to mock the real module path
jest.mock('../src/.internal/unicodeWords.js')

import unicodeWords from '../src/.internal/unicodeWords.js'

describe('words function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  /*test('splits ASCII words correctly', () => {
    const input = 'fred, barney, & pebbles';
    const result = words(input);
    expect(result).toStrictEqual(['fred', 'barney', 'pebbles']);
    expect(unicodeWords).not.toHaveBeenCalled();
  });*/ //Changed

  /*test('splits ASCII words with numbers', () => {
    const input = 'abc123 def456';
    const result = words(input);
    expect(result).toStrictEqual(['abc123', 'def456']);
  });*/ //Changed

  test('splits with custom regex pattern', () => {
    const input = 'fred, barney, & pebbles';
    const pattern = /[^, ]+/g;
    const result = words(input, pattern);
    expect(result).toEqual(['fred', 'barney', '&', 'pebbles']);
  });

  test('returns empty array when no match with custom pattern', () => {
    const input = '12345';
    const pattern = /[a-z]+/g;
    const result = words(input, pattern);
    expect(result).toEqual([]);
  });

  test('handles empty string input', () => {
    expect(words('')).toEqual([]);
  });

  /*test('handles undefined input gracefully', () => {
    expect(words()).toEqual([]);
  });*/

  /*test('uses unicodeWords when unicode characters are present', () => {
    const input = 'こんにちは 世界';
    const result = words(input);
    expect(unicodeWords).toHaveBeenCalledWith(input);
    expect(result).toStrictEqual(['こんにちは', '世界']);
  });*/ //Changed

  test('detects mixed case patterns triggering unicodeWords', () => {
    const input = 'camelCaseExample';
    words(input);
    expect(unicodeWords).toHaveBeenCalled();
  });

  test('detects digits mixed with letters triggering unicodeWords', () => {
    const input = 'abc123';
    words(input);
    expect(unicodeWords).toHaveBeenCalled();
  });

  test('detects non-alphanumeric triggering unicodeWords', () => {
    const input = 'hello@world';
    words(input);
    expect(unicodeWords).toHaveBeenCalled();
  });

  test('returns empty array when input has only symbols', () => {
    const input = '!!!@@@###';
    const result = words(input);
    expect(result).toEqual([]);
  });

  /*test('handles long string with mixed ASCII and Unicode', () => {
    const input = 'hello world 🌍🚀';
    const result = words(input);
    expect(unicodeWords).toHaveBeenCalledWith(input);
    expect(result).toStrictEqual(['hello', 'world', '🌍🚀']);
  });*/ //Changed
});