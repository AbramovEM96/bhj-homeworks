
const timerId = document.getElementById("timer");
const countTimer  = function(){
    if (timerId.textContent >= 1){
        timerId.textContent -= 1;
    }	else if(timerId.textContent = 0){
        alert("Вы победили в конкурсе!");
    }
}

setInterval(countTimer,1000);