class LLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  #front;
  #rear;
  constructor() {
    this.#front = null;
    this.#rear = null;
  }

  isEmpty() {
    return !this.#front;
  }

  enqueue(x) {
    const newNode = new LLNode(x);
    if (this.isEmpty()) {
      this.#front = newNode;
      this.#rear = newNode;
    } else {
      this.#rear.next = newNode;
      this.#rear = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Underflow");
      return;
    }
    let front = this.#front;
    this.#front = this.#front.next;
    return front;
  }

  display() {
    let temp = this.#front;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();

queue.display();
