class LLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return !this.head;
  }

  top() {
    if (!this.head) {
      console.log("Stack is Underflow");
      return;
    }
    return this.head.data;
  }

  push(el) {
    const newNode = new LLNode(el);
    newNode.next = this.head;
    this.head = newNode;
  }

  display() {
    while (this.head) {
      console.log(this.head.data);
      this.head = this.head.next;
    }
  }

  pop() {
    const currentHead = this.head;
    this.head = this.head.next;
    return currentHead;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.pop();

console.log(stack);
