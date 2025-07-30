class Stack {
  #top;
  constructor(size) {
    this.stack = new Array(size);
    this.#top = -1;
    this.size = size;
  }

  push(el) {
    if (this.#top < this.size - 1) {
      this.stack[++this.#top] = el;
    } else {
      console.log("Stack is Overflow");
    }
  }

  pop() {
    if (this.#top > -1) {
      const popped = this.stack[this.#top];
      delete this.stack[this.#top--];
      return popped;
    }
    console.log("Stack is Underflow");
  }

  isEmpty() {
    return this.#top === -1;
  }

  isFull() {
    return this.#top + 1 === this.size;
  }

  print() {
    for (let i = 0; i <= this.#top; i++) console.log(this.stack[i]);
  }

  top() {
    if (this.#top === -1) return "Stack is Underflow";
    return this.stack[this.#top];
  }
}

const stack = new Stack(2);
stack.push(1);
stack.push(2);

console.log(stack.stack);
