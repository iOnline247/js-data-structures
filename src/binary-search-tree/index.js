class BSTNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class BST {
  root = null;

  insert(node, currentNode = this.root) {
    if (currentNode === null) {
      this.root = node;

      return;
    }

    const isKeyGreater = node.key > currentNode.key;

    if (isKeyGreater) {
      if (!currentNode.right) {
        currentNode.right = node;
      } else {
        this.insert(node, currentNode.right);
      }
    }

    if (!isKeyGreater) {
      if (!currentNode.left) {
        currentNode.left = node;
      } else {
        this.insert(node, currentNode.left);
      }
    }
  }

  print(node = this.root) {
    if (!node) {
      return;
    }

    console.log(node.key);

    this.print(node.right || null);
    this.print(node.left || null);
  }

  search(key, node = this.root) {
    const hasFoundNode = node === null || node.key === key;
    if (hasFoundNode) {
      return node;
    }

    if (key > node.key) {
      return this.search(key, node.right);
    }

    return this.search(key, node.left);
  }
}

function main() {
  const bst = new BST();

  console.log("start");
  //   bst.print();

  [50, 20, 4, 60, 61, 1, 2].forEach(key =>
    bst.insert(new BSTNode(key, { key }))
  );

  bst.print();
  console.log("end");
}
