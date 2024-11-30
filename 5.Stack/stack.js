// Stack implementation 

class Stack {
    constructor() {
        this.items = [];
        this.count = 0
    }
    //Add elements to top of the stack 
    push(element) {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }

    // return and remove top element in stack 
    // return undefined if stack is empty 
    pop() {
        if (this.count === 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // Check top elements in stack 

    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    // If stack is empty

    isEmpty() {
        console.log(this.count === 0 ? 'Stack is empty' : 'Stack is not empty')
        return this.count === 0

    }

    // Check size
    size() {
        console.log(`${this.count} Elements in stack`)
        return this.count
    }

    //Print elements in stack
    print() {
        let str = ''
        for (let i = 0; i < this.count; i++) {
            str = str + this.items[i] + ' '
        }
        return str
    }

    // clear Stack 
    clear() {
        this.items = [];
        this.count = 0;
        console.log('Stack cleared')
        return this.items
    }
}


const stack_1 = new Stack()
stack_1.isEmpty()

console.log(stack_1.push(100))
stack_1.push(200)
stack_1.push(300)

console.log(stack_1.print())

stack_1.peek()

stack_1.pop()
console.log(stack_1.pop())

console.log(stack_1.clear())

stack_1.isEmpty()
stack_1.size()


console.log(stack_1.print())


