export module newModule{
export var num=10

    export class SUM1{
          static addC(a: any,b: any){
            return a+b;
           }
            static subC(a: number,c: number){
            return a-c;
           }
    }
    
    export interface sumInterFace{
      
        addI();
       subI();
      
      
        
    }

export function addF(a: number,b: number){
 return a+b;
}
function subF(a: number,c: number){
 return a-c;
}


}
let x=newModule.SUM1;
console.log(x.addC(1,2))