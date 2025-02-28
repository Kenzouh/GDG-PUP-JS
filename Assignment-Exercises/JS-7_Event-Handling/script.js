const colorButton = document.getElementById("colorButton");
const body = document.getElementById("body");

// Collection of background colors upon clicking.
const bgColors = ["#750085", "#36c02f", "#002198", 
                  "#00613d", "#09ff00", "#860060", 
                  "#d9ff00", "#dec700", "#ffae00", 
                  "#1d1b43", "#83f6f6", "#e6ffc3",
                  "#3eaeb0", "#a4f0e1", "#403eb7",
                  "#62d36b", "#cd5d34", "#281dbc",
                  "#e7c899", "#7af0d3", "#e853c8"];

let bgColorsIndex = 0;

colorButton.addEventListener("click", event => {
    body.style.backgroundColor = bgColors[bgColorsIndex];
    bgColorsIndex = (bgColorsIndex + 1) % bgColors.length; // Applies the next colors.
});