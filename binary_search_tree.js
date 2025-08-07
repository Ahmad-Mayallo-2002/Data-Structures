class BST {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(node, value) {
    const temp = new BST(value);

    if (!node) return temp;

    let parent = null;
    let curr = node;

    while (curr) {
      parent = curr;
      if (curr.data > value) curr = curr.left;
      else if (curr.data < value) curr = curr.right;
      else return node;
    }

    parent.data > value ? (parent.left = temp) : (parent.right = temp);

    return node;
  }

  delete(node, target) {
    if (!node) return null;

    if (node.data > target) node.left = this.delete(node.left, target);
    else if (node.data < target) node.right = this.delete(node.right, target);
    else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let succ = this.#getSuccessor(node);
      node.data = succ.data;
      node.right = this.delete(node.right, succ.data);
    }
    return node;
  }

  search(node, target) {
    if (!node) return false;
    if (node.data === target) return node.data;
    if (node.data > target) return this.search(node.left, target);
    if (node.data < target) return this.search(node.right, target);
  }

  inorder(node) {
    if (!node) return null;
    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
  }

  minimum(node) {
    if (!node) return null;
    while (node.left) node = node.left;
    return node;
  }

  maximum(node) {
    if (!node) return null;
    while (node.right) node = node.right;
    return node;
  }

  #getSuccessor(node) {
    node = node.right;
    while (node && node.left) node = node.left;
    return node;
  }
}

const bst = new BST(5);

bst.insert(bst, 4);
bst.insert(bst, 6);
bst.insert(bst, 7);
bst.insert(bst, 3);
bst.insert(bst, 1);
bst.insert(bst, 0);
bst.insert(bst, -1);

console.log(bst.minimum(bst));
