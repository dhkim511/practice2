class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  size() {
    return this.count;
  }
  push(value) {
    this.storage[this.count++] = value;
  }
  pop() {
    if (this.count === 0) return undefined;
    const result = this.storage[--this.count];
    delete this.storage[this.count];
    return result;
  }
}

const stackInstance = new Stack();

stackInstance.push("A");
stackInstance.push("B");
console.log(stackInstance.pop());
console.log(stackInstance.size());
