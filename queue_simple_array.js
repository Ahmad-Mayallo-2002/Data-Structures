class Queue {
  #queue;
  constructor() {
    this.#queue = [];
  }

  isEmpty() {
    return !this.#queue.length;
  }

  display() {
    for (let i = 0; i < this.#queue.length; i++) console.log(this.#queue[i]);
  }

  enqueue(el) {
    this.#queue.push(el);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Underflow");
      return;
    }
    return this.#queue.shift();
  }

  getFront() {
    if (this.isEmpty()) {
      console.log("Queue is Underflow");
      return;
    }
    return this.#queue[0];
  }

  getRear() {
    if (this.isEmpty()) {
      console.log("Queue is Underflow");
      return;
    }
    return this.#queue[this.#queue.length - 1];
  }
}
