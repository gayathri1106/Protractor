//Types of Variable declaration
var a = 10;
var b;
var e;
var c = 'gayathri';
b = 11;
a = b;
var str = new String('gayathri');
var al = 10;
var bl;
var el;
var cl = 'gayathri';
var l = 10;
l = 10;
function add() {
    var sum = al + b + l;
    return sum;
}
console.log(add());
//************************************************ */
//Scope of variables
function f() {
    var X = 5; //access inside f()  
    if (true) {
        var Y = 10; //access inside f()   
        console.log(X); // 5  
        console.log(Y); // 10  
    }
    console.log(X); // 5  
    console.log(Y); // 10  
}
f();
//console.log(X); // cannot accesses from outside function  
//console.log(Y); // cannot accesses from outside function
function fl() {
    var x = 10;
    if (x == 10) {
        // "x" exists here        
        var y = x + 1;
        return y;
    }
    //return y;  // cannot accesses from outside 'if'  block 
}
console.log(fl());
var a = 10;
var a = 21;
var x = 10;
//let x=21;//can't re declare 
function f1(x) {
    console.log(a); // undefined       
    var a = x;
    console.log(a); //4
}
f1(4);
function f2(x) {
    // console.log(a); // error   
    var a = x;
    console.log(a); //3
}
f2(3);
function fc() {
    var a = 10;
    console.log("Output: " + a); // Output: 10  
    //  a = 10; // can't reassign 
}
fc();
//type Assertions
function sum(x, y) {
    return x + y;
}
var Addition = 10; // Correct  
var str1 = Addition;
var str2 = str1;
var id = 111;
var eid = id;
console.log(typeof (eid)); // number 
//or
var id = 111;
var eid = id;
console.log(typeof (eid));
var val = {};
val.name = "gayathri";
val.id = 123;
console.log(val);
