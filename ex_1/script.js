let arr = [];

function squareDigits(){
   
   arr = Array.from(arguments);
   let newArr = [];
   for (let number of arr) {
      let num = 0;
      num = number * number;
      newArr.push(num) 
   }
   return newArr;
 }

 console.log(squareDigits(123));


