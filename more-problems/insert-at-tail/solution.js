'use strict';

const insertNodeAtTail = (head, data) => {
    const newNode = createNodeWithValue(data);
    if (head === null) {
        return newNode;
    }

    let node = head;
    while (node.next !== null) {
        node = node.next;
    }

    node.next = newNode;

    return head;
};

const createNodeWithValue = (value) => ({ data: value, next: null });

const listToArray = (list) => {
    const result = [];
    let node = list;
    while (node !== null) {
        result.push(node.data);
        node = node.next;
    }

    return result;
};

const arrayToList = (array) => {
    const head = createNodeWithValue(array[0]);
    let node = head;
    for (let i = 1; i < array.length; i++) {
        const newNode = createNodeWithValue(array[i]);
        node.next = newNode;
        node = newNode;
    }
    return head;
};

module.exports = {
    insertNodeAtTail,
    listToArray,
    arrayToList,
};
