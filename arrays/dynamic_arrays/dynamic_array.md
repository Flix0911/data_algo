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





----
# Notes that were copied, mine are above

# Dynamic Arrays
- Dynamic Arrays are much more common and useful because of their ability to be resized. In JavaScript and Python, these are the default — they are not strictly typed languages.

- The difference between static and dynamic arrays is that we don’t have to specify a size upon initialization.

- In different languages, dynamic arrays may be assigned a default size - Java being 10 and C# being 4 Regardless, these are automatically resized at runtime.

# Mechanics of dynamic arrays
- When inserting into a dynamic array, the operating system finds the next empty space and pushes the element into it. For the sake of an example, let’s take an array of size 3 and push elements into it until we run out of space. The pseudocode and visual below demonstrate this.

```c++
void pushback(int n) {
    if (length == capacity) 
    {
        resize();
    }
    // inset at next empty position
    arr[length++] =n;
}

```

![img]https://i.imgur.com/bezBIV7.jpg[/img]

- Since the array is dynamic, adding another element when we run out of capacity is achieved by copying over the values to a new array that is double the original size - this means that the resulting array will be of size 6 and will have new space allocated for it in memory. The following visual and pseudocode demonstrates this.

```c++
void resize() {
   // Create new array of double capacity
   capacity = 2 * capacity;
   int *newArr = new int[capacity];

   // Copy elements to newArr
   for (int i = 0; i < length; i++)
   {
       newArr[i] = arr[i];
   }
   arr = newArr;
   // Normally we would use smart pointers or free the old arr's memory
}
```

![Imgur](https://i.imgur.com/U2GQW58.jpg)

- When all the elements from the first array have been copied over, it does not make sense to keep it in memory - this space will be deallocated.

- This operation will run in amortized 𝑂(1) O(1). Amortized time complexity is the average time taken per operation, that once it happens, it won’t happen again for so long that the cost becomes “amortized”. This makes sense because it is not always that the array needs to be resized, in which case we would perform 𝑂(𝑛)O(n) operations.

# Why double the capacity?

- Let’s dig a little bit deeper into why we double the size of the initial array when we run out of space. This can be proven mathematically, so let’s go over a high level overview. Don't worry, we will not be using any fancy equations.
The visual below shows a resulting array of size 8. Now imagine that we wanted to dynamically fill it up and we started with a size 1array. We would add 5, double the space to add 6, double that space to add 7 and 8, double that space to add 9,
10, 11 and 12

![Imgur](https://i.imgur.com/yMtod62.jpg)

- The size of the above array went from 1 -> 2 -> 4 -> 8.
- And this makes sense because in order to create the resulting array observed in the visual, we had to create 4 spaces, and then insert 4 elements, which is a total of 8 operations. Additionally, we also have to take into consideration the sum of all the operations that occured before the last one since we would not have gotten to the resulting array without these operations.

- The pattern here is that the last term (the dominating term) is always greater than or equal to the sum of all the terms before it. In this case, 1+2+4=7, and 
7<8. Add in the 8 to the 7, we get a total of 15 operations to create the resulting array of size 8. Generally, the formula is that for any array size 
n, it will take at most 2n operations to create, which would belong to O(n).

- When we are talking about the asymptotic analysis, we are more concerned with an unusually large input size, meaning in the worst case, if our input size was extremely large, say, we built an array of size 150,000, asymptotically, there would be no difference between O(2n) and O(n) because if the algorithm performs exactly 2n operations, it surely performs at least O(n) operations. Therefore, we drop the constants.


![Imgur](https://i.imgur.com/YEeJDyk.jpg)


```c++
// Remove the last element in the array
void popback() {
    if (length > 0) {
        length--;
    }
}

// Get value at i-th index
int get(int i) {
    if (i < length) {
        return arr[i];
    }
    // Here we would throw an out of bounds exception
}

// Insert n at i-th index
void insert(int i, int n) {
    if (i < length) {
        arr[i] = n;
        return;
    }
    // Here we would throw an out of bounds exception
}

void print() {
    for (int i = 0; i < length; i++) {
        cout << arr[i] << ' ';
    }
    cout << endl;
}
```

