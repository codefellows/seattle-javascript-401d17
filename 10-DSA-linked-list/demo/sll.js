'use strict';

function Node(val) {
  this.next = null;
  this.val = val;
}

function SinglyLinkedList() {
  this.head = null;
}

SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

  if (!this.head) {
    this.head = node;
    return this;
  }

  node.next = this.head;
  this.head = node;
  return this;
}

SinglyLinkedList.prototype.append = function(val) {
  let node = new Node(val);
  let last = null;

  if (!this.head) {
    this.head = node;
    return this;
  }

  _setLastNode(this.head);
  last.next = node;
  return this;

  function _setLastNode(node) {
    if (!node) return;
    last = node;
    _setLastNode(node.next);
  }
}


const sll = new SinglyLinkedList();

sll.prepend(3);
sll.prepend(2);
sll.prepend(1);

sll.append(4);
sll.append(5);
sll.append(6);
sll.append(7);

console.log('new linked list:', sll);
