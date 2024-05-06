# Static Arrays

- Array: Contiguous block of data
- Stored in RAM the same way, contiguous

- Most common - reading and writing to the data

```
const myArry = [1, 2, 3]
index of 0 = 1
index of 1 = 2
index of 2 = 3

i = 0
//increment the i, to equal the length of the array
//For loop / while loop

//To read value
myArray[i]
```

- Read value of index is O(1) time complexity - meaning this happens in constant time
- RAM - Random Access Memory ~ can randomly access any memory in constant time



### Writing to an array

- Arrays are fixed size ~ suppose we want to had a 4th value of 7

```
const myArry = [1, 2, 3, 7]

```

- We do not always get to decide where we add an additional value into the array
- Note the original array above was instatiated together and in RAM could be 1,2,3
- However, when adding 7, it could be 1,2,3,x,x,x,x,x,x,x,x,x,7 ~ not contiguous. We're not sure if next to 3 is free, 

## Limitation of arrays ~ specifically static arrays
- Static is fixed size
- Python and JS don't offer static arrays ~ you don't really have to worry about running out of space

- When you remove values, you are basically saying you're going to overwrite, and it is no longer relevant. It technically is still in memory

- Adding and removing are O(1) ~ they're very efficient 
- Inserting at the end is efficient
- Inserting at the beginning or middle, is not efficient [1,7,2,3] ~ you have 
- You must shift the 2, but before we do, we must shift the 3, to accommodate moving 7 into the middle. Only after all the shifting has occured, are you allowed to put the 7. This won't be a single operation
- Time complexity ~ O(n) ~ n refers to variable and refers to the number of elements. In this case, elements in the array ~ worst case