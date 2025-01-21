function average(...input){
    let total=0;
    for(let i=0; i<input.length;i++){
      total += input[i];
    }
    return total/input.length;
}
console.log(average(12,2,13));