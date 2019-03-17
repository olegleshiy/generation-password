let uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbersCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialCharacters = ["#", "@", "$", "&", "%", "?"];
let lengthPassword = document.querySelector(".length-password");
let lengthRange = document.querySelector(".length-range");
let uppercase = document.querySelector(".uppercase");
let lowercase = document.querySelector(".lowercase");
let number = document.querySelector(".number");
let special = document.querySelector(".special");
let getPassword = document.querySelector(".get-password");
let copy = document.querySelector(".copy");
let result = document.querySelector(".result");
let resultInfo = document.querySelector(".result-info");
let button = document.querySelector(".button");
let input = document.querySelectorAll("input");
let el = [];

// copy password to clipboard
copy.addEventListener("click", () => {

    let range = document.createRange();
    range.selectNode(result);
    window.getSelection().addRange(range);

    try {
        let copyClone = document.execCommand('copy');
        let msg = copyClone ? 'successful' : 'unsuccessful';
        resultInfo.innerHTML = " Password successfully copied ";
        setTimeout(infoPassword, 2000);
        console.log('Copy password command was ' + msg);
    } catch(err) {
        console.log('Oops, unable to copy');
    }
    window.getSelection().removeAllRanges();

});
lengthRange.addEventListener("input", getAndInsertLengthPassword);
getPassword.addEventListener("click", getArrayPassword);
getPassword.addEventListener("click", isChecked);

// connect values
function getAndInsertLengthPassword() {
    lengthPassword.innerHTML = lengthRange.value;

    infoPassword();
    getArrayPassword();

}

// clear array "el";
// check item if is Checked;
// if true, push item to array "el";
function isChecked (){

    el = [];

    for (let i = 0; i < input.length; i++){
        if(input[i].checked) {
            el.push(input[i]);
        }
    }

}

// create array "passwordArray";
// check item if is checked;
// if true, concat item to array "passwordArray";
// sort and lay out at random;
// clear the string in the variable "out";
// converts from string using function "parseInt";
// get random integer from "0" to "passwordArray.length";
// output the resulting value to the HTML page;
function getArrayPassword(){

    let passwordArray = [];

    if(uppercase.checked) {
        passwordArray = passwordArray.concat(uppercaseCharacters);
    }
    if(lowercase.checked) {
        passwordArray = passwordArray.concat(lowercaseCharacters);
    }
    if(number.checked) {
        passwordArray = passwordArray.concat(numbersCharacters);
    }
    if(special.checked) {
        passwordArray = passwordArray.concat(specialCharacters);
    }
    if(passwordArray.length == 0) {
        alert("ВЫБЕРИТЕ ОДИН ИЛИ НЕСКОЛЬКО СИМВОЛОВ");
    }else{
        passwordArray.sort(arrayRandom);

        let out = '';

    
        for( let i = 0; i < parseInt(lengthRange.value); i++ ) {
            out += passwordArray[randomInteger(0, passwordArray.length-1)];
        }
        result.innerHTML = out;
    }
}

// get random integer;
function randomInteger(min, max) {

    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;

}

// get random values;
function arrayRandom() {

    return Math.random() - 0.5;

}

// check password length;
// show password security information to the HTML page;
function infoPassword() {

    let length = lengthRange.value;

    for( let i = 0; i < el.length; i++ ) {

        if( length <= 8 ) {
            resultInfo.innerHTML = " easy password ";
            resultInfo.style.color = "red";
        }
        if( length > 8 && length <= 14 ){
            resultInfo.innerHTML = " middle password ";
            resultInfo.style.color = "orange";
        }
        if( length > 14 ){
            resultInfo.innerHTML = " hard password ";
            resultInfo.style.color = "green";
        }

    }

}

button.addEventListener("mousedown", () => {

    if(!false) {
        button.style.boxShadow = "#878787 0 0 0";
    }

});
button.addEventListener("mouseup", () => {

    if(!false) {
        button.style.boxShadow = "#878787 2px 2px 2px";
    }

});

button.addEventListener("touchstart", () => {

    if(!false) {
        button.style.boxShadow = "#878787 0 0 0";
    }

});
button.addEventListener("touchend", () => {

    if(!false) {
        button.style.boxShadow = "#878787 2px 2px 2px";
    }

});


getAndInsertLengthPassword();
isChecked ();
getArrayPassword();
infoPassword();
