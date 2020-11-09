import { browser,element,by,protractor } from "protractor";
describe('Actions ',function() {  
browser.waitForAngularEnabled(false)

    it('amazon',function() {
   
    browser.get("https://amazon.in/");
  
   // browser.element(by.id("twotabsearchtextbox")).sendKeys("mosquito");
   browser.actions().mouseMove(element(by.id("twotabsearchtextbox"))).click().perform();
   browser.element(by.id("twotabsearchtextbox")).sendKeys("mosquito");
    browser.sleep(2000);
  browser.element(by.id("twotabsearchtextbox")).sendKeys(protractor.Key.ARROW_DOWN);
   // browser.sleep(2000);
    browser.element(by.id("twotabsearchtextbox")).sendKeys(protractor.Key.ENTER); 
    browser.sleep(2000);
    
    
    
    })
    })
    
    