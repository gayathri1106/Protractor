/// <reference path="/Users/thulasi/Project/Protractor/Typescript/NameSpaces/Sum.ts" />
class test extends Maths.SUM1 implements Maths.sumInterFace{
       Ia: any;
       Ib: any;
       addI(a: any, b: any) {
           return a+b;
       }
       subI(a: any, c: any) {
          return a+c;
       }
    
       static M1(){
           let x= Maths.addF(5,6);
            let y=Maths.SUM1.addC(10,20);
           let z=Maths.SUM1.subC(10,20)
            var ref=Maths.SUM1;
            ref.addC(100,200);
            ref.subC(200,2);
            let ref2=Maths;
            console.log(x)
            console.log(y)
            console.log(z)
        }

        static M2(){
           let  x= Maths.nestedNameSpace.addNestedF(1,2);
            let y=Maths.nestedNameSpace.SUM1Nested.addNestedC(30,40);
           let z=Maths.nestedNameSpace.SUM1Nested.subNestedC(50,60)
            var ref=Maths.nestedNameSpace.SUM1Nested;
            ref.addNestedC(100,200);
            ref.subNestedC(200,2);
            let ref2=Maths;
            console.log(x)
            console.log(y)
            console.log(z)
        }

}
test.M1();
test.M2()

