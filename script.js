const input = document.getElementById("input");
const output = document.getElementById("output");

function translate(input) {
    let translated = "";

    translated += input.substring(1);
    translated += input.charAt(0) + "ay";

    return translated;
}

input.oninput = function() {
    let tokens = input.value.split(" ");
    let finalStr = "";

    for(let i = 0; i < tokens.length; i++) {
        finalStr += (i == tokens.length - 1) ? translate(tokens[i]) : translate(tokens[i]) + " ";
    }

    output.innerText = finalStr;
}