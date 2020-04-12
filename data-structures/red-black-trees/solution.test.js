'use strict';

const {
    treeToArray,
    Node,
    Tree,
    rotateLeft,
    rotateRight,
    treeDepth,
    isValidTree,
    RED,
    BLACK
} = require('./solution');

describe('treeToArray', () => {
    test('it handles an empty tree', () => {
        expect(treeToArray(null)).toEqual([]);
    });

    test('it handles a single node', () => {
        const node = new Node(7);
        expect(treeToArray(node)).toEqual([7]);
    });

    test('it handles one level of children', () => {
        const parent = new Node(7);
        const left = new Node(5);
        const right = new Node(3);
        parent.setLeft(left);
        parent.setRight(right);

        expect(treeToArray(parent)).toEqual([5, 7, 3]);
    });

    test('it handles multiple levels of children', () => {
        const left = new Node(5);
        const leftleft = new Node(1);
        const leftright = new Node(2);
        left.setLeft(leftleft);
        left.setRight(leftright);

        const right = new Node(3);
        const rightleft = new Node(4);
        const rightright = new Node(6);
        right.setLeft(rightleft);
        right.setRight(rightright);

        const parent = new Node(10);
        parent.setLeft(left);
        parent.setRight(right);

        expect(treeToArray(parent)).toEqual([1, 5, 2, 10, 4, 3, 6]);
    });
});

describe('rotateLeft', () => {
    const left = new Node(5);

    const right = new Node(3);
    const rightleft = new Node(4);
    const rightright = new Node(6);
    right.setLeft(rightleft);
    right.setRight(rightright);

    const parent = new Node(10);
    parent.setLeft(left);
    parent.setRight(right);

    const tree = new Tree(parent);

    test('it maintains the same order', () => {
        rotateLeft(tree, parent);

        expect(treeToArray(tree.root)).toEqual([5, 10, 4, 3, 6]);
        expect(tree.root.value).toBe(3);
    });
});

describe('rotateRight', () => {
    const left = new Node(5);
    const leftleft = new Node(4);
    const leftright = new Node(6);
    left.setLeft(leftleft);
    left.setRight(leftright);

    const right = new Node(8);

    const parent = new Node(10);
    parent.setLeft(left);
    parent.setRight(right);

    const tree = new Tree(parent);

    test('it maintains the same order', () => {
        rotateRight(tree, parent);

        expect(treeToArray(tree.root)).toEqual([4, 5, 6, 10, 8]);
        expect(tree.root.value).toBe(5);
    });
});

describe('treeDepth', () => {
    test('it returns 0 for an empty tree', () => {
        expect(treeDepth(null)).toBe(0);
    });

    test('it returns 1 for a single node', () => {
        expect(treeDepth(new Node(5))).toBe(1);
    });

    test('it handles uneven children', () => {
        const left = new Node(5);
        const right = new Node(7);
        const rightleft = new Node(1);
        right.setLeft(rightleft);
        const parent = new Node(10);
        parent.setLeft(left);
        parent.setRight(right);

        expect(treeDepth(parent)).toEqual(3);
    });
});

describe('treeInsert', () => {
    test('it can handle inserting on an empty tree', () => {
        const tree = new Tree(null);
        const node = new Node(7);
        tree.insert(node);
        expect(treeToArray(tree.root)).toEqual([7]);
    });

    test('it maintains a sorted tree', () => {
        const left = new Node(3);

        const right = new Node(7);
        const rightleft = new Node(5);
        const rightright = new Node(10);
        right.setLeft(rightleft);
        right.setRight(rightright);

        const root = new Node(4);
        root.setLeft(left);
        root.setRight(right);

        const tree = new Tree(root);
        tree.insert(new Node(6));

        expect(treeToArray(tree.root)).toEqual([3, 4, 5, 6, 7, 10]);
    });
});

describe('isValidTree', () => {
    test('it rejects trees where the root node is not black', () => {
        const root = new Node(7);
        root.color = RED;
        expect(isValidTree(root)).toBe(false);
    });

    test('it rejects trees where paths down the tree dont have the same number of black nodes', () => {
        const root = new Node(5, BLACK);
        const left = new Node(7, RED);
        const right = new Node(6, BLACK);
        root.setLeft(left);
        root.setRight(right);

        expect(isValidTree(root)).toBe(false);
    });
});
