let w_minutes = document.getElementById("minutes");
let w_seconds = document.getElementById("seconds");
let bell = document.querySelector("audio")


let playBtn  = document.querySelector(".play");
let pauseBtn = document.querySelector(".pause");

var playTimer;
playBtn.addEventListener('click', function(){
    if(playTimer === undefined){
        playTimer = session()
    } else {
        alert("Timer is already running");
    }
})
function session(){
    minutes = 0;
    seconds = 5;
    document.querySelector(".min").textContent = minutes;
    document.querySelector(".sec").textContent = seconds;

    var minutes_interval = setInterval(minTimer,60000);
    var seconds_interval = setInterval(secTimer,1000);

    function minTimer () {
        minutes = minutes - 1
        document.querySelector(".min").textContent = minutes;
    }
    function secTimer () {
        seconds = seconds - 1
        document.querySelector(".sec").textContent = seconds;
        if (seconds <= 0){
            if(minutes <= 0){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);
                document.getElementById("msg").innerHTML = "Session Completed !! Take a Break";
                document.getElementById("msg").classList.add("show_msg");
                document.querySelector('#counter').textContent++;
            
            }
            seconds = 60;
            bell.play()
    }
  
    }
}