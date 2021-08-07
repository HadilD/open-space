const password = "TrustNo1";
let change = 0;
let intervalID;

document.getElementById("ok-button")
        .addEventListener("click", function () {
            if (document.getElementById("password").value === password) {
                document.querySelectorAll("input[type=checkbox], input[type=range]")
                    .forEach(input => input.disabled = false);
            }
        });
let checkboxes = document.querySelectorAll("input[type=checkbox]");
let ranges = document.querySelectorAll("input[type=range]");

checkboxes.forEach(checkbox => checkbox.onchange = function() {
    checkControls()
});
ranges.forEach(range => range.onchange= function(){
    checkControls()
});

function checkControls() {
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == false) {
            return;
        }
    }
    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i].value != 100) {
            return;
        }
    }
    document.getElementById("launch-button").disabled = false;
    alert("You can now launch the rocket. Please be careful!");
}
document.getElementById("launch-button").addEventListener("click", launch);

function launch() {
    intervalID = setInterval(move, 1);
}

function move() {
    document.getElementById("rocket").style.bottom = change+"px";
    document.getElementById("rocket").style.left = change+"px";
    change++;
    if (top == 0 || right == 0) {
        clearTimeout(intervalID);
    }
}