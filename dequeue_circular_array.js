class Dequeue {
  #front;
  #rear;
  #arr;
  constructor(cap) {
    this.#front = 0;
    this.#rear = 0;
    this.size = 0;
    this.cap = cap;
    this.#arr = new Array(this.cap);
  }

  isEmpty() {
    return !this.size;
  }

  isFull() {
    return this.size === this.cap;
  }

  getFront() {
    if (this.isEmpty()) {
      console.log("Queue is Underflow");
      return;
    }
    return this.#arr[this.#front];
  }

  getRear() {
    if (this.isEmpty()) {
      console.log("Queue is Underflow");
      return;
    }
    return this.#arr[this.#rear];
  }

  insertAtFront(el) {
    if (this.isFull()) {
      console.log("Queue is Overflow");
      return;
    }
    this.#front = (this.#front - 1 + this.cap) % this.cap;
    if (this.isEmpty()) this.#rear = (this.#front + this.size) % this.cap;
    this.#arr[this.#front] = el;
    this.size++;
  }

  insertAtRear(el) {
    if (this.isFull()) {
      console.log("Queue is Overflow");
      return;
    }
    this.#rear = (this.#front + this.size) % this.cap;
    this.#arr[this.#rear] = el;
    this.size++;
  }

  deleteFromFront() {
    if (this.isEmpty()) {
      console.log("Queue is Underflow");
      return;
    }
    let temp = this.#arr[this.#front];
    delete this.#arr[this.#front];
    this.#front = (this.#front + 1) % this.cap;
    this.size--;
    return temp;
  }

  deleteFromRear() {
    if (this.isEmpty()) {
      console.log("Queue is Underflow");
      return;
    }
    let temp = this.#arr[this.#rear];
    delete this.#arr[this.#rear];
    this.#rear = (this.#front + this.size - 1) % this.cap;
    this.size--;
    return temp;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is Underflow");
      return;
    }
    console.log(this.#arr);
  }
}

const queue = new Dequeue(5);

queue.insertAtFront(1);
queue.insertAtFront(2);
queue.insertAtFront(3);
queue.insertAtFront(4);
queue.insertAtFront(5);

console.log(queue.deleteFromRear());
queue.display();
