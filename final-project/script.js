window.addEventListener('DOMContentLoaded', () => {
    loadQuote();
    renderHabits();

    const refreshBtn = document.getElementById("refresh-btn");
    refreshBtn.addEventListener("click", loadQuote);
});

async function fetchQuote() {
    const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
    const headers = {
        'X-Api-Key': 'xbpbLrtCSgJz5YBJpEHwFg==ReVLEvLSqZXzIbmc'
    };

    try {
        // Fetch with API Key
        const response = await fetch(apiUrl, { 
            method: 'GET',
            headers: headers 
        });

        // Handle bad response
        if (!response.ok) throw new Error();

        // Parse data
        const data = await response.json();
        const quote = data[0].quote;
        const author = data[0].author;
        
        return [quote, author];
    }
    catch (error) {
        console.error(error);
    };
}

async function loadQuote() {
    // Find quote element and set it to loading
    const quoteElement = document.getElementById('quote-text');
    quoteElement.textContent = 'Loading...';
    
    // Fetch Quote
    const [quote, author] = await fetchQuote();
    // Add fetched quote to element
    quoteElement.textContent = `"${quote}" - ${author}`;
}


function addHabit() {
            const input = document.getElementById('habit-input');
            const habitText = input.value.trim();
            
            if (habitText === '') {
                alert('Please enter a habit!');
                return;
            }
            
            if (habitText.length > 100) {
                alert('Habit text must be less than 100 characters!');
                return;
            }
            
            // Create new habit object
            const newHabit = {
                id: habitIdCounter++,
                text: habitText,
                completed: false
            };
            
            // Add to habits array
            habits.push(newHabit);
            
            // Clear input
            input.value = '';
            
            // Updates habit list
            renderHabits();
        }


let habits = [
            { id: 1, text: "This is an example habit", completed: false }
        ];
let habitIdCounter = 1;

function renderHabits(){
    // Sets Habit List content to empty
    const habitsList = document.getElementById('habits-list');
    habitsList.innerHTML = '';

    // Creates new li for each habit in our habit list
    habits.forEach(habit => {
        const li = document.createElement('li');
        li.className = `habit-item ${habit.completed ? 'completed' : ''}`;
        li.setAttribute("data-id", habit.id);

        li.innerHTML = `
            <span class="habit-text">${habit.text}</span>
            <div class="task-bt">
                <button>Completed</button>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
            `;
        
            habitsList.appendChild(li);
    });
};
