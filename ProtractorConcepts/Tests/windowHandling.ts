import { browser,element,by,protractor, Browser } from "protractor";
describe('Windows',function() {  

browser.waitForAngularEnabled(false)

    it('Handling windows',function() {
    browser.get("https://amazon.in/");
    browser.actions().mouseMove(element(by.id("twotabsearchtextbox"))).click().perform();
    browser.element(by.id("twotabsearchtextbox")).sendKeys("mosquito net");
    browser.sleep(2000);
    browser.element(by.id("twotabsearchtextbox")).sendKeys(protractor.Key.ARROW_DOWN);
    browser.element(by.id("twotabsearchtextbox")).sendKeys(protractor.Key.ENTER);
    browser.sleep(2000);
    browser.element(by.xpath("(//h2[@class='a-size-mini a-spacing-none a-color-base s-line-clamp-4'])[1]")).click().then(function() {
        browser.sleep(5000)
    browser.getAllWindowHandles().then(function (Handles:any) {
           
            browser.switchTo().window(Handles[1])
            browser.sleep(5000)
        })

    })
    browser.sleep(5000)

    browser.element(by.id("quantity")).click();
    browser.element(by.id("quantity")).sendKeys(protractor.Key.ARROW_DOWN);
    browser.element(by.id("quantity")).sendKeys(protractor.Key.ENTER);
    browser.sleep(3000);

    })
    })
    
    