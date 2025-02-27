// scripts.js

// Example Using a for loop to print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`Number: ${i}`);
}

// Using a while loop to print a list of hobbies
let hobbies = [
  "Japanese",
  "Chinese",
  "Korean",
  "Foreign Languages",
  "Roblox",
  "GitHub",
  "Hosting",
  "School Clubs",
  "Attending Workshops",
  "Arcade"
];

for(let i = 1; i<= hobbies.length ; i++){

  let index = 0; // Resets for while loop

  while (index < hobbies.length) {
    
    // Printing the hobbies in-order with for loop numbering.
    console.log(`Hobby ${i}: ${hobbies[i - 1]}`);

    index++;
  }
}