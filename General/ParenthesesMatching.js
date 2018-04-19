// @flow
import Stack from '../DataStructures/Stack';

const start = ['{', '(', '['];
const endings = ['}', ')', ']'];

const endingMappings = {
  '}': '{',
  ')': '(',
  ']': '['
};

export default function isBalanced(string: string): boolean {
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
