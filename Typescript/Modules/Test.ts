import { newModule} from "./Module";


class tes implements newModule.sumInterFace{
     addI() {
       console.log("interface method addI")
    }
    subI() {
       console.log("interface method subI")
    }

 static method1(){
var x=newModule;
var p=x.SUM1.addC(2,3)
var q=x.SUM1.subC(3,4)
var r=x.addF(5,5)
console.log(p+'\n'+q+'\n'+r)
var obj=new tes();
obj.addI()
obj.subI()
    }
    
}
tes.method1();