var optionSelected = false;
var error = document.getElementById("error");
var value = 0;
var message = document.getElementById("message");
var boxRate = document.getElementById("box-rate");
var boxTankYou = document.getElementById("box-thankyou");

function select(element) {
    var options = document.getElementsByClassName("opt");

    for (let i = 0; i < options.length; i++) {
        options[i].style.backgroundColor = "#262d37"; 
    }

    element.style.backgroundColor = "#74828f";
    optionSelected = true;
    value = element.value;
}

function submit() {
    if (optionSelected) {
        message.innerHTML = "You selected " +value+ " out of 5";
        boxRate.style.display = "none";
        boxTankYou.style.display = "block";
    } else {
        error.style.display = "block";
    }
}

function closeError() {
    error.style.display = "none";
}