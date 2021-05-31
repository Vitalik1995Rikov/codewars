function typeOfData(arr) {
    let obj = {
        number: [], 
        string: [],
        boolean: [],
    };
    for (i = 0; i < arr.length; i++) {
        switch (typeof arr[i]) {
            case 'number':
            obj.number.push(arr[i]);
            break;

            case 'string':
            obj.string.push(arr[i]);
            break;

            case 'boolean':
            obj.boolean.push(arr[i]);
            break;

            default:
                console.log('не создан такой тип в объекте')
        }
    }
    console.log(obj);
}

typeOfData([1, 'text', false, 2, 'word', true]);