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
var Maths;
(function (Maths) {
    Maths.num = 10;
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
    Maths.SUM1 = SUM1;
    function addF(a, b) {
        return a + b;
    }
    Maths.addF = addF;
    function subF(a, c) {
        return a - c;
    }
    var nestedNameSpace;
    (function (nestedNameSpace) {
        nestedNameSpace.numNested = 10;
        var SUM1Nested = /** @class */ (function () {
            function SUM1Nested() {
            }
            SUM1Nested.addNestedC = function (a, b) {
                return a + b;
            };
            SUM1Nested.subNestedC = function (a, c) {
                return a - c;
            };
            return SUM1Nested;
        }());
        nestedNameSpace.SUM1Nested = SUM1Nested;
        function addNestedF(a, b) {
            return a + b;
        }
        nestedNameSpace.addNestedF = addNestedF;
        function subNestedF(a, c) {
            return a - c;
        }
    })(nestedNameSpace = Maths.nestedNameSpace || (Maths.nestedNameSpace = {}));
})(Maths || (Maths = {}));
/// <reference path="/Users/thulasi/Project/Protractor/Typescript/NameSpaces/Sum.ts" />
var test = /** @class */ (function (_super) {
    __extends(test, _super);
    function test() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test.prototype.addI = function (a, b) {
        return a + b;
    };
    test.prototype.subI = function (a, c) {
        return a + c ;
    };
    test.M1 = function () {
        var x = Maths.addF(5, 6);
        var y = Maths.SUM1.addC(10, 20);
        var z = Maths.SUM1.subC(10, 20);
        var ref = Maths.SUM1;
        ref.addC(100, 200);
        ref.subC(200, 2);
        var ref2 = Maths;
        console.log(x);
        console.log(y);
        console.log(z);
    };
    test.M2 = function () {
        var x = Maths.nestedNameSpace.addNestedF(1, 2);
        var y = Maths.nestedNameSpace.SUM1Nested.addNestedC(30, 40);
        var z = Maths.nestedNameSpace.SUM1Nested.subNestedC(50, 60);
        var ref = Maths.nestedNameSpace.SUM1Nested;
        ref.addNestedC(100, 200);
        ref.subNestedC(200, 2);
        var ref2 = Maths;
        console.log(x);
        console.log(y);
        console.log(z);
    };
    return test;
}(Maths.SUM1));
test.M1();
test.M2();
