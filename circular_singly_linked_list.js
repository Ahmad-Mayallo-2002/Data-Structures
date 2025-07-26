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

function insertionAtEmptyList(value) {
  let newNode = new LLNode(value);
  newNode.next = newNode;
  return newNode;
}

traversal(first);
