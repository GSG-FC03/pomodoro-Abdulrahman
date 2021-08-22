console.log("asdasd");

"use strict";
  
let Time = 1499; // time in seconds
let mode = "session";
let mins;
let secs;
// const counter = document.querySelector("p");

var countdownID;
let bell = document.querySelector("audio")
// get all the elements
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let message = document.getElementById("message");
// let test = document.getElementById("test");

// register the buttons
const start = document.getElementById("start");
start.addEventListener("click", startTimer, false);  

const stop = document.getElementById("stop");
stop.addEventListener("click", stopTimer, false);

const reset = document.getElementById("reset");  
reset.addEventListener("click", resetTimer, false);


// COUNTER ========================================================
function counter() {
  
    // calculate the minutes and seconds from Time
    mins = Math.floor(Time / 60);
    secs = Time - mins * 60;
     // change the HTML to show new minutes and seconds
  minutes.innerHTML = (mins < 10 ? '0' : '') + mins;
  seconds.innerHTML = (secs < 10 ? '0' : '') + secs;

  // switch modes if timer ends
  if (Time == 0) {
    
    if (mode == "session") {
      
      // Break is 5min 
      mode = "cooldownBrack";    
      Time = 300;
      message.innerHTML = "Break";
      document.body.style.background = "red"
      bell.play()
      document.querySelector('#counter').textContent++;
    } else if (mode == "cooldownBrack") {
      
        // switch back to normal 25min mode
        mode = "session";    
        Time = 1499;  
        minutes.innerHTML = "25";
        seconds.innerHTML = "00";
        message.innerHTML = "Work";
        document.body.style.background = "#0d5b85"
        start.focus();
         // show start button
      start.style.display = "inline-block"; 
      stop.style.display = "none"; 
         // stop timer
      clearInterval(countdownID);
    }    
     
  } else {
    // decrement
    Time = Time - 1; 
  }
        
}



// ACTIONS =======================================================

// start timer
function startTimer() {
  // start timer
  countdownID = setInterval("counter()", 1000);
  // show stop button
  start.style.display = "none"; 
  stop.style.display = "inline-block "; 
} 

// stop timer
function stopTimer() {
    // stop timer
    clearInterval(countdownID);
     // show start button
  start.style.display = "inline-block "; 
  stop.style.display = "none"; 
  }

  // reset timer
function resetTimer() {
    // reset big time
    Time = 1499;
  }
