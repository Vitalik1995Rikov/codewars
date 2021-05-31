function numberNine(number) {
    let count = 0;
    for (let i = 0; i <= number; i++) {
        let str = i.toString().split('');
            for (let j = 0; j < str.length; j++) {
                if (str[j] == 9) {
                    count++;
                }
            }
    }
    console.log(count);
}

numberNine(30);