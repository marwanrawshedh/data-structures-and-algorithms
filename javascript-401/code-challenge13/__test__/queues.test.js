"use strict";

const queues = require("../lib/queues");

describe("queues tests", () => {
  it("1-{}", () => {
    const qq = new queues();
    
   
    expect(qq.validateBrackets("{}")).toBe(true);
  });
  it("2-{}(){}", () => {
    const qq = new queues();
    
   
    expect(qq.validateBrackets("{}(){}")).toBe(true);
  });
  it("3-()[[Extra Characters]]", () => {
    const qq = new queues();
    
   
    expect(qq.validateBrackets("()[[Extra Characters]]")).toBe(true);
  });
  it("4-(){}[[]]", () => {
    const qq = new queues();
    
   
    expect(qq.validateBrackets("(){}[[]]")).toBe(true);
  });
  it("5-{}{Code}[Fellows](())", () => {
    const qq = new queues();
    
   
    expect(qq.validateBrackets("{}{Code}[Fellows](())")).toBe(true);
  });
  

    it("6-[({}]", () => {
      const qq = new queues();
      
     
      expect(qq.validateBrackets("[({}]")).toBe(false);
    });
    
    it("7-(](", () => {
      const qq = new queues();
      
     
      expect(qq.validateBrackets("(](")).toBe(false);
    });
    it("8-{(})", () => {
      const qq = new queues();
      
     
      expect(qq.validateBrackets("{(})")).toBe(false);
    });
    it("9-{", () => {
      const qq = new queues();
      
     
      expect(qq.validateBrackets("{")).toBe(false);
    });
    it("10-)", () => {
      const qq = new queues();
      
     
      expect(qq.validateBrackets(")")).toBe(false);
    });
    it("11-[}", () => {
      const qq = new queues();
      
     
      expect(qq.validateBrackets("[}")).toBe(false);
    });
  
});





