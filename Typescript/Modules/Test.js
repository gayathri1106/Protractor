"use strict";
exports.__esModule = true;
var Module_1 = require("./Module");
var tes = /** @class */ (function () {
    function tes() {
    }
    tes.prototype.addI = function () {
        console.log("interface method addI");
    };
    tes.prototype.subI = function () {
        console.log("interface method subI");
    };
    tes.method1 = function () {
        var x = Module_1.newModule;
        var p = x.SUM1.addC(2, 3);
        var q = x.SUM1.subC(3, 4);
        var r = x.addF(5, 5);
        console.log(p + '\n' + q + '\n' + r);
        var obj = new tes();
        obj.addI();
        obj.subI();
    };
    return tes;
}());
tes.method1();
