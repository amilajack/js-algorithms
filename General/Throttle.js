// Limiting the rate at which we execute a function.

export default function throttle(func, limit) {
  let inThrottle;
  return function throttledFn() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}
