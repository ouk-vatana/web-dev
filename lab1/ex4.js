function countChar(word,char){
    let count = 0;
    for(let i=0;i<word.length;i++){
        if(word[i]=== char){
            count +=1;
        }
    }
    return count;
}
console.log(countChar("banana","a"));