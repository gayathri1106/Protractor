var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//overloading
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.m1 = function (arg) {
        if (typeof (arg) === 'number')
            return arg.toString();
        if (typeof (arg) === 'string')
            return arg.length;
    };
    return A;
}());
var obj = new A();
console.log(obj.m1(101));
console.log(obj.m1("gayathri"));
//inheritence
var B = /** @class */ (function () {
    function B() {
        this.p = 10;
        this.q = 1;
    }
    B.m1 = function () {
        console.log("static m1 method");
    };
    B.prototype.m4 = function () {
        console.log("static m1 method");
    };
    return B;
}());
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    C.m3 = function () {
        var c = new C();
        c.m4();
        // c.m3()
        c.p;
        C.m1();
    };
    return C;
}(B));
C.m3();
