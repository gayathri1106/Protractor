//CallBack Functions
function sum(x,cbf){   
   var res= cbf();
   console.log(x*res)   
}
function add(){
	var a=12;
    var b=3;
    var c=a+b
  return c;
}
sum(3,add);

//promise
var prom = new Promise(function(resolve, reject) {
	var res = true
	if (res) {
		resolve('TRUE');
	} else {
		reject('FALSE');
	}
});
prom.then(function(pass) {
	console.log(pass);
	prom.catch(function(fail) {
		console.log(fail);
	});
});
// promise with async
async function a() {
    var a=3;
    var b=12;
   return a+b;
  }
  a().then(function(res){
    console.log(res)
});
// promise with async with await
var val = async function(){ 
    var y = await "Hello World"; 
    console.log(y); 
} 
console.log("before"); 
val(); 
console.log("after"); 
console.log("abcdef"); 
