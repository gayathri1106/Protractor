"use strict";
exports.__esModule = true;
exports.newModule = void 0;
var newModule;
(function (newModule) {
    newModule.num = 10;
    var SUM1 = /** @class */ (function () {
        function SUM1() {
        }
        SUM1.addC = function (a, b) {
            return a + b;
        };
        SUM1.subC = function (a, c) {
            return a - c;
        };
        return SUM1;
    }());
    newModule.SUM1 = SUM1;
    function addF(a, b) {
        return a + b;
    }
    newModule.addF = addF;
    function subF(a, c) {
        return a - c;
    }
})(newModule = exports.newModule || (exports.newModule = {}));
var x = newModule.SUM1;
console.log(x.addC(1, 2));
