let [hours, minutes, seconds] = [0, 0, 0];
let displayTime = document.getElementById('displayTime');
let timer = null;

function stopWatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    displayTime.innerHTML = h + ':' + m + ':' + s;
}

function startWatch() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

function watchStop() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

function resetWatch() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}












/*

The `clearInterval` function is used in JavaScript to stop the execution of a recurring function that was previously set up using the `setInterval` method. It clears the timer previously created by `setInterval`, effectively stopping the execution of the associated function.

Here's an example to help you understand how `clearInterval` works:

```javascript
let counter = 0;

// Function to be executed every second
function incrementCounter() {
  counter++;
  console.log(counter);
}

// Set up the interval to execute the function every second
let timer = setInterval(incrementCounter, 1000);

// After 5 seconds, stop the execution of the function
setTimeout(function() {
  clearInterval(timer);
  console.log("Timer stopped!");
}, 5000);
```

In this example, we have a `counter` variable that starts at 0. We use `setInterval` to execute the `incrementCounter` function every second, which increments the counter and logs its value to the console.

After 5 seconds (5000 milliseconds), we call `clearInterval(timer)`, passing in the timer variable that holds the reference to the interval created by `setInterval`. This stops the execution of the `incrementCounter` function.

As a result, the output in the console would be:
```
1
2
3
4
5
Timer stopped!
```

The `clearInterval` function ensures that the specified interval is no longer active, preventing the function from executing beyond the desired time.


*/