const input = document.getElementById("input");
const output = document.getElementById("output");

const pigInput = document.getElementById("pinput");
const englishOutput = document.getElementById("engOutput");

const TRANSLATE = {
    TYPE: {
        EnglishToPig: 1,
        PigToEnglish: 0
    }
}

function translate(input) { // From english into pig latin  (One token at a time)
    input = input.substring(1) + input.charAt(0) + "ay";
    return input;
}

function from(input) { // From pig latin into english (One token at a time)
    input = input.removeAll(".").removeAll("/").removeAll("?").removeAll(",").removeAll("(").removeAll(")").removeAll(";").removeAll('"').removeAll("'").removeAll(":").removeAll("~").removeAll("`").removeAll("!").removeAll("@").removeAll("#").removeAll("$").removeAll("%").removeAll("^").removeAll("&").removeAll("*").removeAll("-").removeAll("_").removeAll("+").removeAll("=").removeAll("{").removeAll("}").removeAll("[").removeAll("]").removeAll("\\").removeAll("\n").removeAll("\r").removeAll("|").removeAll("<").removeAll(">");
    if (input.charAt(input.length - 3) == "y") return input.substring(0, input.length - 3);
    input = input.substring(0, input.length - 2);
    input = input.charAt(input.length - 1) + input.substring(0, input.length - 1);
    return input;
}

input.oninput = function () {
    translatePhrase(TRANSLATE.TYPE.EnglishToPig);
}

pigInput.oninput = function() {
    translatePhrase(TRANSLATE.TYPE.PigToEnglish);
}

function translatePhrase(lang) { // Seperates the phrase and translates them by tokens, then combines them.
    let tokens = (lang) ? input.value.split(" ") : pigInput.value.split(" ");
    let finalStr = "";
    for (let i = 0; i < tokens.length; i++) {
        finalStr += (i == tokens.length - 1) ? (lang) ? translate(tokens[i]) : from(tokens[i]) : (lang) ? translate(tokens[i]) + " " : from(tokens[i]) + " ";
    }
    if (lang) output.innerText = finalStr;
    else englishOutput.innerText = finalStr;
}