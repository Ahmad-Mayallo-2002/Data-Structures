class LLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function traversal(last) {
  if (!last) return null;
  let head = last.next;
  while (head) {
    console.log(head.data);
    head = head.next;
    if (head === last.next) break;
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
  return newNode;
}

function insertionAtBeginning(head, value) {
  let newNode = new LLNode(value);
  if (!head) {
    newNode.next = newNode;
    return newNode;
  }
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

function deletionAtBeginning(last) {
  if (!last) return null;
  let head = last.next;
  head === last ? (last = null) : (last.next = head.next);
  return last;
}

function deletionAtEnd(head) {
  if (!head || !head.next) return null;
  let curr = head;
  while (curr) {
    if (curr.next.next === head) break;
    curr = curr.next;
  }
  curr.next = head;
  return head;
}

function deletionAtPosition(last, position) {
  if (!last) return null;
  if (last === last.next) {
    last = null;
    return;
  }
  const length = lengthLL(last);
  if (position === 1) {
    last = deletionAtBeginning(last);
    return;
  }
  let head = last.next;
  if (position > length) {
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
}

function reverse(head) {
  let prev = null;
  let curr = head;
  let next = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

let head = insertionAtEmptyList(1);

insertionAtEnd(head, 2);
insertionAtEnd(head, 3);
insertionAtEnd(head, 4);
insertionAtEnd(head, 5);
let last = insertionAtEnd(head, 6);

last = reverse(head);
