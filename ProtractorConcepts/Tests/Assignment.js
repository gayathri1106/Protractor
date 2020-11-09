"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('Assignment on protractor', function () {
    protractor_1.browser.waitForAngularEnabled(false);
    it('launching Application', function () {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.get(' https://christophercliff.com/flatmarket/');
        protractor_1.element.all(protractor_1.by.xpath("//main[@data-reactid='.0.1.1']/section/div//div//div[starts-with(text(),'P')]")).each(function (item) {
            protractor_1.browser.actions().mouseMove(item).perform().then(function () {
                item.getText().then(function (text) {
                    console.log(text);
                    //  browser.sleep(3000)  
                });
            });
        });
        protractor_1.element.all(protractor_1.by.xpath("//main[@data-reactid='.0.1.1']/section/div//div//div[starts-with(text(),'P')]")).count().then(function (count) {
            expect(count).toBe(4);
            console.log('fruitname starts with P count is: ', count);
        });
    });
});
