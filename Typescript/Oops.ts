//overloading
class A  
{  
    public m1(s: string): number;  
    public m1(n: number): string;  
    public m1(arg: any): any   
    {  
        if (typeof(arg) === 'number')  
            return arg.toString();  
        if (typeof(arg) === 'string')  
            return arg.length;  
    }  
}  
let obj = new A();  
console.log(obj.m1(101));  
console.log(obj.m1("gayathri")); 

//inheritence
class B{
    protected  p:number=10;
    public q=1;
    static m1(){
        console.log("static m1 method")
    }
    m4(){
        console.log("Nonstatic m4 method")
    }

}
class C extends B{
    
     static m3(){
      let  c=new C();
        c.m4()
        c.p
        C.m1()
     }
}
C.m3();
//construtor
class D{
   b:number;
    constructor(a:number){
     this.b=a;
    
     console.log(this.b);   
    }
}
var obj1=new D(1);