'use strict';

function Stack() {
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this[this.length++] = value;
  console.log('in the push method:', this.length);
  return this;
}

Stack.prototype.pop = function() {
  if (this.length === 0) return;
  var result = this[--this.length];
  console.log('in the pop method:', result);
  delete this[this.length];
  return result;
}

let nums = new Stack();

console.log('push 10:', nums.push(10));
console.log('push 20:', nums.push(20));
console.log('push 30:', nums.push(30));

console.log('pop 30:', nums.pop());
console.log('pop 20:', nums.pop());
console.log('pop 10:', nums.pop());

console.log(nums);
