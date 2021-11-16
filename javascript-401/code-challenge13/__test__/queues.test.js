"use strict";

const queues = require("../lib/queues");

describe("queues tests", () => {
  it("1", () => {
    const qq = new queues();
    
   
    expect(qq.validateBrackets("1")).toBe(false);
  });
  it("()[[Extra Characters]]", () => {
    const qq = new queues();
    
   
    expect(qq.validateBrackets("()[[Extra Characters]]")).toBe(true);
  });
  it("{}{Code}[Fellows](())", () => {
    const qq = new queues();
    
   
    expect(qq.validateBrackets("{}{Code}[Fellows](())")).toBe(true);
  });
  
    it("[({}]", () => {
      const qq = new queues();
      
     
      expect(qq.validateBrackets("[({}]")).toBe(false);
    });
  
  
  
});





