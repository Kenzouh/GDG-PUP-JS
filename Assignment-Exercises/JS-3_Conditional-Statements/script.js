const result = document.getElementById("result");
const ageInput = document.getElementById("ageInput");

function checkAge() {

    let age = Number(ageInput.value);

    if(age >= 0 && age <= 12){
            
        // I didn't output "a/an" because I want to keep my output clean.
        result.textContent = "You are a: Child";

        // Removes the error styling.
        result.classList.remove("error");
    }

    else if(age >= 13 && age <= 19){
        result.textContent = "You are a: Teenager";
        result.classList.remove("error");
    }

    else if(age >= 20){
        result.textContent = "You are an: Adult";
        result.classList.add("result");
        result.classList.remove("error");
    }

    else{
        result.textContent = "Invalid age. Please enter a valid number.";

        // Applying the CSS properties and values for error messages.
        result.classList.add("error");
    }
}
