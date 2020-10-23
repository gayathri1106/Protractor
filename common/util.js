"use strict";
exports.__esModule = true;
exports.util = void 0;
var util = /** @class */ (function () {
    function util() {
    }
    util.clickOnElement = function (element) {
        element.click();
    };
    util.enterText = function (element, text) {
        element.sendKeys(text);
    };
    return util;
}());
exports.util = util;
