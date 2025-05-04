// =========================================
// Exercise 1: Insert an Element at the End
// =========================================

// STEP 1: Define an array named "games" with at least three game titles.
// STEP 2: Use splice() to insert a new game at the end of the array without removing anything.
// STEP 3: Log the updated "games" array.

let games = ["GTA 5", "Fortnite", "CSGO"];
console.log(`Games before splice: ${games}`);
games.splice(-1, 0, "Elden Ring");
console.log(`Games after splice: ${games}`);

// =========================================
// Exercise 2: Insert an Element at the Beginning
// =========================================

// STEP 1: Define an array named "languages" with at least three programming languages.
// STEP 2: Use splice() to insert a new language at the beginning of the array without removing anything.
// STEP 3: Log the updated "languages" array.

let languages = ["English", "Spanish", "Dutch"];
console.log(`Languages before splice: ${languages}`);
languages.splice(0, 0, "Japanese");
console.log(`Languages after splice: ${languages}`);


// =========================================
// Exercise 3: Replace Multiple Elements
// =========================================

// STEP 1: Define an array named "tools" with at least five items.
// STEP 2: Use splice() to replace the 2nd and 3rd items with two new tools.
// STEP 3: Log the updated "tools" array.
let tools = ["Hammer", "Spanner", "Wrench", "Nut", "Bolt"];
console.log(`Tools before replacing ${tools}`);
tools.splice(1, 2, "Stethoscope", "Charger");
console.log(`Tools after replacing ${tools}`);



// =========================================
// Exercise 4: Remove All Except the First Two
// =========================================

// STEP 1: Define an array named "movies" with at least five movie titles.
// STEP 2: Use splice() to remove all items except the first two.
// STEP 3: Log the updated "movies" array.
let movies = ["Sinners", "Creed", "Cloudy with a Chance of Meatballs", 
    "Jurassic Park", "Cars"];
console.log(`Movies before removing items: ${movies}`);
movies.splice(2, (movies.length - 2))
console.log(`Movies before removing items: ${movies}`);
// =========================================
// Exercise 5: Remove Middle Element
// =========================================

// STEP 1: Define an array named "days" with exactly five day names.
// STEP 2: Use splice() to remove the middle element (the 3rd day).
// STEP 3: Log the updated "days" array.

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log(`Days before removing middle item: ${days}`);
days.splice(Math.floor(days.length/2), 1);
console.log(`Days before removing middle item: ${days}`);
