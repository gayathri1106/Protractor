"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('DropDown', function () {
    var a = 10;
    function Calc(a, b, c) {
        protractor_1.element(protractor_1.by.model("first")).sendKeys(a);
        protractor_1.element(protractor_1.by.model("second")).sendKeys(b);
        protractor_1.element.all(protractor_1.by.tagName("option")).each(function (item) {
            item.getAttribute("value").then(function (values) {
                if (values == c) {
                    item.click();
                }
            });
        });
        protractor_1.element(protractor_1.by.id("gobutton")).click();
    }
    it('Handling DropDown', function () {
        /*browser.waitForAngularEnabled(false);
        browser.get("http://google.com");//non angular apps*/
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        Calc(3, 5, "MULTIPLICATION");
        Calc(3, 5, "DIVISION");
        Calc(10, 6, "ADDITION");
        protractor_1.element.all(protractor_1.by.repeater("result in memory")).each(function (item) {
            item.element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text);
            });
        });
    });
});
