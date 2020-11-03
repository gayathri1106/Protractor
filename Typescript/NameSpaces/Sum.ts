namespace Maths{
    
export var num =10;
    export class SUM1{
          static addC(a: any,b: any){
            return a+b;
           }
            static subC(a: number,c: number){
            return a-c;
           }
    }
    
    export interface sumInterFace{
      
        Ia: any;
        Ib: any;
       addI(a: any,b: any);
       subI(a: any,c: any);
      
      
        
    }

export function addF(a: number,b: number){
 return a+b;
}
function subF(a: number,c: number){
 return a-c;
}
export namespace nestedNameSpace{

    export var numNested =10
    export class SUM1Nested{
          static addNestedC(a: any,b: any){
            return a+b;
           }
            static subNestedC(a: number,c: number){
            return a-c;
           }
    }
    
    export interface sumNestedInterFace{
      
        INesteda: any;
        INestedb: any;
       addNestedI(a: any,b: any);
       subNestedI(a: any,c: any);
      
      
        
    }

export function addNestedF(a: number,b: number){
 return a+b;
}
function subNestedF(a: number,c: number){
 return a-c;
}

}

}



