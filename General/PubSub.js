/*
 * An onsite interview question I got for a Senior Frontent position at Reddit
 *
 * The goal is to create a pub/sub system.
 * The api is open ended, but it should support the following features:
 *
 * 1. It should allow the user to spawn a ‘Publisher’.
 * 2. The Publisher should allow the user to do the following on a per Publisher basis:
 *   a. Some way to add callbacks to the publisher
 *   b. Some way to remove callbacks from the publisher
 *   c. A method to fire all the callbacks in the publisher with a variable number of arguments
 *   d. A way to enable and disable the publisher. If the publisher is disabled, firing the callbacks will result in a no-op.
 *
 */
class Publisher {
  constructor() {
    this.isEnabled = true;
    this.events = new Set();
  }

  add(fn) {
    this.events.add(fn);
    return {
      remove: () => {
        this.remove(fn);
      }
    };
  }

  remove(fn) {
    this.events.delete(fn);
  }

  enable() {
    this.isEnabled = true;
  }

  disable() {
    this.isEnabled = false;
  }

  fire(...args) {
    if (!this.isEnabled) return;
    for (const fn of this.events) {
      fn.call(fn, args);
    }
  }
}

const publisher = new Publisher();
const fn = (...args) => console.log.call(console, args);
publisher.add(fn);
publisher.fire('fire', true); // log foo
publisher.fire(true); // log foo
publisher.remove(fn);
publisher.fire(); // noop
publisher.add(fn);
publisher.disable();
publisher.fire(); // noop

const fnRef = publisher.add(fn);
fnRef.remove();
publisher.fire(); // noop
