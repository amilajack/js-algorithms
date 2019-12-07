// implement the builtin EventEmitter in JS

// requirements:
// add events with .on(event, cb)
// add events with .once(event, cb)
// add events with .remove(event, cb)
// .emit
// fire multiple events, add multiple events per event

class CustomEventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, cb) {
    if (this.events.has(event)) {
      const events = this.events.get(event);
      events.push(cb);
    } else {
      this.events.set(event, [cb]);
    }
  }

  emit(event, ...args) {
    if (!this.events.has(event)) return;
    for (const cb of this.events.get(event)) {
      cb.call(cb, args);
    }
  }

  once(event, cb, ...args) {
    const { events } = this;
    function eventCb() {
      cb.call(cb, args);
      if (events.size === 1) {
        events.delete(event);
      } else {
        events.set(
          event,
          events.get(event).filter(e => e !== this)
        );
      }
    }
    this.on(event, eventCb);
  }

  removeEvent(event) {
    this.events.delete(event);
  }
}

const event = new CustomEventEmitter();
event.once('foo', () => console.log('foo'));
event.emit('foo');
event.emit('foo');
