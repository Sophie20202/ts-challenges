function capitalizeWord(sentence:string) {
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}