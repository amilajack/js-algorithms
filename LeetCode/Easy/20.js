// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
export default function isValid(s) {
  const stack = [];
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ]);
  const closing = new Set([')', '}', ']']);
  for (let i = 0; i < s.length; i++) {
    if (stack.length) {
      const top = stack[stack.length - 1];
      // if s[i] is closing, must match
      if (closing.has(s[i])) {
        // if matches top of stack, pop stack
        if (map.get(s[i]) === top) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(s[i]);
      }
    } else if (stack.length === 0 && closing.has(s[i])) {
      return false;
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
}
