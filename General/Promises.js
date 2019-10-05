/*
 * An onsite interview question I got for a Senior Frontent position at Reddit
 *
 * We should be able to create a new promise from a callback-style function
 * promise.then(successHandler, failureHandler) should result in the appropriate
 * handler getting called whether we invoke `then` before or after the promise
 * has resolved.
 */

function example(willSucceed, callback) {
  setTimeout(() => {
    if (willSucceed) {
      callback(null, 'foo');
    } else {
      callback(new Error('oh noes'));
    }
  }, 100);
}

class MyPromise {
  err = null;

  value = null;

  queue = [];

  constructor(fn) {
    const resolve = val => {
      this.val = val;
      if (this.queue.length) {
        const [success, failure] = this.queue.shift();
        success(this.val);
      }
    };
    const reject = err => {
      this.err;
      const [success, failure] = this.queue.shift();
      failure(this.err);
    };
    fn(resolve, reject);
  }

  then(success, failure) {
    this.queue.push([success, failure]);
  }
}

// tests
const foo = new MyPromise((resolve, reject) => {
  example(true, (error, data) => {
    resolve(data);
  });
});

foo.then(data => console.log(data));

const bar = new MyPromise((resolve, reject) => {
  example(false, (error, data) => {
    reject(error);
  });
});
bar.then(data => console.log(data), () => console.log('failure'));
