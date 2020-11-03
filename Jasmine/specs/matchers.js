describe("second describe", function() {
    xit("matchers", function() {
        var a=true
        expect(true).toEqual(true);
        expect(true).toBe(true)
        expect(true).not.toBe(false)
        var arr=[1,2,3,4]
      //  expect(arr).toEqual([1,2,3]);//fail 4 to equal 3
      expect(arr).toEqual([1,2,3,4])
      var str='gayathri'
      expect('gayathri').toContain('gaya')
      expect(str).toBeDefined(); 
      var empty; 
      expect(empty).toBeUndefined(); 
       var val=null
       expect(val).toBeNull();
       var b=10
       var c=5
       expect(b).toBeGreaterThan(5);
       expect(c).toBeLessThan(7);

        
    }); 

});