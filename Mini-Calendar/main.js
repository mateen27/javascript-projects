const date = document.querySelector('#date');
const day = document.querySelector('#day');
const month = document.getElementById('month');
const year = document.getElementById('year');

//fetching todays date in JavaScript
const todayDate = new Date();
// console.log(todayDate);

const listOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const listOfWeekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//setting up the date on the webpage according to the current date
date.innerHTML = (todayDate.getDate()<10?"0":"") + todayDate.getDate();
day.innerHTML = listOfWeekDays[todayDate.getDay()];
month.innerHTML = listOfMonths[todayDate.getMonth()];
year.innerHTML = todayDate.getFullYear();