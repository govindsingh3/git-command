//function to be executed at intervals
function repeatedFunction() {
    console.log('Executing repeated function...');
}

//set an interval (execute repeatedFunction every 1000 milliseconds)
const intervalId = setInterval(repeatedFunction,1000);

//After some time(e.g, 5000 millisecond),stop the interval
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped.');
},5000);