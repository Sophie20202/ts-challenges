function factoriall(n:number) {
    
    if (n === 0 || n === 1) {
        return 1;
    } 
    else {
        return n * factoriall(n - 1);
    }
}