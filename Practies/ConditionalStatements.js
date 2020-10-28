//if
var a=3;
var b=8;
var c=5;
if (a<b) {
    console.log("a is less than b")
    
  } else { 
    console.log("a is greater than b")
  }
  //else if
  if (a>b && a>c) {
    console.log("a is highest number")
  } else if (b>a && b>c) {
    console.log("b is highest number")
  } else {
    console.log("c is highest number")
  }
  //************************************************************************** */
  //switch
  switch (4) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day)
  //*********************************************************************************** */
  //Loops
  //for loop
  var str='abcba';
  var str1='';
  for(var i=str.length;i>=0;i--){
var c=str.charAt(i)
str1=str1+c
  }
  
  if(str==str1){
    console.log(str,"is polindrome")
  }else{
    console.log(str,"is not polindrome")
  }
  //for in
var str='madam';
var x;
var str2='';
for (x in str) {
  str2=str[x]+str2
}
if(str==str2){
  console.log(str,"is polindrome")
}else{
  console.log(str,"is not polindrome")
}

var txt = "JavaScript";
var x;
for (x in txt) {
  console.log(txt[x]);
}

var person = {
  firstName: "gayathri",
  lastName: "kapati",
  age: 25,
};
for (x in person) {
  console.log(person[x]);
}
/*var person = {
  firstName: "thulsi",
  lastName: "kapati",
  age: 26,
};
for (x of person) {//error person is not iterable
  console.log(x);
}
*/
//******************************************************************************* */
//while
var numbers=[1,2,2,8,3,5,8]
var i=0;
while(i<numbers.length){
  var j=i+1;
  while(j<numbers.length){
    if(numbers[i] == numbers[j]){
  console.log('Duplicate nums are ', numbers[i])
    }
  j++;
  }
i++;
}


//do while
var i=0;
do{
  i++;
  j=i+1;
  if(j==numbers.length){
    break;
      }
      do{
    if(numbers[i] == numbers[j]){
      console.log('Duplicate nums are ', numbers[i])
        }
        j++
        }while(j<numbers.length)
   } while(i<numbers.length)
