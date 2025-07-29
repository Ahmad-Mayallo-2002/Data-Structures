class CDLLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

let head = new CDLLNode(1);
let second = new CDLLNode(2);
let third = new CDLLNode(3);
let last = new CDLLNode(4);

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
  let newNode = new CDLLNode(value);
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
  return last;
}

function insertionAtEnd(last, value) {
  let newNode = new CDLLNode(value);
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

function insertionAtPosition(last, position, value) {
  let newNode = new CDLLNode(value);
  if (!last) {
    newNode.next = newNode;
    newNode.prev = newNode;
    return newNode;
  }
  const length = lengthDLL(last);
  if (position === 1) return insertionAtBeginning(last, value);
  if (position > length) return insertionAtEnd(last, value);
  let index = 1;
  let head = last.next;
  while (head) {
    if (position === index) break;
    index++;
    head = head.next;
  }
  let curr = head;
  curr.prev.next = newNode;
  newNode.prev = curr.prev;

  newNode.next = curr;
  curr.prev = newNode;
  return last;
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

function deletionListOneNode(last) {
  if (!last) return null;
  if (last.next === last) {
    last = null;
    return null;
  }
}

function deletionAtBeginning(last) {
  deletionListOneNode(last);
  let head = last.next;
  head.next.prev = last;
  last.next = head.next;
}

function deletionAtEnd(last) {
  deletionListOneNode(last);
  let head = last.next;
  let prevLast = last.prev;
  head.prev = prevLast;
  prevLast.next = head;
}

function deletionAtPosition(last, position) {
  deletionListOneNode(last);
  const length = lengthDLL(last);
  if (position === 1) {
    deletionAtBeginning(last);
    return;
  }
  if (position > length) {
    deletionAtEnd(last);
    return;
  }
  let index = 1;
  let head = last.next;
  while (head) {
    if (position === index) break;
    head = head.next;
    index++;
  }
  head.prev.next = head.next;
  head.next.prev = head.prev;
}


// let last = insertionAtEnd(null, 1);
// last = insertionAtEnd(last, 2);
// last = insertionAtEnd(last, 3);
// last = insertionAtEnd(last, 4);
// last = insertionAtEnd(last, 5);
