function mergeSortedArray(arr1:number[], arr2:number[]) {
    let mergedArray:number[] = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]) ;
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[j]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}