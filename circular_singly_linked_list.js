class LLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function traversal(head) {
  let curr = head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
    if (curr === head) break;
  }
}

function lengthLL(head) {
  if (!head) return 0;
  let length = 1;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
    if (curr.next === head) break;
  }
  return length;
}

function insertionAtEmptyList(value) {
  let newNode = new LLNode(value);
  newNode.next = newNode;
  return newNode;
}

function insertionAtEnd(head, value) {
  let newNode = new LLNode(value);
  let curr = head;
  while (curr) {
    curr = curr.next;
    if (curr.next === head) break;
  }
  curr.next = newNode;
  newNode.next = head;
}

function insertionAtBeginning(head, value) {
  let newNode = new LLNode(value);
  let last = head;
  while (last) {
    last = last.next;
    if (last.next === head) break;
  }
  newNode.next = head;
  last.next = newNode;
  return newNode;
}

function insertionAtPosition(head, position, value) {
  if (!head) return insertionAtEmptyList(1);
  let length = lengthLL(head);
  if (position === 1) return insertionAtBeginning(head, value);
  if (position > length) {
    insertionAtEnd(head, value);
    return;
  }
  let index = 1;
  let newNode = new LLNode(value);
  while (head) {
    index++;
    head = head.next;
    if (position - 1 === index) break;
  }
  let prevNext = head.next;
  head.next = newNode;
  newNode.next = prevNext;
}

function update(head, oldValue, newValue) {
  if (!head) return null;
  let curr = head;
  while (curr) {
    curr = curr.next;
    if (curr.data === oldValue) {
      curr.data = newValue;
      break;
    }
    if (curr.next === head) {
      console.log("Value is not Found.");
      break;
    }
  }
}

let head = insertionAtEmptyList(1);

insertionAtEnd(head, 2);
insertionAtEnd(head, 3);
insertionAtEnd(head, 4);
insertionAtEnd(head, 5);
insertionAtEnd(head, 6);
insertionAtEnd(head, 7);



traversal(head);
