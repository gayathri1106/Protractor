"use strict";
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
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.M1 = function () {
        var obj = new Employee;
        obj.EMPCode2_P;
        obj.EMPName2_Pr;
        obj.EMPType2_pro;
        Employee.EMPCode1_P;
        Employee.EMPName1_Pr;
        Employee.EMPType1_Pro;
        //can access all 
    };
    return Employee;
}());
exports.Employee = Employee;
//out side of class     
function Office() {
    var obj = new Employee;
    obj.EMPCode2_P;
    Employee.EMPCode1_P;
    // This only can access (public )
}
// anthor class
var CaftArea = /** @class */ (function () {
    function CaftArea() {
    }
    CaftArea.prototype.ground = function () {
        var obj = new Employee;
        obj.EMPCode2_P;
        Employee.EMPCode1_P;
    };
    return CaftArea;
}());
// anthor class with extends
var Meeting = /** @class */ (function (_super) {
    __extends(Meeting, _super);
    function Meeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Meeting.prototype.ground = function () {
        var Mobj = new Meeting;
        Mobj.EMPCode2_P;
        Mobj.EMPType2_pro;
        Meeting.EMPCode1_P;
        Meeting.EMPType1_Pro;
        var obj = new Employee;
        obj.EMPCode2_P;
        Employee.EMPCode1_P;
        Employee.EMPType1_Pro;
    };
    return Meeting;
}(Employee));
/////////
