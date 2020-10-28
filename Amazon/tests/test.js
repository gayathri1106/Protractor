"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var util_1 = require("../common/util");
var homePage_1 = require("../pageObjects/homePage");
describe('amazon', function () {
    it('price sort', function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get('https://www.amazon.in');
        util_1.util.enterText(homePage_1.PageObjects.searchBox(), 'alexa');
        util_1.util.clickOnElement(homePage_1.PageObjects.searchIcon());
        util_1.util.clickOnElement(homePage_1.PageObjects.sortBySelectBox());
        util_1.util.clickOnElement(homePage_1.PageObjects.sortByLowPriceToHigh());
        var prices = [];
        protractor_1.browser.sleep(3000);
        var sampleElements = protractor_1.element.all(protractor_1.by.xpath('//div[@data-component-type="s-search-result"]//span[@class="a-price"]//span[@class="a-price-whole"]'));
        sampleElements.then(function () {
            sampleElements.getText().then(function (text) {
                for (var i = 0; i < text.length; i++) {
                    //console.log(text[i])
                    var x = +text[i].split(',').join('');
                    prices.push(x);
                }
                console.log(prices);
                var sortedPrices = [];
                sortedPrices = prices.sort(function (a, b) { return (a < b ? -1 : 1); });
                console.log(sortedPrices);
                if (JSON.stringify(prices) === JSON.stringify(sortedPrices)) {
                    console.log('true');
                }
                else {
                    console.log('false');
                }
            });
        });
    });
});
