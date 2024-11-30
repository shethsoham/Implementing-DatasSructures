//To create a new map we use Map constructor.

const map_1 = new Map([['a',1],['b',2]])
// To add the new values we use set method
// this set is the method and not data structure which we previusoly covered
map_1.set('c',3)

// to check if key exist in map we use .has method

console.log(map_1.has('c'))
//The constructor optionally accepts array as it's argument 

// to delete we use delete keyword
map_1.delete('a')

// to check the size we use size method
console.log(map_1.size)

// to clear key value pair of map we use clear method

map_1.clear()

for(const [key,value] of map_1){
    console.log(`${key}: ${value}`)
}


