const result = document.getElementById("result");
const ageInput = document.getElementById("ageInput");

function checkAge() {

    let age = ageInput.value;

    if(age >= 0 && age <= 12){
            
        // I didn't output "a/an" because I want to keep my output clean.
        result.textContent = "You are a: Child";
    }

    else if(age >= 13 && age <= 19){
        result.textContent = "You are a: Teenager";
    }

    else if(age >= 20){
        result.textContent = "You are an: Adult";
    }

    else{
        result.textContent = "Invalid age. Please enter a valid number.";
        result.style.color = "red";
        result.style.backgroundColor = "#ffcfcf";
    }

}

checkAge();