//anonymous function
const getColor = () => {
    //for hexa decimal Number(16777215)
    const randomNumber = Math.floor(Math.random()*16777215)
    //for hex code
    const randomColor = "#"+randomNumber.toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("color-code").innerText = randomColor;

    //for copying the randomColor to the ClipBoard!
    navigator.clipboard.writeText(randomColor);
}
//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
//init call
getColor();