function fibonach (num) {
    if (num < 2) {
        return num;
    }
return fibonach(num - 1) + fibonach(num - 2);
}

console.log(fibonach(3));