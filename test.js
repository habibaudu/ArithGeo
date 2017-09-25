(function(){
  'use strict';
  // const expect = require('expect.js');
  const expect = require('chai').expect; 

  const arit = require('./app/arit.js');

  describe("Test cases to check if an array passed is arithemetic, geometric or none ",function() {
      it("should return Arithemetic if the array is progressing arithetically",function() {
        expect(arit([5,10,15,20])).to.equal("Arithmetic");
      });
      it("should return -1 if passed [5,10,-15,-20]",function(){
        expect(arit([5,10,-15,-20])).to.equal(-1);
      });

      it("should return Geometric if the array is progressing geometrically",function(){
        expect(arit([5,10,20,40,80,160])).to.equal("Geometric");
      });
       it("should return -1 for [5,10,20,-40,-80,160]",function(){
        expect(arit([5,10,20,-40,-80,160])).to.equal(-1);
      });

      it("should return 0 if its an empty array",function() {
        expect(arit([])).to.equal(0);
      });

      it("should return -1 if the array is neigther arit nor Geo",function(){
        expect(arit([24,6,34,45,1])).to.equal(-1);
      });
      it("should return Arithemetic for if passed 1 and 2",function(){
        expect(arit([1,2])).to.equal("Arithmetic");
      });

      it("should return Arithemetic for if passed 1, 2,3",function(){
        expect(arit([1,2,3])).to.equal("Arithmetic");
      });
      
      it("should return -1  if passed [5,10,15,20,30]",function(){
        expect(arit([5,10,15,20,30])).to.equal(-1);
      });
      it("should return Arithmetic  [1,1,1,1,1]",function(){
        expect(arit([1,1,1,1,1,1])).to.equal("Arithmetic");
      });  
    
  });
})();