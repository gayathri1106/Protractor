"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('Windows', function () {
    protractor_1.browser.waitForAngularEnabled(false);
    it('Handling windows', function () {
        protractor_1.browser.get("https://amazon.in/");
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.id("twotabsearchtextbox"))).click().perform();
        protractor_1.browser.element(protractor_1.by.id("twotabsearchtextbox")).sendKeys("mosquito net");
        protractor_1.browser.sleep(2000);
        protractor_1.browser.element(protractor_1.by.id("twotabsearchtextbox")).sendKeys(protractor_1.protractor.Key.ARROW_DOWN);
        protractor_1.browser.element(protractor_1.by.id("twotabsearchtextbox")).sendKeys(protractor_1.protractor.Key.ENTER);
        protractor_1.browser.sleep(2000);
        protractor_1.browser.element(protractor_1.by.xpath("(//h2[@class='a-size-mini a-spacing-none a-color-base s-line-clamp-4'])[1]")).click().then(function () {
            protractor_1.browser.sleep(5000);
            protractor_1.browser.getAllWindowHandles().then(function (Handles) {
                protractor_1.browser.switchTo().window(Handles[1]);
                protractor_1.browser.sleep(5000);
            });
        });
        protractor_1.browser.sleep(5000);
        protractor_1.browser.element(protractor_1.by.id("quantity")).click();
        protractor_1.browser.element(protractor_1.by.id("quantity")).sendKeys(protractor_1.protractor.Key.ARROW_DOWN);
        protractor_1.browser.element(protractor_1.by.id("quantity")).sendKeys(protractor_1.protractor.Key.ENTER);
        protractor_1.browser.sleep(3000);
    });
});
