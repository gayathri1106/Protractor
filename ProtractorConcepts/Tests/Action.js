"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('Actions ', function () {
    protractor_1.browser.waitForAngularEnabled(false);
    it('amazon', function () {
        protractor_1.browser.get("https://amazon.in/");
        // browser.element(by.id("twotabsearchtextbox")).sendKeys("mosquito");
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.id("twotabsearchtextbox"))).click().perform();
        protractor_1.browser.element(protractor_1.by.id("twotabsearchtextbox")).sendKeys("mosquito");
        protractor_1.browser.sleep(2000);
        protractor_1.browser.element(protractor_1.by.id("twotabsearchtextbox")).sendKeys(protractor_1.protractor.Key.ARROW_DOWN);
        // browser.sleep(2000);
        protractor_1.browser.element(protractor_1.by.id("twotabsearchtextbox")).sendKeys(protractor_1.protractor.Key.ENTER);
        protractor_1.browser.sleep(2000);
    });
});
