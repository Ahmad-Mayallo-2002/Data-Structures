class BTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // Depth First Search
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

  // Breadth First Search
  #recursion(node, level, res) {
    if (!node) return;

    // Add New Level If Needed
    if (res.length <= level) res.push([]);
    // Add Current Node's Data to Its Corresponding Level
    res[level].push(node.data);

    // Recurs for Left and Right Children
    this.#recursion(node.left, level + 1, res);
    this.#recursion(node.right, level + 1, res);
  }

  BFSRecursion(node) {
    const res = [];
    this.#recursion(node, 0, res);
    return res;
  }

  search(node, target) {
    if (!node) return false;
    if (node.data === target) return node;

    let searchLeft = this.search(node.left, target);
    if (searchLeft) return node;

    let searchRight = this.search(node.right, target);
    return searchRight;
  }

  update(node, target, newValue) {
    if (!this.search(node, target)) return;
    this.search(node, target).data = newValue;
  }

  insert(node, data) {
    // If Tree is Empty Create Root of Tree
    if (!node) {
      node = new BTree(data);
      return;
    }

    // Create a Queue to Traverse Tree Level By Level
    let q = [];
    q.push(node);

    while (q.length) {
      // Take First Element in Queue
      let curr = q.shift();

      // Check Left Child
      if (curr.left) {
        // If Left Child Exists => Add It to Queue
        q.push(curr.left);
      } else {
        // If Left Child doesn't Exist => Insert Here
        curr.left = new BTree(data);
        return node;
      }

      // Check Right Child
      if (curr.right) {
        // If Right Child Exists => Add It to Queue
        q.push(curr.right);
      } else {
        // If Right Child doesn't Exist => Insert Here
        curr.right = new BTree(data);
        return node;
      }
    }
  }

  // Function To Delete Deepest Node
  deleteDeepest(node, target) {
    let q = [];
    q.push(node);

    while (q.length) {
      let curr = q.shift();

      // If Current Node is the Deepest Delete It
      if (curr === target) {
        curr = null;
        return;
      }

      // Check The Left Child
      if (curr.left) {
        if (curr.left.data === target) {
          curr.left = null;
          return;
        } else {
          q.push(curr.left);
        }
      }

      // Check The Right Child
      if (curr.right) {
        if (curr.right.data === target) {
          curr.right = null;
          return;
        } else {
          q.push(curr.right);
        }
      }
    }
  }

  // Function To Delete The Node With The Given Key
}

const root = new BTree("a");

root.insert(root, "b");
root.insert(root, "c");
root.insert(root, "d");
root.insert(root, "e");
root.insert(root, "f");
root.insert(root, "g");

console.log(root.BFSRecursion(root));
