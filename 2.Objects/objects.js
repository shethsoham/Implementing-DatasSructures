const obj ={
    name:'Soham',
    age:'23',
    "age-difference": 1,
    // adding new key and setting to functioin
    sayMyname: function(){
        console.log(this.name)
    }
}

console.log(obj)

// Using the dot notations and bracket notations to access the values using keys

console.log(obj.name)
console.log(obj['age']) 
console.log(obj['age-difference']) // Bracket notations is mainly used when the object key contains spaces or hyphen

// Adding new key to the obj using dot notations

obj.hobby = 'swimming'

// deleting
delete obj.age

obj.sayMyname()

// accessing the keys, values , and key-value pair : Object.keys() .values() .keys

//Object.keys() : Returns an array of the object's keys.
const keys = Object.keys(obj);
console.log(keys); // Output: ['name', 'age-difference', 'sayMyname']

// Object.values() : Returns an array of the object's values.
const values = Object.values(obj);
console.log(values); 
// Output: ['Soham', 1, [Function: sayMyname]]

// Object.entries() : Returns an array of key-value pairs.

const entries = Object.entries(obj);
console.log(entries);
/* Output: [
  ['name', 'Soham'],
  ['age-difference', 1],
  ['sayMyname', [Function: sayMyname]]
]
*/

//--------------------------------------------------------
// Object time complexity

// Insert-O(1)
// Remove-O(1)
// Access-O(1)

// SEARCH O(n)

// Object.keys() - O(n)
// Object.values() -O(n)
// Object.entries() -O(n)
