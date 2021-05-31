function uniqueWord(text) {
   let arr = [];
   let i = 0;
   let word = text[i];

for (let i = 0; i < text.length; i++) {
   switch(word) {
       case text[i]: arr.push(')');
       break;

       default:
           arr.push('(');
   }
}
lastArray = arr.join('');
console.log(lastArray);
}

uniqueWord('222111222');

