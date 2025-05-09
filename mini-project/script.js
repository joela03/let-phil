// ✅ Function Name: fetchRandomUsers
// This is an async function that fetches 10 random users from an API

// 1️⃣ Use fetch() with 'await' to send a GET request to https://randomuser.me/api/?results=10
// 2️⃣ Await the JSON response and store it in a variable called 'data'
// 3️⃣ Return only the 'results' array (which contains the 10 users)

async function fetchRandomUsers(){

    // Fetch User Data
    const response = await fetch("https://randomuser.me/api/?results=10");

    // If valid response convert to JSON
    if (!response.ok) throw new Error();
    const data = await response.json();

    // Return Results
    return data.results;
}

// ✅ Function Name: createUserCard
// This function builds and returns a DOM element for a single user

// 1️⃣ Create a <div> element and give it the class 'user-card'
// 2️⃣ Create an <img> element and set its src to the user's large picture
// 3️⃣ Set the image's alt text to the user's full name
// 4️⃣ Create another <div> with the class 'user-info'
// 5️⃣ Inside this div, create an <h2> element showing the user's full name
// 6️⃣ Also create a <p> element showing the user's email
// 7️⃣ Append the <h2> and <p> into the 'user-info' div
// 8️⃣ Append the <img> and 'user-info' div into the 'user-card' div
// 9️⃣ Return the final 'user-card' element

function createUserCard(data){
    // User Card Div
    const div = document.createElement("div")
    div.classList.add("user-card");

    // User Image
    const img = document.createElement("img");
    img.src = data.picture.large;

    // Create User Info Div
    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    // Create Heading
    const heading = document.createElement("h2");
    heading.textContent = `${data.name.first} ${data.name.last}`

    // Create p tag for email
    const email = document.createElement("p");
    email.textContent = data.email;

    // Add content to Information Div
    userInfo.appendChild(heading);
    userInfo.appendChild(email);

    // Add Img and User Info to 
    div.appendChild(img);
    div.appendChild(userInfo);

    // Return Div
    return div
}

// ✅ Function Name: displayUsers
// This function calls fetchRandomUsers and displays the results in the HTML

// 1️⃣ Call fetchRandomUsers() and store the result in a variable named 'users'
// 2️⃣ Select the element with the ID 'user-container' (this is where cards will go)
// 3️⃣ Loop through each user in the 'users' array
//    - For each user, call createUserCard(user)
//    - Append the card to the 'user-container'

async function displayUsers(){
    // Retrieve Users
    const users = await fetchRandomUsers();

    // Select container
    const container = document.getElementById("user-container")

    // Add each user card to the contaienr
    for (i = 0; i < users.length; i ++){
        const userCard = createUserCard(users[i]);
        container.append(userCard);
    };
}

// ✅ Final Step:
// Call displayUsers() at the bottom so everything runs when the page loads
displayUsers();