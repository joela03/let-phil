// ✅ Function Name: fetchUser
// This is an async function that fetches a single random user and displays the result

// 1️⃣ Use 'await fetch()' to send a GET request to 'https://randomuser.me/api/'
//    Store the response in a variable called 'response'

// 2️⃣ Check if the response is not OK using 'if (!response.ok)'
//    If it's not OK, throw an error with a message using 'throw new Error(...)'

// 3️⃣ Use 'await response.json()' to convert the raw response into a JavaScript object
//    Store the result in a variable called 'data'

// 4️⃣ Use 'document.getElementById("output")' to find the HTML element where you want to show the data
//    Use '.textContent' to set the content of that element to the stringified version of the data
//    Use 'JSON.stringify(data, null, 2)' to make the output pretty (indented)

// 5️⃣ Wrap everything in a try...catch block to handle potential errors
//    If an error happens, catch it and log it using 'console.error(error)'

// ✅ Function Name: fetchUser
// This function uses async/await to fetch a random user from the API and display it in the browser

async function fetchUser() {

    try {const response = await fetch("https://randomuser.me/api/");

    if (!response.ok) throw new Error();
    
    const data = await response.json();

    const output = document.getElementById("output");

    output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error(error)
    }
}

fetchUser();