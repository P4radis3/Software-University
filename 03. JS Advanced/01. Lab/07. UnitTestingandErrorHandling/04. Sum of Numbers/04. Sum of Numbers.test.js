let expect = require('chai').expect;
let sum = require('./sumOfNumbers').sum;

describe("test sum", function () {
    it("should return 3 because 1 + 2", function () {
        
        expect(sum([1, 2])).to.equal(3)

    });


    it("should return 0", function () {
        
        expect(sum([])).to.equal(0)
        
    });
    
    
    it("should return NaN", function () {
        
        expect(sum(['pesho', 1, 2])).to.be.NaN;
        
    });
    
    
    it("should return 3.3", function () {
        
        expect(sum([1.1, 1.1, 1.1])).to.be.closeTo(3.3, 0.0001)
        
    });
    
    
    it("should work with negative numbers", function () {
        
        expect(sum([-1, 5, -7])).to.equal(-3)
        
    });
    
    
    it("should return NaN", function () {
        
        expect(sum('test')).to.be.NaN;

    })
});