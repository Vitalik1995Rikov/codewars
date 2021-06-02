function palindrom(str) {
    let palind = str.toLowerCase();
    let newPalind = palind.split('').reverse().join('');

    if (newPalind == str) {
        console.log('it is palindrom')
    } else {
        console.log('it isnot palindrom')
    }
}

palindrom('texet');