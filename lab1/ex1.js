function challenge(width,height){
    let rectangleString = '';
    for(let i=0; i<height; i++){
        rectangleString += "*".repeat(width)+ '\n';
    }
    return rectangleString;
}
console.log(challenge(5,-2));