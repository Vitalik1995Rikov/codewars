function duplicateCode(text) {
   let arr = text.split('').sort();

   for (let i = 0; i < arr.length; i++) {
         if (arr[i] == arr[i + 1]) {
            console.log(')');
      } else {
         console.log('(')
      }
   
   }
   
}

duplicateCode('mama');

