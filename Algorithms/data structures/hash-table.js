class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    // to sum ASCII code _hash - the underscore means private class
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  //the set will call the _hash() method to get the index value
  //the [key, value] pair will be assigned to the table at the spec index
  //then the size property will be incremented by one

  set(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }

  remove(key){
    const index = this._hash(key);

    if(this.table[index] && this.table[index].length){
        this.table[index] = [];
        this.size--;
        return true;
    } else{
        return false;
    }
  }
}
