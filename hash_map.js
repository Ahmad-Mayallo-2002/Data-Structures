const map = new Map();

map.set("name", "ahmad");
map.set("id", 1);

map.forEach((value, key) => console.log(`Key: ${key}, Value: ${value}`));

console.log(map.size);
