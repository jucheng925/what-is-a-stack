class Stack {
  constructor() {
    this.stack = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {
    if (this.stack.length > 10) {
      throw new Error("Stack is full");
    } else {
      this.stack.push(item)
    }

  }

  // remove item from top of stack and return it
  pop() {
    return this.stack.pop()

  }

  // return item at top of stack without removing it
  peek() {

  }

  // return true if stack is empty, otherwise false
  isEmpty() {

  }

  // return true if stack is full, otherwise false
  isFull() {

  }

  // return number of items in stack
  size() {

  }

  // return -1 if item not in stack, otherwise integer representing 
  // how far it is from the top
  search(target) {

  }

  // print contents of stack: do not return the stack itself!
  print() {
    
  }
}

if (require.main === module) {
  // add your own tests in here
  const stack = new Stack()
  console.log("testing stack.push..expecting.. stack =[1]")
  stack.push(1)
  stack.push(2)
  console.log(stack)
  stack.push(3)
  stack.push(4)
  stack.push(5)
  stack.push(6)
  stack.push(7)
  stack.push(8)
  stack.push(9)
  stack.push(10)
  console.log(stack)
  stack.push(11)
  console.log(stack)

  console.log("")
  console.log("testing pop")
  console.log(stack)
  console.log(stack.pop())
  console.log(stack)

}

module.exports = Stack;
