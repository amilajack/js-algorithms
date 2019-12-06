// A debounced function will ignore all calls to it until the calls have stopped for a specified time
// period. Only then will it call the original function. For instance, if we specify the time as two
// seconds, and the debounced function is called 10 times with an interval of one second between each
// call, the function will not call the original function until two seconds after the last (tenth) call.

export default function debounce(func, delay) {
  let inDebounce;
  return function debouncedFn(...args) {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func(...args), delay);
  };
}
