class TreeNode {
  value: number;
  left: TreeNode;
  right: TreeNode;
  parent: TreeNode;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class BinarySearchTree {
  root: TreeNode;
  constructor(value: number) {
    this.root = new TreeNode(value);
  }

  // O(h) time
  insertItem(
    insertableNodeValue: number,
    node = this.root,
    parent = this.root
  ) {
    if (!node) {
      node = new TreeNode(insertableNodeValue);
      node.parent = parent;
      if (parent.value < insertableNodeValue) {
        parent.right = node;
      } else {
        parent.left = node;
      }
      return;
    }
    if (insertableNodeValue < node.value)
      this.insertItem(insertableNodeValue, node.left, node);
    else this.insertItem(insertableNodeValue, node.right, node);
  }
  // O(h) -> h is the height of the tree
  searchTree(value: number, node = this.root): TreeNode {
    if (!node) return null;
    if (node.value === value) return node;
    if (value < node.value) return this.searchTree(value, node.left);
    else return this.searchTree(value, node.right);
  }

  //   O(h)
  findMinimum(node = this.root) {
    if (node === null) return null;
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  findMaximum(node = this.root) {
    if (node === null) return null;
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  traverseInOrder(node = this.root) {
    if (node !== null) {
      this.traverseInOrder(node.left);
      console.log(node.value);
      this.traverseInOrder(node.right);
    }
  }

  traversePreOrder(node = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.traverseInOrder(node.left);
      this.traverseInOrder(node.right);
    }
  }

  traversePostOrder(node = this.root) {
    if (node !== null) {
      this.traverseInOrder(node.left);
      this.traverseInOrder(node.right);
      console.log(node.value);
    }
  }

  traverseLevelOrder(node = this.root) {
    let stack: TreeNode[] = [];
    stack.push(this.root);
    while (stack.length) {
      const item = stack.shift();
      console.log(item.value);
      if (item.left) stack.push(item.left);
      if (item.right) stack.push(item.right);
    }
  }

  deleteNode(key: number) {
    this.root = this.deleteNodeRec(this.root, key);
  }

  deleteNodeRec(root: TreeNode, key: number) {
    if (!root) return root;

    if (key < root.value) root.left = this.deleteNodeRec(root.left, key);
    else if (key > root.value) root.right = this.deleteNodeRec(root.right, key);
    else {
      if (!root.left) {
        const temp: TreeNode = root.right;
        return temp;
      } else if (!root.right) {
        const temp: TreeNode = root.left;
        return temp;
      }

      const temp: TreeNode = this.findMinimum(root.right);
      root.value = temp.value;

      root.right = this.deleteNodeRec(root.right, temp.value);
    }

    return root;
  }
}

const bst = new BinarySearchTree(5);
bst.insertItem(50);
bst.insertItem(30);
bst.insertItem(20);
bst.insertItem(40);
bst.insertItem(70);
bst.insertItem(60);
bst.insertItem(80);

// console.log(bst.searchTree(4));
// console.log(bst.findMinimum());
console.log("YY");
bst.traverseInOrder();
// bst.traverseLevelOrder();
// bst.traversePreOrder();
// bst.traversePostOrder();
console.log("YY2");
bst.deleteNode(20);
bst.traverseInOrder();
console.log("YY3");
bst.deleteNode(30);
bst.traverseInOrder();

console.log("YY4");
bst.deleteNode(50);
bst.traverseInOrder();
