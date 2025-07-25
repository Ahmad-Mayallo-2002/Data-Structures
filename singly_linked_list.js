class LLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new LLNode(1);

head.next = new LLNode(2);
head.next.next = new LLNode(3);
head.next.next.next = new LLNode(4);

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

function deletionAtBeginning(head) {
  if (head === null) return null;
  return head.next;
}

function deletionAtEnd(head) {
  if (!head) return null;
  if (!head.next) {
    head = null;
    return null;
  }
  let second_last = head;
  while (second_last.next.next) second_last = second_last.next;
  second_last.next = null;
  return head;
}

function deletionAtSpecificPosition(head, position) {
  const length = lengthLinkedList(head);
  if (!head || length < position) return null;
  if (position === 1) {
    head = head.next;
    return head;
  }
  let index = 1;
  while (head) {
    if (position - 1 === index) break;
    index++;
    head = head.next;
  }
  let deletedNode = head.next;
  head.next = deletedNode.next;
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

function reverse(head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

head = reverse(head);

traversal(head);
