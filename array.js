const { log } = console;

// Initialize Array
const arr = [1, 2, 3, 4, 5];
// Searching

// Linear Search
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length - 1; i++) if (arr[i] === val) return i;
  return -1;
}

// Traversal

// Linear Traversal
function linearTraversal(arr) {
  for (let i = 0; i < arr.length; i++) log(`Element ${i} = ${arr[i]}`);
}

// Reverse Traversal
function reverseTraversal(arr) {
  for (let i = arr.length - 1; i >= 0; i--) log(`Element ${i} = ${arr[i]}`);
}

// Insertion

// Insertion At Index 0
function insertAtStart(arr, val) {
  let size = arr.length;
  for (let i = size - 1; i >= 0; i--) arr[i + 1] = arr[i];
  arr[0] = val;
}

// Insertion At Specific Index
function insertAtIndex(arr, val, pos) {
  let size = arr.length;
  for (let i = size - 1; i >= pos; i--) arr[i + 1] = arr[i];
  arr[pos] = val;
}

// Insertion At End
function insertAtEnd(arr, val) {
  arr.length += 1;
  arr[arr.length - 1] = val;
}

// insertAtEnd(arr, 6);

// Deletion

// Deletion At Index 0
function deletionAtStart(arr) {
  if (!arr.length) return "Array is Empty";
  for (let i = 0; i < arr.length; i++) arr[i] = arr[i + 1];
  arr.length -= 1;
}

// Deletion At Specific Index
function deletionAtIndex(arr, target) {
  if (!arr.length) return "Array is Empty";
  const index = linearSearch(arr, target);
  if (index === -1) return "This Element is not Found";
  for (let i = index; i < arr.length; i++) arr[i] = arr[i + 1];
  arr.length -= 1;
}

// Deletion At End
function deletionAtEnd(arr) {
  if (!arr.length) return "Array is Empty";
  delete arr[arr.length - 1];
  arr.length -= 1;
}

log(arr);
