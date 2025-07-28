class DLLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

let head = new DLLNode(1);
let second = new DLLNode(2);
let third = new DLLNode(3);
let last = new DLLNode(4);

head.next = second;
head.prev = last;

second.next = third;
second.prev = head;

third.next = last;
third.prev = second;

last.next = head;
last.prev = third;

function traversal(last) {
  let head = last.next;
  while (head) {
    console.log(head.data);
    head = head.next;
    if (last.next === head) break;
  }
}

function lengthDLL(head) {
  if (!head) return 0;
  let length = 1;
  let curr = head;
  while (curr) {
    if (curr.next === head) break;
    curr = curr.next;
    length++;
  }
  return length;
}

function insertionAtBeginning(last, value) {
  let newNode = new DLLNode(value);
  if (!last) {
    newNode.next = newNode;
    newNode.prev = newNode;
    return newNode;
  }
  let head = last.next;

  last.next = newNode;

  newNode.prev = last;
  newNode.next = head;

  head.prev = newNode;
}

function insertionAtEnd(last, value) {
  let newNode = new DLLNode(value);
  if (!last) {
    newNode.next = newNode;
    newNode.prev = newNode;
    return newNode;
  }
  let head = last.next;

  newNode.next = head;
  head.prev = newNode;

  last.next = newNode;
  newNode.prev = last;
  return newNode;
}

function update(last, oldValue, newValue) {
  if (!last) return null;
  let head = last.next;
  while (head) {
    if (head.data === oldValue) {
      head.data = newValue;
      break;
    }
    head = head.next;
    if (head === last.next) {
      console.log("Value is not Found");
      break;
    }
  }
}

let node = insertionAtEnd(null, 1);
node = insertionAtEnd(node, 2);
node = insertionAtEnd(node, 3);
node = insertionAtEnd(node, 4);
node = insertionAtEnd(node, 5);
node = insertionAtEnd(node, 6);
node = insertionAtEnd(node, 7);
node = insertionAtEnd(node, 8);
node = insertionAtEnd(node, 9);
