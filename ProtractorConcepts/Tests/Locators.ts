import { browser,element,by } from "protractor";
describe('locators',function() {  
    it('Chain Locators',function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model("first")).sendKeys("3");
    element(by.model("second")).sendKeys("5");
    element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
    element(by.id("gobutton")).click();
    element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
    {
    console.log(text);
    })
   
    browser.sleep(5000)
})
})

    
    
    
    