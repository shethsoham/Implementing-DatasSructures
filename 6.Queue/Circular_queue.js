// Circular queue Data structures implementation

// Circular Queue

// The size of the queue is fixed and a single block of memory is used as if first element is connected to the last element

// Also referred to as circular buffer or ring buffer and follows the FIFO principle

// A circular queue will reuse the empty block created during the dequeue operations

// When working with queues of fixed maximum size, a circular queue is a great implementation choice.

// The circular Queue data structure supports 2 main operations

// 1) Enqueue, which adds an element to tail/rear of the collection
// 2) Dequeue, which removes an element from the head/front of the collection.

// ----------------------------------------------------------------------------------------------------------------------------------


// Circular Queue Usage 

// Clock 
// Streaming Data
// Buffer
// Traffic lights

//-----------------------------------------------------------------------------------------------------------------------------------

// Circular queue takes 1 parameter

class CircularQueue{
    constructor (capacity){
        this.item = new Array(capacity) /// to create a array of fixed size we used parameter capacity
        this.capacity = capacity
        this.currentLength =0;
        this.rear =-1
        this.front =-1  
    }

    isFull(){
        return this.currentLength === this.capacity
    }

    isEmpty(){
        return this.currentLength === 0
    }
}




















