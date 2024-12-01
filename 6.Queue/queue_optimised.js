// ----------------------------------------------------------------------------------------------------------------------------------------

// Queue Implemented optimization
// we implement queue using array. 
// But dequeue operation passed O(n)-linear time complexity beacuse we used shift method.

// Let us use object for queue and dequeue ao that we would get constant time complexity O(1).

// --------------------------------------------------------------------------------------------------------------------------------------


class Queue{
    constructor(){
        this.items={}
        this.rear =0
        this.front =0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear- this.front === 0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear- this.front
    }

    print(){
        console.log(this.items)
    }
}


const queue = new Queue

console.log(queue.isEmpty())

queue.enqueue(3)
queue.enqueue(30)
queue.enqueue(300)

console.log(queue.size())
queue.print()

console.log(queue.dequeue())
queue.peek()

queue.print()

