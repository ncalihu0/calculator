function display(value) {
    document.getElementById("result").value += value;
}


// once our display is evaluated, our if statement determines an element is NaN or infinite. If true, it makes it do the input display an error message. If not it outputs the calculation.
function calculate() {
    const display = document.getElementById("result").value;
    const result = eval(display);
    if (isNaN(result) || !isFinite(result)) {
        document.getElementById("result").value = "Error";
    } else {
        document.getElementById("result").value = result;
    }
}

function clearButton() {
    document.getElementById("result").value = "";
}

function percentage() {
    const screen = document.getElementById("result").value;
    const evaluate = screen / 100;
    document.getElementById("result").value = evaluate;
}

function negative() {
    const search = document.getElementById("result").value;
    const change = -search;
    document.getElementById("result").value = change;
}