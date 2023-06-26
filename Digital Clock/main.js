window.onload = ()=>{
    
    function buildClock(){
    //creating the Date Object
    const date = new  Date();

    let hours = date.getHours(); // 0 - 23 [24 hrs Format]
    let minute = date.getMinutes(); //0 - 59
    let seconds = date.getSeconds(); // 0 - 59

    //check Conditions for adding 0 at the begning if the time is less than 10
    hours = hours < 10 ? "0" + hours : hours
    minute = minute < 10 ? "0" + minute : minute
    seconds = seconds < 10 ? "0" + seconds : seconds

    //for setting time 
    document.querySelector('#clock-hours').innerText = hours
    document.querySelector('#clock-minutes').innerText = minute
    document.getElementById('clock-seconds').innerText = seconds

    //for updating the clock
    setInterval(buildClock , 1000)
    }

    buildClock();
}