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

  // TODO Deletion
}

const bst = new BinarySearchTree(5);
bst.insertItem(4);
bst.insertItem(6);
bst.insertItem(10);
bst.insertItem(12);
bst.insertItem(2);
bst.insertItem(1);
bst.insertItem(32);
bst.insertItem(26);
// console.log(bst.searchTree(4));
// console.log(bst.findMinimum());
bst.traverseInOrder();
// bst.traversePreOrder();
// bst.traversePostOrder();
