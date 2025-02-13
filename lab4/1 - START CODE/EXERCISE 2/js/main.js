 

// Generate a random hexadecimal color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// When clicking on the RANDOM COLOR button:
const button = document.querySelector("button");
const resultColor = document.getElementById("result-color");
button.addEventListener("click", () => {
    // -	Generate a random color
    const randomColor = getRandomHexColor();
    
    // -	Set the body background color with this color
    document.body.style.backgroundColor = randomColor;
    // -	Set the color label with the value of this color
    resultColor.textContent = randomColor;
});

 

