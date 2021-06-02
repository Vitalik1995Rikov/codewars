function calcType(arg1, arg2, result) {
    switch (result) {
        case (arg1 + arg2):
        console.log('addition');
        break;

        case (arg1 - arg2):
        console.log('substraction');
        break;

        case (arg1 * arg2):
        console.log('multiplaction');
        break;

        case (arg1 / arg2):
        console.log('division');
        break;

        default:
            console.log('error');
    }
}

calcType(27, 3, 24);
