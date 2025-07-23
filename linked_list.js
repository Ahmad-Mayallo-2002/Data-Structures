class LLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const one = new LLNode(1);
const two = new LLNode(2);
const three = new LLNode(3);

one.next = two;
two.next = three;
three.next = null;

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

const newNode = insertAtTheEnd(4, one);

traversal(one);
