// To create a new set we use set constructor (keyword)

const set_1 = new Set([1,2,3])

//using for op loop to iterate oer the elements in a set

for(const item of set_1){
    console.log(item)
}

// to add new value we use add method

set_1.add(4)
console.log(set_1)
// if we try adding the duplicate value then we see that set ignores it

set_1.add(4)
console.log(set_1)

// .has : to check if that particular element exist in an set or not

console.log(set_1.has(3))

// to delete the value form set we use delete method

set_1.delete(2)
console.log(set_1)

// set.size() property 


console.log(set_1.size)

// clearing entire set

set_1.clear()
console.log(set_1)