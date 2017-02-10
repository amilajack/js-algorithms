// @flow
import { expect } from 'chai';
import Stack from '../DataStructures/Stack';


const start = ['{', '(', '['];
const endings = ['}', ')', ']'];

const endingMappings = {
  '}': '{',
  ')': '(',
  ']': '['
};

export default function isBalanced(string: string): bool {
  const stack = new Stack();

  for (const char of Array.from(string)) {
    if (start.includes(char)) {
      stack.push(char);
      continue;
    }
    if (endings.includes(char)) {
      if (stack.empty()) return false;
      if (stack.pop() !== endingMappings[char]) return false;
    }
  }

  return stack.empty();
}

test(() => {
  const testCases = [
    '12345',
    '(1 + 2)',
    '{1 + [2 * 3]}',
    '{1 + [2 * (3 / 4)]}'
  ];

  const failingTests = [
    '123{4{[[[]5',
    '(1 + 2)))))',
    '(1-3}',
    '(1-3}'
  ];

  expect(testCases.map(isBalanced))
    .to.eql([true, true, true, true]);

  expect(failingTests.map(isBalanced))
    .to.eql([false, false, false, false]);
});
