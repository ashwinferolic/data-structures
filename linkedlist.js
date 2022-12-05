class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push
  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  // pop
  pop() {
    if (!this.head || !this.tail) return null;
    let curr = this.head;
    let newTail = curr;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return curr;
    }

    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return curr;
  }

  // shift
  shift() {
    if (!this.length) return null;
    if (this.length === 1) this.tail = null;
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  // unshift
  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.push(val);
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  // get
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let curr = this.head;
    while (counter < idx) {
      curr = curr.next;
      counter++;
    }
    return curr;
  }

  // set
  set(idx, val) {
    let foundNode = this.get(idx);
    if (!foundNode) return false;
    foundNode.val = val;
    return foundNode;
  }

  // insert
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return null;
    let node;

    if (idx === 0) {
      node = this.unshift(val);
      return node;
    }

    if (idx === this.length) {
      node = this.push(val);
      return node;
    }

    // creating a new node
    let newNode = new Node(val);
    let prev = this.get(idx - 1);
    let curr = prev.next;

    prev.next = newNode;
    newNode.next = curr;
    this.length++;
    return newNode;
  }

  // remove
  remove(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let prev = this.get(idx - 1);
    let nodeToRemove = prev.next;
    prev.next = nodeToRemove.next;
    nodeToRemove.next = null;
    this.length--;
    return nodeToRemove;
  }

  // traverse
  traverse() {
    let curr = this.head;
    let arr = [];
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    let next = null;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    let oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;

    return this;
  }
}

let list = new SLL();
list.push(11);
list.push(22);
list.push(33);
list.push(44);
list.push(55);
