
describe("First Describe", function() {

    it("first it", function() {
        expect( true ).toEqual(true);
        console.log('first it')
    }); 
    it("Second it", function() {
        console.log('second it')
    }); 
    
});
fdescribe("second describe", function() {
    beforeEach(function(){
        console.log("second describe before each") 
    })
    it("first it", function() {
        expect( true ).toEqual(true);
        console.log('second describe first it')
    }); 
    fit("Second it", function() {
        console.log('second describe second it')
    }); 
});