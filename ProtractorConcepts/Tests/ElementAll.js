"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('Protractor Element Demo', function () {
    function multi(a, b) {
        protractor_1.element(protractor_1.by.model("first")).sendKeys(a);
        protractor_1.element(protractor_1.by.model("second")).sendKeys(b);
        protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css("option:nth-child(4)")).click();
        protractor_1.element(protractor_1.by.id("gobutton")).click();
    }
    it('Locators', function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        multi(2, 3);
        multi(4, 3);
        // multi(8,3);
        // multi(2,3);
        // multi(9,3);
        // multi(0,3);
        protractor_1.element.all(protractor_1.by.repeater("result in memory")).each(function (item) {
            item.element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text);
            });
        });
    });
});
