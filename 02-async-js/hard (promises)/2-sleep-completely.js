/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
setTimeout(function(){console.log("Thread running after "+ seconds + " seconds")},1000*seconds);
}

sleep(5);