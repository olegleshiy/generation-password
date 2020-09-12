(() => {
    const uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numbersCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const specialCharacters = ['#', '@', '$', '&', '%', '?'];
    const lengthPassword = document.querySelector('.length-password');
    const lengthRange = document.querySelector('.length-range');
    const uppercase = document.querySelector('.uppercase');
    const lowercase = document.querySelector('.lowercase');
    const number = document.querySelector('.number');
    const special = document.querySelector('.special');
    const getPassword = document.querySelector('.get-password');
    const copy = document.querySelector('.copy');
    const result = document.querySelector('.result');
    const resultInfo = document.querySelector('.result-info');
    const input = Array.from(document.querySelectorAll('input'));
    document.querySelector('.year').innerHTML = `${ new Date().getFullYear() }`;
    const el = inputChecked();

    // copy password to clipboard
    copy.addEventListener('click', () => {

        let range = document.createRange();
        range.selectNode(result);
        window.getSelection().addRange(range);

        try {
            let copyClone = document.execCommand('copy');
            let msg = copyClone ? 'successful' : 'unsuccessful';
            resultInfo.innerHTML = ' Password successfully copied ';
            setTimeout(infoPassword, 2000);

            console.log('Copy password command was ' + msg);
        } catch (err) {
            console.error('Oops, unable to copy');
        }
        window.getSelection().removeAllRanges();

    });
    lengthRange.addEventListener('input', getAndInsertLengthPassword);
    getPassword.addEventListener('click', getArrayPassword);
    getPassword.addEventListener('click', inputChecked);
    input.forEach(i => i.addEventListener('click', getAndInsertLengthPassword));

    // connect values
    function getAndInsertLengthPassword() {
        lengthPassword.innerHTML = lengthRange.value;
        infoPassword();
        el.length >= 1 ? getArrayPassword() : false;
    }

    // clear array 'el';
    // check item if is Checked;
    // if true, push item to array 'el';
    function inputChecked() {
        return input.filter(i => i.checked === true);
    }

    // create array 'passwordArray';
    // check item if is checked;
    // if true, concat item to array 'passwordArray';
    // sort and lay out at random;
    // clear the string in the variable 'out';
    // converts from string using function 'parseInt';
    // get random integer from '0' to 'passwordArray.length';
    // output the resulting value to the HTML page;
    function getArrayPassword() {

        let passwordArray = [];

        if (uppercase.checked) {
            passwordArray = passwordArray.concat(uppercaseCharacters);
        }
        if (lowercase.checked) {
            passwordArray = passwordArray.concat(lowercaseCharacters);
        }
        if (number.checked) {
            passwordArray = passwordArray.concat(numbersCharacters);
        }
        if (special.checked) {
            passwordArray = passwordArray.concat(specialCharacters);
        }
        if (passwordArray.length === 0) {
            alert('SELECT ONE AND MORE SYMBOLS');
        } else {
            passwordArray.sort(arrayRandom);

            let out = '';

            for (let i = 0; i < parseInt(lengthRange.value); i++) {
                out += passwordArray[randomInteger(0, passwordArray.length - 1)];
            }
            result.innerHTML = out;
        }
    }

    // get random integer;
    function randomInteger(min, max) {
        return Math.round(min - 0.5 + Math.random() * (max - min + 1));
    }

    // get random values;
    function arrayRandom() {
        return Math.random() - 0.5;
    }

    // check password length;
    // show password security information to the HTML page;
    function infoPassword() {

        const length = lengthRange.value;

        for (let i = 0; i < el.length; i++) {

            if (length <= 8) {
                resultInfo.innerHTML = ' easy password ';
                resultInfo.style.color = 'red';
            }
            if (length > 8 && length <= 14) {
                resultInfo.innerHTML = ' middle password ';
                resultInfo.style.color = 'orange';
            }
            if (length > 14) {
                resultInfo.innerHTML = ' hard password ';
                resultInfo.style.color = 'green';
            }

        }

    }
    getAndInsertLengthPassword();
    getArrayPassword();
    infoPassword();
})();
