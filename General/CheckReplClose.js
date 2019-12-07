// Given a string of repl input, determine if the repl input should be executed or not

const expect = require('expect');

function shouldRun(code) {
  const stack = [];
  let strIsOpen = false;
  const mappings = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ]);

  const opening = new Set(mappings.values());

  for (let i = 0; i < code.length; i++) {
    if (code[i] === '`') {
      strIsOpen = !strIsOpen;
    }
    if (strIsOpen) {
      continue;
    }
    if (opening.has(code[i])) {
      stack.push(code[i]);
    } else if (mappings.has(code[i])) {
      if (stack[stack.length - 1] === mappings.get(code[i])) {
        stack.pop();
      } else {
        console.error('closing with invalid char');
      }
    }
  }

  return stack.length === 0 && !strIsOpen;
}

// nums
expect(shouldRun(')')).toEqual(true);
expect(shouldRun('foo())')).toEqual(true);
expect(shouldRun('foo(')).toEqual(false);
expect(shouldRun('fo(o(')).toEqual(false);
// anything inside a string is to be ignored
// strings
expect(shouldRun('foo(`)')).toEqual(false);
expect(shouldRun('foo(`)`)')).toEqual(true);
expect(shouldRun('foo()`')).toEqual(false);

expect(shouldRun('`')).toEqual(false);
expect(shouldRun('foo(`')).toEqual(false);
expect(shouldRun('foo(``')).toEqual(false);
expect(shouldRun('foo(`)`')).toEqual(false);
expect(shouldRun('foo(`)`)')).toEqual(true);

// multi bracket
expect(shouldRun('foo({')).toEqual(false);
expect(shouldRun('foo({})')).toEqual(true);
expect(shouldRun('foo({[]})')).toEqual(true);
expect(shouldRun('foo({{[')).toEqual(false);

expect(shouldRun('{[}]')).toEqual(false);

expect(shouldRun('foo(`')).toEqual(false);
expect(shouldRun('foo(``')).toEqual(false);
expect(shouldRun('foo(`)`')).toEqual(false);
expect(shouldRun('foo(`)`)')).toEqual(true);
