import { browser,element,by } from "protractor";

describe('Protractor Element Demo',function() {  
    function multi(a:number,b:number) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
        element(by.id("gobutton")).click();
    }
    
    it('Locators',function() {

    browser.get('http://juliemr.github.io/protractor-demo/');
    
    
    multi(2,3);
    multi(4,3);
   // multi(8,3);
   // multi(2,3);
   // multi(9,3);
   // multi(0,3);
    
    element.all(by.repeater("result in memory")).each(function(item:any)
    {
    item.element(by.css("td:nth-child(3)")).getText().then(function(text:any)
    {
    console.log(text);
    })
    
    })
    
    })
    
    
    })
    
    