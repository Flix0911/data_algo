# Dyanmic Array

- Python and JS, they are the default. Remember static arrays are fixed size, dynamic are not
- Again, when creating static, we must specificy
- Dynamic arrays, you don't have to specify ~ in saying that there is typically a default size

- Adding to the end of the array, is pushing to the array
    - There is always a pointer at the last element in the array
    - Pointer can also tell us the length of the array

- Removing is popping

- Lets say this is our dynamically created array ~ we now want to add to the end of it but it was initialized as length of 3
```javascript
const myArr = [0, 4, 7]
```

- From there we will allocate a new array and it will multiple by *2

```javascript
const myArrTwo = [0, 4, 7, 9 , ,]
```
- The above has solved the problem of not hainvg enough space
- Problem is, we still hve the original array

- myArr is now going to be deallocated ~ can allocate additional variables in memory now

- If we keep adding ~ consider 12 as exceeding the size of the array
```javascript
const myArrTwo = [0, 4, 7, 9, 10, 11] 12
```

- Now we need to allocate a new array ~ lets double the lengeth this time
```javascript
const myArrThree = [0, 4, 7, 9 , 10, 11, 12, , , , ]
```


---
## Why are we doubling the array and not increasing by 1 for space needed?

- Since we are allocating a brand new array ~ we are doing O(n) time operation
    - n is size of memory allocated
- Pushing a value is O(1)


- Why not make a super large array?
    - Not necessarily profiecient because we're taking a lot of space in memory

- Keep in mind, we're trying to not have to allocate memory to a brand new array each time we push an element to the array. This is why we're doubling it compared to increasing by just 1

### Amortized Complexity

- It took O(n) to add an element, but we know it is infrequent
- amortized time complexity of pushing to the array is O(1)

- Think of this as the avarage time ~ typically O(1) ~ will be constant time

```javascript
// Adding 8 elements to an array ~ end goal is [1,2,3,4,5,6,7,8]

// initialize of the array is in this example is length of 1
// 1 operations
const arr = [1]

// now, we want to add an additional element so the array must multiple *2
// 2 operations
const arr = [1, 2]

// now, we want to add additional ~ note, the length is now doubled to 4 and we can add 2 more
// 4 opertations
const arr = [1,2,3,4]

// now, we want to add additional ~ note, the length is again double and this time to 8, we can finish allocating the rest of our elements
// 8 operations
const arr = [1,2,3,4,5,6,7,8]


// Take away: 4 operations to get to the desired length of the array
//  Additionally, each time it required shifting the array (push) and the deallocating the memory of the previous, shorter, array

// Slightly oversimplified
// Technically, requires 8 operations to create the space
// Then 8 operations to push all the elements into the array

// 8 + 4 + 2 + 1 ~ this calculation is always dominated by the last term. This time 8, but, greater than or equal to the sum of all previous terms
// Why is it important?
    // This array took 15 operations ~ dominated by the last term
    // size 8 array -> 15 <= 2 * 8
    // general case 2 * n (n is number of elements)
    // O(2*n)
        // Note, in O notation, we do not necessarily care of constants multiplying a variable
        // we can simplify into O(n)
    // pushing arbitry number of values is O(n)
```

![Imgur](https://i.imgur.com/K1muOJf.jpg)
- Notice expotential growth compared to O(n)
- intersect input size n=1
- We care about large growth ~ we care about big input sizes
    - This is what slows down our CPU ~ this is where you must be cognizant of time complexities


### Time complexity summary ~ always think worst case
| Operation | Big-O time |
|-----------|------------|
| r/ w i-th element | O(1) |
| Inset / Remove end | O(1) |
| Insert Middle | O(n) |
| Remove Middle | O(n) |