class a extends b{
    

    
}
   function Prime() {
       
   
    for(var number=3;j<=100;j++){
        let flag = true;
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(number, 'is a prime number');
    } else {
        console.log(number ,'is a not prime number');
    }

    }

}
