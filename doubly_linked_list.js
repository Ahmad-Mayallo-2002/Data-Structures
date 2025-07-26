class DLLNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

let head = new DLLNode(1);
let two = new DLLNode(2);
let three = new DLLNode(3);
let four = new DLLNode(4);

// Head Prev Next
head.next = two;

// Two Prev Next
two.next = three;
two.prev = head;

// Three Prev Next
three.next = four;
three.prev = two;

// Four Prev Next
four.prev = three;

function traversalForward(head) {
  while (head) {
    console.log(head.data);
    head = head.next;
  }
}

function traversalBackward(node) {
  while (node) {
    console.log(node.data);
    node = node.prev;
  }
}

function lengthDLL(head) {
  let length = 0;
  while (head) {
    length++;
    head = head.next;
  }
  return length;
}

function insertionAtBeginning(head, value) {
  let newNode = new DLLNode(value);
  if (head) {
    head.prev = newNode;
    newNode.next = head;
  }
  return newNode;
}

function insertionAtEnd(head, value) {
  let newNode = new DLLNode(value);
  if (head) {
    while (head.next) head = head.next;
    head.next = newNode;
    newNode.prev = head;
  }
}

function insertionAtPosition(head, value, position) {
  let newNode = new DLLNode(value);
  if (!head) {
    head = newNode;
    return;
  }
  let length = lengthDLL(head);
  if (position >= length) {
    insertionAtEnd(head, value);
    return;
  } else {
    let index = 1;
    while (head) {
      if (position - 1 === index) break;
      index++;
      head = head.next;
    }
    let nextNode = head.next;
    head.next = newNode;
    newNode.prev = head;
    newNode.next = nextNode;
  }
}

function update(head, oldValue, newValue) {
  while (head) {
    if (head.data === oldValue) {
      head.data = newValue;
      break;
    }
    head = head.next;
  }
}

function deletionAtBeginning(head) {
  if (!head) return null;
  return head.next;
}

function deletionAtEnd(head) {
  if (!head) return null;
  while (head.next.next) head = head.next;
  head.next = null;
}

function deletionAtPosition(head, position) {
  if (!head) return null;
  if (position === 1) return head.next;
  const length = lengthDLL(head);
  if (position >= length) {
    deletionAtEnd(head);
    return;
  }
  let index = 1;
  while (head) {
    if (position - 1 === index) break;
    index++;
    head = head.next;
  }
  let nextNode = head.next;
  head.next = nextNode.next;
  nextNode.next.prev = head;
}

function reverse(head) {
  if (!head) return null;
  let next = null;
  let prev = null;
  let curr = head;
  while(curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

head = reverse(head);

traversalForward(head);
