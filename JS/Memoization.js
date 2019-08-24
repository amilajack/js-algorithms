export default function memoize(fn) {
  const memoTable = new Map();
  return function meoizedFn(...args) {
    const key = args.join('-');
    if (memoTable.has(key)) return memoTable.get(key);
    const val = fn.apply(this, args);
    memoTable.set(key, val);
    return val;
  };
}

export function test() {
  function fib(n) {
    if (n === 0 || n === 1) return 1;
    return n + fib(n - 1) + fib(n - 2);
  }

  const a = memoize(fib);
  console.log(a(4));
  console.log(a(4));

  class User {
    fib(n) {
      return n || 2;
    }
  }
  const u = new User();
  const memU = memoize(u.fib);
  console.log(memU());
  console.log(memU(3));
  console.log(memU(3));
}
