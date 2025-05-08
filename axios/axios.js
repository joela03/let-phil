// ✅ Function Name: fetchUser
// This function will use Axios to make an HTTP GET request to the Random User API

// 1️⃣ Use axios.get('https://randomuser.me/api/')
// This sends a GET request to the API and returns a promise.
// Chain a .then() method to handle the successful response.

// ✅ Variable Name: response
// Inside .then(), define a function that receives the response object.
// This contains the actual data returned by the API.

// ✅ HTML Element ID: output
// Use document.getElementById('output') to select the HTML element where the user data will be shown.
// Use textContent and JSON.stringify to display the data in a clean, readable format.

// 4️⃣ Chain a .catch() method to handle errors
// ✅ Variable Name: error
// If the request fails, define a function that receives the error object.
// Use console.error to print the error for debugging.

function fetchUser(){
    axios.get("https://randomuser.me/api/")
    .then((response) => {
        const output = document.getElementById('output');
        output.textContent = JSON.stringify(response.data, null, 2);
    })
    .catch((error) => {
        console.error(`Error fetching data: ${error}`);
    });

}