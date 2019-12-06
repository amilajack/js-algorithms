// Limiting the rate at which we execute a function.

export default function throttle(func, limit) {
  let inThrottle = false;
  return function throttledFn(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}
