
const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

function insertCurrentName(evt) {
    if (evt.currentTarget.value === "") {
        outputNameRef.textContent = 'незнакомец'
    } else {
        outputNameRef.textContent = evt.currentTarget.value;
    }
};

inputNameRef.addEventListener('input', insertCurrentName);