class CircularQueue {
  #front;
  #rear;
  constructor(cap) {
    this.cap = cap;
    this.#front = -1;
    this.#rear = -1;
    this.size = 0;
    this.arr = new Array(cap);
  }

  isEmpty() {
    return !this.size;
  }

  isFull() {
    return this.size === this.cap;
  }

  getFront() {
    return this.arr[this.#front];
  }

  getRear() {
    return this.arr[this.#rear];
  }

  enqueue(x) {
    if (this.isFull()) {
      console.log("Queue is Overflow");
      return;
    }
    if (this.isEmpty()) this.#front = 0;
    this.#rear = (this.#front + this.size) % this.cap;
    this.arr[this.#rear] = x;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Underflow");
      return;
    }
    let front = this.arr[this.#front];
    delete this.arr[this.#front];
    this.#front = (this.#front + 1) % this.cap;
    this.size--;
    return front;
  }

  display() {
    let temp = this.#front;
    while (true) {
      console.log(this.arr[temp]);
      temp = (temp + 1) % this.cap;
      if (!temp) break;
    }
  }
}

const queue = new CircularQueue(5);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.display();
