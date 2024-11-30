const arr=[1,2,3,'soham']
console.log(arr) // Printing array / console.log(arr)
console.log(arr[0]) // printing first element in array. console.log(arr[0])

// Adding an element to the array We use Push arr.push(3)
arr.push(4)
// Adding element in the beginning of the array arr.unshift(6)
arr.unshift(5)
// removing element from last - We use pop 
arr.pop()
// removing element from first - we use .shift
arr.shift()

//For of loop : To print all elements in array 
for (const items of arr){
    console.log(items)
}

// map : Creates a new array by applying a function to each element in the original array.
// Returns a new array with the type of each element in arr.
const mappedArr = arr.map(item => typeof item);
console.log(mappedArr); // Output: ['number', 'number', 'number', 'string']

//filter : Creates a new array with elements that pass a specified condition.
// Creates a new array with elements that pass a specified condition.
const filteredArr = arr.filter(item => typeof item === 'number');
console.log(filteredArr); // Output: [1, 2, 3]

// reduce: Reduces the array to a single value by applying a function to each element.
// Explanation: Sums up all numbers in the array. (Filtered out non-numbers first for clarity.)
const sum = arr.filter(item => typeof item === 'number').reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 6


// concat: Merges two or more arrays into one.
//Combines arr with [4, 5] into a new array.
const newArr = arr.concat([4, 5]);
console.log(newArr); // Output: [1, 2, 3, 'soham', 4, 5]

// slice: Extracts a section of the array and returns it as a new array.
//  Extracts elements from index 1 up to (but not including) index 3.

const slicedArr = arr.slice(1, 3);
console.log(slicedArr); // Output: [2, 3]


// splice: Modifies the original array by adding or removing elements.
// Removes 1 element at index 2 (3) and replaces it with 'newElement'. Modifies the original array.
arr.splice(2, 1, 'newElement');
console.log(arr); // Output: [1, 2, 'newElement', 'soham']


// Arrays Big O time complexity 

// Insert/ Remove from end -O(1)
// Insert/ Remove from beginning -O(n) (Because index has to be reset for every element in array )
// Accessing element -O(1)
// Searching - O(n)
// Push/Pop -O(1)

// Shift/unshift/concat/slice/splice - O(n)
// forEach/map/reduce/filter - O(n)