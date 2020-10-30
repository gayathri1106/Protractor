//Types of Variable declaration
var a:number=10;
var b;
var e:number;
var c:string='gayathri'
b=11;
a=b;
var str=new String('gayathri');

let al:number=10;
let bl;
let el:number;
let cl:string='gayathri'
let l=10
 l=10
function add() {  
    var sum =al+b+l;  
    return sum;  
}  
console.log(add())
//************************************************ */
//Scope of variables
function f()  
{  
    var X = 5; //access inside f()  
    if(true)  
    {  
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
    let x = 10; 

    if (x==10) {  
        // "x" exists here        
        let y = x + 1;  
        return y;  
    }  
     
    //return y;  // cannot accesses from outside 'if'  block 
} 
console.log(fl() )

var a=10;
var a=21;
let x=10;
//let x=21;//can't re declare 

function f1(x:any){     
    console.log(a);  // undefined       
    var a = x;        
    
    console.log(a);    //4
  }    
  f1(4);
  function f2(x:any){     
   // console.log(a); // error   
    let a = x;        
    console.log(a);    //3
  }    
  f2(3);


  function fc(){  
    const a = 10;  
    console.log("Output: " +a);  // Output: 10  
   //  a = 10; // can't reassign 
  }  
  fc(); 

  //type Assertions
  function sum(x: number, y: number )  
{  
    return x + y;      
}  
let Addition: number = 10; // Correct  
let str1 = <any> Addition;
let str2 = <string> str1; 


var id: any = 111;  
var eid = <number> id;   
console.log(typeof(eid)); // number 
//or
var id: any = 111;  
var eid = id as number; 
console.log(typeof(eid));
/*let abc = { };  
abc.name = "gayathri"; //error  
abc.code = 123;*/ 

interface abc {   
    name: string;   
    id: number;   
}  
let val = <abc> { };   
val.name = "gayathri";
val.id = 123;
console.log(val)
