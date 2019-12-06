export function rateLimitV1(fn, ms) {
  let isRL = false;
  return function ratelimit(...args) {
    if (isRL) return;
    isRL = true;
    setTimeout(() => {
      isRL = false;
    }, ms);
    return fn(...args);
  };
}

/**
 * Tail recurisive solution
 */
export default function rateLimit(fn, ms) {
  let isRL = false;
  const argsQueue = [];

  function takeFromQueue() {
    setTimeout(() => {
      if (argsQueue.length) {
        const _args = argsQueue.shift();
        fn(..._args);
        takeFromQueue();
      } else {
        isRL = false;
      }
    }, ms);
  }

  return function _ratelimit(...args) {
    if (isRL) {
      argsQueue.push(args);
      return;
    }
    fn(...args);
    isRL = true;
    takeFromQueue();
  };
}

const logRl = rateLimit(console.log, 2000);

logRl(1000);
logRl(100);
logRl(100);
