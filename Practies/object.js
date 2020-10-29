var value={
    name:'Gayathri',
    id:123,
   adress:'ymg,kurnool'
}

console.log(value.id,value.name,value.adress)
//new keyword
var Details=new Object();  
Details.id=111;  
Details.name='thulsi'
Details.adress='ymg,kurnool'; 
console.log(Details.id,Details.name,Details.adress) 
 

console.log(Object.values(Details))//fetch object values
console.log(Object.is(value.adress,Details.adress))//compare two values
//constructor
function Person(id,name,adress){  
    this.id=id;  
    this.name=name;  
    this.adress=adress;  
    }  
    p=new Person(1,'sai','ymg');  
    console.log(p.id,p.name,p.adress)
    //console.log(Object.values(Details))