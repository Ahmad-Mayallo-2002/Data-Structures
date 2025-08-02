class LLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Dequeue {
  #front;
  #rear;
  constructor() {
    this.#front = null;
    this.#rear = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.size;
  }

  insertAtFront(el) {
    const newNode = new LLNode(el);
    if (this.isEmpty()) {
      this.#front = this.#rear = newNode;
    } else {
      let front = this.#front;
      this.#front.prev = newNode;
      this.#front = newNode;
      this.#front.next = front;
    }
    this.size++;
  }

  insertAtRear(el) {
    const newNode = new LLNode(el);
    if (this.isEmpty()) {
      this.#front = this.#rear = newNode;
    } else {
      let rear = this.#rear;
      this.#rear.next = newNode;
      this.#rear = newNode;
      this.#rear.prev = rear;
    }
    this.size++;
  }

  deletAtFront() {
    if (this.isEmpty()) {
      console.log("Dequeue is Underflow");
      return;
    }
    let front = this.#front;
    this.#front = this.#front.next;
    return front.data;
  }

  deletAtRear() {
    if (this.isEmpty()) {
      console.log("Dequeue is Underflow");
      return;
    }
    let rear = this.#rear;
    this.#rear.prev.next = null;
    return rear.data;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Dequeue is Underflow");
      return;
    }
    let curr = this.#front;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

const dequeue = new Dequeue();

dequeue.insertAtRear(1);
dequeue.insertAtRear(2);
dequeue.insertAtRear(3);

dequeue.display();
