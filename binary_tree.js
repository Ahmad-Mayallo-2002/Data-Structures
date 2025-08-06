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
    let q = [node];

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
  #deleteDeepest(node, dNode) {
    let q = [node];

    while (q.length) {
      let curr = q.shift();

      // If Current Node is the Deepest Delete It
      if (curr === dNode) {
        curr = null;
        return;
      }

      // Check The Left Child
      if (curr.left) {
        if (curr.left === dNode) {
          curr.left = null;
          return;
        } else {
          q.push(curr.left);
        }
      }

      // Check The Right Child
      if (curr.right) {
        if (curr.right === dNode) {
          curr.right = null;
          return;
        } else {
          q.push(curr.right);
        }
      }
    }
  }

  // Function to Delete The Node With The Given Key
  deletion(node, key) {
    if (!node) return null;

    // If in Tree One Node Only
    if (!node.left && !node.right) {
      if (node.data === key) return null;
      else return node;
    }

    let q = [];
    q.push(node);

    let keyNode = null;
    let curr = null;

    while (q.length) {
      curr = q.shift();

      // If Current Node is The Key Node
      if (curr.data === key) keyNode = curr;

      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }

    // If The Key Node is Found, Replace Its Data With The Deepest Node's Data
    if (keyNode) {
      // Store The Deepest Node's Data
      let x = curr.data;

      // Replace The Key Node's Data With The Deepest Node's Data
      keyNode.data = x;

      // Delete The Deepest Node
      this.#deleteDeepest(node, curr);
    }

    return node;
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

root.deletion(root, "c");

console.log(root.BFSRecursion(root));
