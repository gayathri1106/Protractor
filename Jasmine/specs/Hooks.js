//This is test suite
describe("Test Suite", function() {
    beforeAll(function(){
        console.log('before all excecutes before all its')
    })
    beforeEach(function(){
        console.log("before each") 
    })
    it("first it", function() {
        expect( true ).toEqual(true);
        console.log('first it')
    }); 
    it("Second it", function() {
        console.log('second it')
    }); 
    afterEach(function(){
        console.log("after each")
    })
    afterAll(function(){
        console.log('after all excecutes after all its')
    })
});