function countWord(sentence){
    let count = 0;
    let inWord = false;
    for(let i=0; i<sentence.length;i++){
        if(sentence[i]!==" "&& sentence[i]!=="\n"){
            if (!inWord){
                count++;
                inWord = true;
            }
        }
        else{
            inWord= false;
        }
    }
return count;
}
console.log(countWord("Hello how are you"));