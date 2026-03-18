let time = 3600; 
let timer;
let running = false;

function updateDisplay(){

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerText =
    minutes + ":" + seconds;
}

function startTimer(){

    if(!running){

        running = true;

        timer = setInterval(function(){

            if(time > 0){
                time--;
                updateDisplay();
            }
            else{
                clearInterval(timer);
                alert("Time is up!");
            }

        },1000);

    }

}

function pauseTimer(){
    clearInterval(timer);
    running = false;
}

function resetTimer(){

    clearInterval(timer);
    time = 3600;
    running = false;
    updateDisplay();

}

updateDisplay();