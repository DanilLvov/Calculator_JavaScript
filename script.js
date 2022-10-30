let float = false;
let falseOperation = false;
let operatorPressed = false;
let answer = 0

function display(value) {
    if(!falseOperation) {
        document.getElementById("display").value += value;
        let a = document.getElementById("display").value

    }
}

function operator(value) {
    if(!falseOperation) {
        if(!operatorPressed) {
            operatorPressed = true;
        }
        else {
            let a = document.getElementById("display").value
            let b = +eval(a).toFixed(6)
            document.getElementById("display").value = b
        }
        display(value);
        float = false;
    }
}

function count() {
    if (!falseOperation) {
        let a = document.getElementById("display").value
        let b = +eval(a).toFixed(6)
        if (isNaN(b)) {
            document.getElementById("display").value = 'E'
            falseOperation = true;
        }
        else document.getElementById("display").value = b
        operatorPressed = false;
    }
}

function clearDspl() {
    document.getElementById("display").value = "";
    answer = 0
    float = false;
    falseOperation = false;
    operatorPressed = false;
}

function zeroPressed() {
    if (document.getElementById("display").value === "") {
        document.getElementById("display").value += '0.'
    }
    else {display('0')}
}

function floatDot() {
    if (document.getElementById("display").value === "") {
        document.getElementById("display").value += '0.'
        float = true;
    }
    if (!falseOperation && !float) {
        float = true;
        document.getElementById("display").value += '.';
    }
}