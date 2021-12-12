"use strict";
const LinkedList = require("./linkedList");

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  getHash(key) {
    const assciSum = key.split("").reduce((p, n) => p + n.charCodeAt(0), 0);
    const withPrime = assciSum * 599;
    return withPrime % this.size;
  }

  set(key, value) {
    const hash = this.getHash(key);

    const entry =  value ;

    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    this.map[hash].add(entry);
  }

  get(key) {
    const hash = this.getHash(key);
if(this.map[hash]){
  
  return this.map[hash].head;
}
return null;
  }
  contains(key) {
    const hash = this.getHash(key);

let Boolean = false;
if(this.map[hash]){
  Boolean = true;
}
    return Boolean;
  }
}

module.exports = HashMap;
