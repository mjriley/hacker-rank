const RED = 'red';
const BLACK = 'black';

class Tree {
    constructor(rootNode) {
        this.root = rootNode;
    }

    insert(node) {
        let currentNode = this.root;

        if (this.root === null) {
            this.root = node;
            return;
        }

        while (true) {
            if (currentNode.value > node.value) {
                if (currentNode.left === null) {
                    currentNode.setLeft(node);
                    return;
                }

                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    currentNode.setRight(node);
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    redBlackInsert(node) {
        this.insert(node);
        node.color = RED;

        let currentNode = node;
        while (currentNode !== this.root && currentNode.parent.color === RED) {
            // the parent of the parent must exist, because for that to happen, the tree must be only 2 levels deep:
            // 1 for the root, and 1 for the current node
            // but, because one of our invariants is that the root of the tree is always black,
            // were the tree only 2 levels deep, the parent of this node could not be red, and thus we wouldn't be in this loop
            if (currentNode.parent === currentNode.parent.parent.left) {
                const uncle = currentNode.parent.parent.right;
                if (uncle.color === RED) {
                    uncle.color = currentNode.parent.color = BLACK;
                    uncle.parent.color = RED;
                    currentNode = uncle.parent;
                } else {
                    if (currentNode === currentNode.parent.right) {
                        currentNode = currentNode.parent;
                        rotateLeft(this, currentNode);
                    }
                    currentNode.parent.color = BLACK;
                    currentNode.parent.parent.color = RED;
                    rotateRight(this, currentNode.parent.parent);
                }
            } else {
                // just the same as above, with the directions reversed
                const uncle = currentNode.parent.parent.left;
                if (uncle.color === RED) {
                    uncle.color = currentNode.parent.color = BLACK;
                    uncle.parent.color = RED;
                    currentNode = uncle.parent;
                } else {
                    if (currentNode === currentNode.parent.left) {
                        currentNode = currentNode.parent;
                        rotateRight(this, currentNode);
                    }
                    currentNode.parent.color = BLACK;
                    currentNode.parent.parent.color = RED;
                    rotateLeft(this, currentNode.parent.parent);
                }
            }
        }

        this.root.color = BLACK;
    }
}

function isLeftChild(node) {
    if (node.parent === null) {
        return false;
    }

    return node.parent.left === node;
}

class Node {
    constructor(value, color = RED, parent = null) {
        this.value = value;
        this.color = color;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    setLeft(node) {
        this.left = node;
        if (node !== null) {
            node.parent = this;
        }
    }

    setRight(node) {
        this.right = node;
        if (node !== null) {
            node.parent = this;
        }
    }
}

function treeDepth(nodeTree) {
    if (nodeTree === null) {
        return 0;
    }

    const leftDepth = treeDepth(nodeTree.left);
    const rightDepth = treeDepth(nodeTree.right);
    const childDepth = Math.max(leftDepth, rightDepth);

    return 1 + childDepth;
}

function treeToArray(nodeTree) {
    if (nodeTree === null) {
        return [];
    }

    const leftSide = treeToArray(nodeTree.left);
    const rightSide = treeToArray(nodeTree.right);

    return [...leftSide, nodeTree.value, ...rightSide];
}

function rotateLeft(tree, nodeToRotate) {
    // create a new node that holds the rightside of nodeToRotate's tree
    const rightSide = nodeToRotate.right;

    // make sure the node's parent attaches to the newly created node
    const parent = nodeToRotate.parent;
    if (parent === null) {
        // the new node becomes the root of the tree
        rightSide.parent = null;
        tree.root = rightSide;
    } else if (parent.left !== null && parent.left === nodeToRotate) {
        parent.setLeft(rightSide);
    } else {
        parent.setRight(rightSide);
    }

    nodeToRotate.setRight(rightSide.left);

    rightSide.setLeft(nodeToRotate);
}

function rotateRight(tree, nodeToRotate) {
    const leftSide = nodeToRotate.left;

    const parent = nodeToRotate.parent;
    if (parent === null) {
        leftSide.parent = null;
        tree.root = leftSide;
    } else if (parent.left !== null && parent.left === nodeToRotate) {
        parent.setLeft(leftSide);
    } else {
        parent.setRight(leftSide);
    }

    nodeToRotate.setLeft(leftSide.right);
    leftSide.setRight(nodeToRotate);
}

function isValidTree(rootNode) {
    return rootNode.color === BLACK;
}

module.exports = {
    RED,
    BLACK,
    treeToArray,
    Tree,
    Node,
    rotateLeft,
    rotateRight,
    treeDepth,
    isValidTree
};
