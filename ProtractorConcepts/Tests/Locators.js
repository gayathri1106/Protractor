"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('locators', function () {
    it('Chain Locators', function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        protractor_1.element(protractor_1.by.model("first")).sendKeys("3");
        protractor_1.element(protractor_1.by.model("second")).sendKeys("5");
        protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css("option:nth-child(4)")).click();
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log(text);
        });
        protractor_1.browser.sleep(5000);
    });
});
