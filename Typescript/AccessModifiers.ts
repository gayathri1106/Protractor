 export class Employee {  
    public static EMPCode1_P: number;  
    public  EMPCode2_P: number;

    private static EMPName1_Pr: string;
    private EMPName2_Pr: string;  

    protected static EMPType1_Pro:string;
    protected EMPType2_pro:string;
       public static M1(){
    let obj=new Employee;
         obj.EMPCode2_P
         obj.EMPName2_Pr
         obj.EMPType2_pro
         Employee.EMPCode1_P
         Employee.EMPName1_Pr
         Employee.EMPType1_Pro

         //can access all 
        }
    }  

 //out side of class     
function Office () {
    let obj=new Employee;
    obj.EMPCode2_P
    Employee.EMPCode1_P
    // This only can access (public )
}


// anthor class
class CaftArea{
    
    ground(){
        let obj=new Employee;
        obj.EMPCode2_P
        Employee.EMPCode1_P
    }
}
// anthor class with extends
class Meeting extends Employee{
    
    ground(){
        let Mobj=new Meeting;
        Mobj.EMPCode2_P
        Mobj.EMPType2_pro

        Meeting.EMPCode1_P
       Meeting.EMPType1_Pro
       let obj=new Employee;

       obj.EMPCode2_P

        Employee.EMPCode1_P
        Employee.EMPType1_Pro

       

    }
}


/////////
