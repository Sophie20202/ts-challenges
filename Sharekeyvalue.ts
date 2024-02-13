function shareKeyValue(obj1: { [key: string]: string }, obj2: { [key: string]: string }): boolean {
    for (let key1 in obj1) {
        for (let key2 in obj2) {
            if (obj1.hasOwnProperty(key1) && obj2.hasOwnProperty(key2) && obj1[key1] === obj2[key2]) {
                return true;
            }
        }
    }
    return false;
}