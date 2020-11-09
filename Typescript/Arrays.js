//Arrays
var values = ['a', 'b', 'c', 'd', 'e'];
var values1 = [1, 2, 3, 4];
var arr = ['ad', 'asd', 'ASDF',];
var ar = ['x', 'y', 'z'];
var arr1;
arr1 = [1, 2, 3, 4];
var tuplearra = ['gayathri', 1, 'thulasi', 2, 'sai', 3]; //tuple
//union
var value;
value = 120;
console.log(value);
value = "Union";
console.log(value);
// 
var arrUnion;
var i;
arrUnion = [1, 2, 3, 4];
for (i = 0; i < arrUnion.length; i++) {
    console.log(arrUnion[i]);
}
arrUnion = ["a", "b", "c"];
for (i = 0; i < arrUnion.length; i++) {
    console.log(arrUnion[i]);
}
//let i:any;   
var arr2 = ['gayathri', 'kapati', 'sai',];
for (var i_1 in arr2) {
    console.log(arr2[i_1]);
}
console.log(values.splice(2, 1)); //c
console.log(values.slice(2, 4));
//console.log(values.map())
function duplicatesInArray() {
    var original = ['a', 's', 't', 'y', 'u', 'a', '7', 'l', 's', 'y'];
    for (var x = 0; x <= original.length; x++) {
        for (var z = x + 1; z < original.length; z++) {
            if (original[x] == original[z]) {
                console.log(original[x]);
                // delete original[x];
            }
        }
    }
    console.log(original);
}
//duplicatesInArray()
function minimumNum() {
    var values1 = [1000, 10, -1, 2, 3, 4, 0, -10];
    console.log(typeof values1);
    var min = values1[0];
    for (var y = 0; y < values1.length; y++) {
        if (values1[y] < min) {
            min = values1[y];
        }
    }
    console.log(min);
}
minimumNum();
//forEach loop
var values4 = ['a', 'b', 'c', 'd', 'e'];
values4.forEach(function (val) {
    console.log(val, '  1');
});
///
