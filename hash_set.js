const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
set.add(6);

console.log(set);

console.log(`Size: ${set.size}`);
console.log(`Has: ${set.has(16)}`);
console.log(`Has: ${set.has(1)}`);

set.forEach((value) => console.log(value));
