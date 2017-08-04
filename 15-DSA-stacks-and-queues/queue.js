'use strict';

function Queue() {
  this.next = null;
  this.length = 0;
}

Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  if (!this.next) this.next = 0;
  this.length++;
}

var nums = new Queue();

nums.enqueue('first');
nums.enqueue('second');
nums.enqueue('third');

console.log(nums);
