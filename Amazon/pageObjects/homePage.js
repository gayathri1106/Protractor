"use strict";
exports.__esModule = true;
exports.PageObjects = void 0;
var protractor_1 = require("protractor");
var PageObjects = /** @class */ (function () {
    function PageObjects() {
    }
    PageObjects.searchBox = function () {
        return protractor_1.element(protractor_1.by.id('twotabsearchtextbox'));
    };
    PageObjects.searchIcon = function () {
        return protractor_1.element(protractor_1.by.id('nav-search-submit-text'));
    };
    PageObjects.sortBySelectBox = function () {
        return protractor_1.element(protractor_1.by.id('a-autoid-0-announce'));
    };
    PageObjects.sortByLowPriceToHigh = function () {
        return protractor_1.element(protractor_1.by.id('s-result-sort-select_1'));
    };
    PageObjects.sortByHighPriceToLow = function () {
        return protractor_1.element(protractor_1.by.id('s-result-sort-select_2'));
    };
    PageObjects.sortByCustomerReview = function () {
        return protractor_1.element(protractor_1.by.id('s-result-sort-select_3'));
    };
    PageObjects.sortByNewArrivals = function () {
        return protractor_1.element(protractor_1.by.id('s-result-sort-select_4'));
    };
    return PageObjects;
}());
exports.PageObjects = PageObjects;
