
try{  
    var a= [1,2,3]; 
    console.log(a); 
    console.log(b); 
    }catch(e){  
    console.log(e.message); //Handling error  b is not defined
    }

    


try{
var values=[4,3,2,8,6,1]
console.log(values.sortt());//sortt is not a function
} catch(e){  
    console.log(e.message);
    }finally{
        console.log(values.sort())
    }