// variables
const image = document.getElementById('image');
const statusDisplay = document.getElementById('status');
const bgColor = document.getElementById('main');

function changeColor(){
    bgColor.classList.add('online');
}

async function connectionStatus(){
    try {
        //fetch results --> URL
        const fetchResult = await fetch ('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date().getTime()));

        //setting image
        image.src = "./image/online.png";

        //changing bg Color
        changeColor();

        return fetchResult.status >= 200 && fetchResult.status < 300;
    }
    catch(error){
        // console.log(error)
        statusDisplay.textContent = "OOPS!!! Your Internet Connection is down!";

        //setting image
        image.src = "./image/offline.png";
        bgColor.classList.remove('online');
    }
}

//Check the Connection when the page loads
window.addEventListener("load" , async (event) => {
    if(connectionStatus()){
        statusDisplay.textContent = "YOU ARE ONLINE!";
    }
    else {
        statusDisplay.textContent = "YOU ARE OFFILNE";
    }
})

//Monitor the CONNECTION after ever 3 seconds
    setInterval(async () => {
        const result = await connectionStatus();
        if(result) {
            statusDisplay.textContent = "You are ONLINE , Connection Looks GOOD!";
            changeColor();
        }
    } , 3000);