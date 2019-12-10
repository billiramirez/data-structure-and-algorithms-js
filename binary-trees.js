// Binary trees are trees whose nodes can only have up to two children, hence,
// the word "binary." We'll use a function to create our binary node object.
//  A binary node receives a key as an argument and has a left and right property set to null.

function createBinaryNode(key) {
  return {
    key,
    left: null,
    right: null
  };
}

function createBinaryNode(key) {
  return {
    key,
    left: null,
    right: null,
    addLeft(leftKey) {
      const newLeft = createBinaryNode(leftKey);
      this.left = newLeft;
      return newLeft;
    },
    addRight(rightKey) {
      const newRight = createBinaryNode(rightKey);
      this.right = newRight;
      return newRight;
    }
  };
}

const TRAVERSALS = {
  IN_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSALS.IN_ORDER(node.left, visitFn);
      visitFn(node);
      TRAVERSALS.IN_ORDER(node.right, visitFn);
    }
  },
  PRE_ORDER: (node, visitFn) => {
    if (node !== null) {
      visitFn(node);
      TRAVERSALS.PRE_ORDER(node.left, visitFn);
      TRAVERSALS.PRE_ORDER(node.right, visitFn);
    }
  },
  POST_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSALS.POST_ORDER(node.left, visitFn);
      TRAVERSALS.POST_ORDER(node.right, visitFn);
      visitFn(node);
    }
  }
};

function createBinaryTree(rootKey) {
  const root = createBinaryNode(rootKey);

  return {
    root,
    print(orderType = "IN_ORDER") {
      let result = "";

      const visitFn = node => {
        result += result.length === 0 ? node.key : ` => ${node.key}`;
      };

      TRAVERSALS[orderType](this.root, visitFn);

      return result;
    }
  };
}

const tree = createBinaryTree("a");
const b = tree.root.addLeft("b");
const c = tree.root.addRight("c");
const d = b.addLeft("d");
const e = b.addRight("e");
const f = c.addLeft("f");
const g = c.addRight("g");
const h = d.addLeft("h");
const i = d.addRight("i");

console.log(tree.print("PRE_ORDER"));
