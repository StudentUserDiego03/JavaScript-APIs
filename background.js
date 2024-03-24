let number = 0;
function numberIncrease(){
    number ++;
    postMessage(number);
    setTimeout("numberStop()", 500);
}

