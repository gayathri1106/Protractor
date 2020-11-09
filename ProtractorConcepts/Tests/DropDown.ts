import { browser,element,by } from "protractor";
describe('DropDown',function() { 
   var a=10 
    function Calc(a:any,b:any,c:any)
    {
    element(by.model("first")).sendKeys(a);
    element(by.model("second")).sendKeys(b);
    element.all(by.tagName("option")).each(function(item:any)
    {
    item.getAttribute("value").then(function(values:any)
    {
    if(values==c)
    {
    item.click();
    }
    })
    }) 
    element(by.id("gobutton")).click();
    }
    
    it('Handling DropDown',function() {
    
    browser.get('http://juliemr.github.io/protractor-demo/');
    
    
    Calc(3,5,"MULTIPLICATION");
    Calc(3,5,"DIVISION");
    Calc(10,6,"ADDITION");
    element.all(by.repeater("result in memory")).each(function(item:any)
    {
    item.element(by.css("td:nth-child(3)")).getText().then(function(text:any)
    {
    console.log(text);
    })
    })  
    })  
    })