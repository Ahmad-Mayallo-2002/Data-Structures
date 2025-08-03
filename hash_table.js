class HashTable {
  #BUCKET;
  constructor(V) {
    this.#BUCKET = V;
    this.table = new Array(V);
    for (let i = 0; i < V; i++) this.table[i] = new Array();
  }

  #hashFunction(key) {
    let keyString = String(key);
    let total = 0;
    for (let i = 0; i < keyString.length; i++)
      total += keyString.codePointAt(i);
    return total % this.#BUCKET;
  }

  set(key, value) {
    if (this.get(key)) {
      this.table[this.#hashFunction(key)][1].push(value);
    } else {
      this.table[this.#hashFunction(key)] = [key, [value]];
    }
  }

  delete(key) {
    this.table[this.#hashFunction(key)] = [key, []];
  }

  get(key) {
    return this.table[this.#hashFunction(key)][1];
  }

  display() {
    for (const arr of this.table) if (arr.length) console.log(arr[1]);
  }
}

const hashTable = new HashTable(5);

hashTable.set("name", "ahmad");
hashTable.set("id", 123);

hashTable.delete("name");

console.log(hashTable.table);
