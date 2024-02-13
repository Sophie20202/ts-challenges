function countPropertie(obj) {
    let count:number=0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
        }
    }
    return count;
}