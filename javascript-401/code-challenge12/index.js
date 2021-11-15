"use strict";
const AnimalShelter = require("./lib/queues");
const qq = new AnimalShelter();

qq.enqueue("dog")
qq.enqueue("cat")
qq.enqueue("cat")
qq.enqueue("cat")
qq.dequeue("cat")



console.log(qq.front)
