
fdescribe("First Describe", function() {

    it("first it", function() {
        expect( true ).toEqual(true);
        console.log('first it')
    }); 
    xit("Second it", function() {
        console.log('second it')
    }); 
    
});
fdescribe("second describe", function() {
    beforeEach(function(){
        console.log("second describe before each") 
    })
    xit("first it", function() {
        expect( true ).toEqual(true);
        console.log('second describe first it')
    }); 
    it("Second it", function() {
        console.log('second describe second it')
    }); 
});

xdescribe("third describe", function() {
    beforeEach(function(){
        console.log("third describe before each") 
    })
    it("third it", function() {
        expect( true ).toEqual(true);
        console.log('third describe first it')
    }); 
    it("Second it", function() {
        console.log('third describe second it')
    }); 
});