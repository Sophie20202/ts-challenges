function removeDuplicats(array:number[]) {
    
    let uniqueValues = {};

    for (let value of array) {
        uniqueValues[value] = true;
    }
    let uniqueArray = Object.keys(uniqueValues);

    uniqueArray = uniqueArray.map(Number[0]);

    return uniqueArray;
}