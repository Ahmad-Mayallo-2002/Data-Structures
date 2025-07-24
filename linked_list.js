class LLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const one = new LLNode(1);
const two = new LLNode(2);
const three = new LLNode(3);
const four = new LLNode(4);

one.next = two;
two.next = three;
three.next = four;
four.next = null;

function traversal(head) {
  while (head !== null) {
    console.log(head.data);
    head = head.next;
  }
}

function searchNode(value, head) {
  while (head !== null) {
    if (head.data === value) return value;
    head = head.next;
  }
  return false;
}

function lengthLinkedList(head) {
  let length = 0;
  while (head !== null) {
    length++;
    head = head.next;
  }
  return length;
}

function insertAtTheBeginning(value, head) {
  const newHead = new LLNode(value);
  newHead.next = head;
  return newHead;
}

function insertAtTheEnd(value, head) {
  const newNode = new LLNode(value);
  if (!lengthLinkedList(head)) {
    head = newNode;
  } else {
    while (head.next !== null) head = head.next;
    head.next = newNode;
  }
  return newNode;
}

function insertAtSpecificPosition(value, position, head) {
  const length = lengthLinkedList(one);
  const newNode = new LLNode(value);
  if (position === 1) {
    newNode.next = head;
    return newNode;
  }
  if (position > length) {
    while (head.next !== null) head = head.next;
    head.next = newNode;
    return;
  }
  if (position < length) {
    let index = 1;
    while (head !== null) {
      if (position - 1 === index) break;
      index++;
      head = head.next;
    }
    let nextNode = head.next;
    head.next = newNode;
    newNode.next = nextNode;
    return;
  }
}