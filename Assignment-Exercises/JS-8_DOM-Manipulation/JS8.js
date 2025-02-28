// your code starts here

const counter = document.querySelector("#counter-text");
const subtract = document.querySelector("#button-subtract");
const add = document.querySelector("#button-add");


let counterVal = 0;

subtract.addEventListener("click", event => {
    
                        // Decrement the value
    counter.textContent = --counterVal;
});

add.addEventListener("click", event => {

                        // Increment the value
    counter.textContent = ++counterVal;
});
