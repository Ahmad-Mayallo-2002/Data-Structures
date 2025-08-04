class BTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  preorder(node) {
    if (!node) return;
    console.log(node.data);
    this.preorder(node.left);
    this.preorder(node.right);
  }

  inorder(node) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
  }

  postorder(node) {
    if (!node) return;
    this.postorder(node.left);
    this.postorder(node.right);
    console.log(node.data);
  }

  search(node, target) {
    if (!node) return false;
    if (node.data === target) return target;

    let searchLeft = this.search(node.left, target);
    if (searchLeft) return target;

    let searchRight = this.search(node.right, target);
    return searchRight;
  }
}

const root = new BTree("a");

root.left = new BTree("b");
root.right = new BTree("c");

root.left.left = new BTree("d");
root.left.right = new BTree("e");

root.right.left = new BTree("f");
root.right.right = new BTree("g");

console.log(root.search(root, "g"));
