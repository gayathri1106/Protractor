var names=['gayathri','thulsi','sai','gopi']
var values=new Array('a','b',5,'c',true)
var text ='';
names.forEach((value)=>{
    console.log(value)
});

//names[0]='sidhu';
console.log(names.join(' and '))//gayathri and thulsi and sai and gopi
console.log(names.slice(0, 2))//[ 'gayathri', 'thulsi' ]
console.log(names.shift())// removing 1st value from array
console.log(names)


console.log(names)//sidhu thulsi sai
console.log(names.length)//3
console.log(names.pop())//sai
console.log(names.push('gayathri'));
console.log(names)// sidhu thulsi gayathri
console.log(names.reverse());//gayathri thulsi sidhu
console.log(names.unshift('12'));//4
console.log(names.toString());//12 gayathri  thulsi sidhu
console.log(names.sort());//12 gayathri  thulsi sidhu
console.log(names.splice(0,1));//12
console.log(names)//gayathri sidhu thulsi
 
function MinNum() {
    var arr=[1,10,3,6,8,9,20]
    var len = arr.length;
    var min =arr[0];
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
        //console.log(min)
      }
    }
    return min;
  }
 console.log(MinNum());
