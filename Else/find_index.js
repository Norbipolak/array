`The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. 
If no elements satisfy the testing function, -1 is returned.`

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3