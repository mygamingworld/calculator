
let msg = document.getElementById("inp");
let boxes = document.querySelectorAll(".box");

function sum(val) {
    msg.value += val;
}

function total() {
    let sum1 = eval(msg.value);
    msg.value = sum1;
}

function allClear() {
    msg.value = ""
}
function del() {
    msg.value = msg.value.slice(0 , -1);
}
