var Maths1;
(function (Maths1) {
    function add(a, b) {
        return a + b;
    }
    Maths1.add = add;
    function sub(a, c) {
        return a - c;
    }
})(Maths1 || (Maths1 = {}));
var x1 = Maths1.add(1, 2);
console.log(x1);
