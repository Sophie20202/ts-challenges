function shiftArrLeft(arr:number[]) {
    if (arr.length <= 1) {
        return arr;
    }

    let firstElement:number | undefined = arr.shift();
    if (firstElement !== undefined) {
    arr.push(firstElement);
    }
    return arr;
}