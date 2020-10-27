//Variables
var global=10; // global variable
function add(a,b){ //function
    var local=a+b;// local variable
    console.log(local,' -- printing local variable inside function');
    console.log (global,' --  printing global variable inside function');
     return  local; 
}

console.log(add(10,5))
//console.log(local,' -- printing local variable ');//undefined error :- ReferenceError: local is not defined
console.log (global,' --  printing global variable');
//********************************************************************************** 
// Data Types
// object type
var person = {
    firstName: "thulsi",
    lastName: "kapati",
    age: 26,
  };
  console.log(person.firstName)
  person.firstName='gayee'
  console.log(person.firstName)
  // var
  var a =10;
  var b ='gayathri'
  var c =10.0;
  var d =['g', 10, 'gayathri',10.2];
  var e =true;
  console.log(typeof person)
  console.log(typeof a)
  console.log(typeof b)
  console.log(typeof c)
  console.log(typeof d)
  console.log(typeof e)
  // let vs var
var a=10;
function sub(){
var a=20;
//var z1 =25;
console.log(a,'   inside')
{
    let x =23;
    console.log(x,'   x')
    var z1=5
let z2=15
}
console.log(x,'    x')
console.log(z1)
//console.log(z2)
  }
//***********************************************************************************************

//Array
var arr=new Array(1,'gayathri',3);
var arr2=[1,2,'g',true,10.3]
arr[0]=9
arr.push('java')
console.log(arr)
console.log(typeof arr)
console.log(arr.length)
console.log(arr.sort())
//************************************************************************************ */

  //number methods
  var num=123.56;
  console.log(num.toFixed())
  console.log(num.valueOf())
  var str2=num.toString();
  console.log(num.toString())
  console.log(typeof str2)
  // String methods
  var str ='gayathri';
  console.log(str.replace('g','t'))
  console.log(str.slice(2,8));
  console.log(str.substring(2,8))
  console.log(str.substring('th'))
  console.log(str.substr(2,8))
  console.log(str.length)
  console.log(str.split('a'))
  console.log(str.toLocaleUpperCase())
  console.log(str.toUpperCase())
  console.log(str.concat('thulsi'))
  console.log(str.charAt(3))
   
//constructor

function Add(x,y){
this.x=x;
this.y=y;
console.log(x+y)

}
Add =new Add(3,4);
  
  