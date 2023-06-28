/* 
The value 1000 is used in the calculations because it represents the conversion factor 
from milliseconds to other time units (seconds, minutes, hours).In JavaScript's Date object, 
time is represented in milliseconds. Therefore, when calculating the time difference between two dates, 
the result is in millisecond

To convert milliseconds to seconds, we divide by 1000 (since there are 1000 milliseconds in a second).
To convert milliseconds to minutes, we divide by 1000 * 60 (since there are 60 seconds in a minute).
To convert milliseconds to hours, we divide by 1000 * 60 * 60 (since there are 60 minutes in an hour).

*/


const targetDate = new Date("1 Jan 2024");

function newYearEve() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;
//   console.log(timeDifference) --> milliseconds

//----------------------------------------------------------------------------------------------------------------------//
    
//days
    /*
        (1000 * 60 * 60 * 24) is the conversion factor to convert milliseconds to days. It represents the number of milliseconds in one day.
        1000 milliseconds in a second
        60 seconds in a minute
        60 minutes in an hour
        24 hours in a day
        Multiplying these values together gives the number of milliseconds in one day.
        Dividing timeDifference by (1000 * 60 * 60 * 24) gives the number of days remaining until the target date.
    */
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // we are dividing by the number of milliseconds in a day to get the number of days remaining.
    // console.log(days);

//----------------------------------------------------------------------------------------------------------------------//

//hours
    /*
        (1000 * 60 * 60) is the conversion factor to convert milliseconds to hours. It represents the number of milliseconds in one hour.
        1000 milliseconds in a second
        60 seconds in a minute
        60 minutes in an hour
        Multiplying these values together gives the number of milliseconds in one hour.
        Dividing timeDifference by (1000 * 60 * 60) gives the number of hours remaining until the target date.
    
        However, to obtain the remaining hours within a day (0-23 range), we apply the modulo operator % with the divisor set to 24.
        The modulo operator % returns the remainder after dividing the dividend by the divisor.
        By using % 24, we ensure that the hours value stays within the range of 0 to 23, even if the total hours exceed 24.
    */

    const hours = Math.floor(timeDifference / (1000 * 60 * 60) % 24);
    // console.log(hours)

//----------------------------------------------------------------------------------------------------------------------//

//minutes

    //Dividing timeDifference by (1000 * 60) gives the number of minutes remaining until the target date.

    const minutes = Math.floor(timeDifference / (1000 * 60) % 60); 
    //However, to obtain the remaining minutes within an hour (0-59 range), 
    //we apply the modulo operator % with the divisor set to 60.

//----------------------------------------------------------------------------------------------------------------------//

//seconds

    const seconds = Math.floor(timeDifference / (1000) % 60);
    // console.log(seconds)

//----------------------------------------------------------------------------------------------------------------------//


//Applying the Time onto the WebPage
const daysElement = document.getElementById("days").innerText = formatTime(days);
const hoursElement = document.getElementById("hours").innerText = formatTime(hours)
const minutesElements = document.getElementById("minutes").innerText = formatTime(minutes)
const secondsElements = document.getElementById("seconds").innerText = formatTime(seconds)
}

//if days , hours, minutes , seconds are less than 10 add 0
function formatTime(time){
    return time < 10 ? (`0${time}`) : time
}

//initial call

setInterval(newYearEve , 1000);