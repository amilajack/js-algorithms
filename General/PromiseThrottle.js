// Implement a throttler that executes an array of tasks. When the throttler
// is passed a number, only execute that number of the tasks and passes the other tasks into a queue

/* eslint promise/no-callback-in-promise: off */

function promiseThrottle(tasks: Function<Promise<any>>, limit: number = 4) {
  const queue = [];
  let running = 0;

  function done() {
    if (queue.length) {
      const task = queue.shift();
      task()
        .then(done)
        .catch(console.log);
    }
  }

  for (const task of tasks) {
    if (running < limit) {
      task()
        .then(done)
        .catch(console.log);
      running++;
    } else {
      queue.push(task);
    }
  }
}

const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, ms)).then(() =>
    console.log(`slept for ${ms}`)
  );

const tasks = [
  () => sleep(1000),
  () => sleep(1000),
  () => sleep(1000),
  () => sleep(100),
  () => sleep(200),
  () => sleep(400)
];

promiseThrottle(tasks);
