// __mocks__/.internal/unicodeWords.js
export default function unicodeWords(str) {
  // Very simple mock: split on whitespace and punctuation
  // This ensures deterministic behavior for tests
  return str
    .split(/[\s.,!?;:]+/)
    .filter(Boolean)
};