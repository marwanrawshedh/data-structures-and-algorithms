const { it, expect } = require("@jest/globals");
const hash = require("../lib/hashTable");

describe("Hash Table", () => {
  it("Adding a key/value to your hashtable results in the value being in the data structure", () => {
    let ht = new hash(1);
    expect(ht.map[0]).toBeUndefined();
    ht.set("joe", { name: "joe" });
    expect(ht.map[0]).toBeDefined();
  });
  it("Retrieving based on a key returns the value stored", () => {
    let ht = new hash(10);
    ht.set("joe", { name: "joe" });
    expect(ht.contains("joe")).toBe(true);
  });

  it("Successfully returns null for a key that does not exist in the hashtable", () => {
    let ht = new hash(10);
    expect(ht.get("joe")).toBe(null);
  });
  
  
  it("Successfully handle a collision within the hashtable", () => {
      let ht = new hash(10);
      ht.set("joe", { name: "joe" });
      ht.set("joe", { age: "20" });
      ht.set("joe", { parent: "hnan & jane" });
      ht.set('joe', {home:'seoul'});
      expect((ht.get("joe").value.joe.name)).toBe("joe");
      expect(ht.get("joe").next.value.joe.age).toBe("20");
      expect(ht.get("joe").next.next.value.joe.parent).toBe("hnan & jane");
    expect(ht.get("joe").next.next.next.value.joe.home).toBe("seoul");
});
  
it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => { let ht = new hash(10);
    ht.set("joe", { name: "joe" });
    ht.set("joe", { age: "20" });
    ht.set("joe", { parent: "hnan & jane" });
    ht.set('joe', {home:'seoul'});
    expect((ht.get("joe").value.joe.name)).toBe("joe");
    expect(ht.get("joe").next.value.joe.age).toBe("20");
    expect(ht.get("joe").next.next.value.joe.parent).toBe("hnan & jane");
  expect(ht.get("joe").next.next.next.value.joe.home).toBe("seoul");})
    it("Successfully hash a key to an in-range value", () => {
        let ht = new hash(10);
        
        expect(typeof(ht.getHash("joe"))).toBe("number");
       

    })
});
