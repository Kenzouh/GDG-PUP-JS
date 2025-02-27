// There were no comments here. IDK what was the README.md was saying.

const favoriteMovies = ["The Smurfs", "I Am A Hero", "A Silent Voice", "Zom 100"];

let length = favoriteMovies.length;

console.log(`favoriteMovies.length: ${length}`);

console.log("");

// Same implemention as JS Assignment #4, but for loop without while loop this time.
for(let i = 0; i < favoriteMovies.length; i++){
    console.log(`Fave Movie ${i + 1}: ${favoriteMovies[i]}`);
}