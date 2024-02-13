function Max(arr:number[]) {
    if (arr.length === 0) {
        console.log("The array is empty.");
        return; 
    }

    let max:number = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
      
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max; 
}