
import { browser,element,by, WebElement } from "protractor";
describe('Assignment on protractor',function() {  
    browser.waitForAngularEnabled(false);
    it('launching Application',function() {
        browser.manage().window().maximize();
   browser.get(' https://christophercliff.com/flatmarket/');
   element.all(by.xpath("//main[@data-reactid='.0.1.1']/section/div//div//div[starts-with(text(),'P')]")).each(function(item:any)
    {
        browser.actions().mouseMove(item).perform().then(function(){
            item.getText().then(function(text:any){
                console.log(text)
              //  browser.sleep(3000)  
            })
            
        })

      })
        element.all(by.xpath("//main[@data-reactid='.0.1.1']/section/div//div//div[starts-with(text(),'P')]")).count().then((count)=>{
        expect(count).toBe(4);
        console.log('fruitname starts with P count is:',count)
        })
    })
})

