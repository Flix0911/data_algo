// Leetcode type question / answer

const arr = [5,4,3,2,1]
console.log('arr at inception', arr)
const capacity = 10;

// Insert at the end of the array
function insertAtEnd(arr, n, length, capacity) {
    if (length < capacity) {
        arr[length] = n;
    }
}

const n = 5;
const length = arr.length;
insertAtEnd(arr, n, length, capacity)
console.log('once an element is added', arr) // [ 5, 4, 3, 2, 1, 5 ]
// arr is the array
// n is what is being added to the array
// length is the current length of the array
// capacity is the max capacity for the array






// remove at the end
function removeAtEnd(arr, length) {
    if (length > 0) {
        arr[length -1] = 0;
        length --;
    }
}

removeAtEnd(arr, length)
console.log('once an element is removed', arr) // [ 5, 4, 3, 2, 0, 5 ] - notice how it is removing from index 4, not the new array that added an element

function removeAtEnd(arr, length2) {
    if (length > 0) {
        arr[length2 -1] = 0;
        length2 --;
    }
}

const length2 = arr.length
removeAtEnd(arr, length2)
console.log('once an element is removed', arr) // [ 5, 4, 3, 2, 0, 0 ] - notice on index 4 is 0, it's pulling from the above function