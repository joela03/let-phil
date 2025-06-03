document.addEventListener('DOMContentLoaded', () => {
    // Quote Functionality
    loadQuote();
    renderHabits();

    const refreshBtn = document.getElementById("refresh-btn");
    refreshBtn.addEventListener("click", loadQuote);

    // Habit Functionality
    habitInput = document.getElementById('habit-input')
    habitInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addHabit();
        }
    });
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


let habits = [];
let habitIdCounter = habits.length + 1;

function renderHabits(){
    // Sets Habit List content to empty
    const habitsList = document.getElementById('habits-list');
    habitsList.innerHTML = '';

    // Prompts to add habit if no habits
    if (habits.length === 0) {
        const li = document.createElement('li');
        li.innerHTML = '<span> Add a new habit above </span>'
        habitsList.appendChild(li);
        return
    }
    // Creates new li for each habit in our habit list
    habits.forEach(habit => {
        const li = document.createElement('li');
        li.className = `habit-item ${habit.completed ? 'completed' : ''}`;
        li.setAttribute("data-id", habit.id);

        li.innerHTML = `
            <span class="habit-text ${habit.completed ? 'completed' : ''}">${habit.text}</span>
            <div class="task-bt">
                <button class="${habit.completed ? 'incomplete' : 'complete'}"
                    onclick="completeHabit(${habit.id})">
                    ${habit.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button class="edit-btn" onclick="editHabit(${habit.id})">Edit</button>
                <button class="delete-btn" onclick="deleteHabit(${habit.id})">Delete</button>
            </div>
            `;
        
            habitsList.appendChild(li);
    });
};

function deleteHabit(habitId) {
    if (confirm('Are you sure that you want to delete this habit?')) {
        // Sets habits equal to all habits apart from the habit we clicked
        habits = habits.filter(h => h.id !== habitId);
        renderHabits();
    }
}

function editHabit(habitId) {
    // Get current Habit Text
    const habitElement = document.querySelector(`[data-id="${habitId}"]`);
    const habitElementText = habitElement.querySelector('.habit-text');
    const currentText = habitElementText.textContent;

    // Make new input field
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;
    input.maxLength = 100;

    // Add input in place of Habit text
    habitElementText.innerHTML = '';
    habitElementText.appendChild(input);

    input.focus();
    input.select();

    // Save on enter key
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            saveEdit(input, habitId);
        }
    });

    // Save on click outside of box
    input.addEventListener('blur', function(){
        saveEdit(input, habitId);
    });
}
    
function saveEdit(input, habitId) {
    const newText = input.value.trim();

    // Ensure input is not empty
    if (newText === ''){
        alert('Habit cannot be empty!');
        input.focus();
        return;
    }

    // Update habits array
    const habit = habits.find(h => h.id === habitId);
    if (habit) {
        habit.text = newText;
    }

    // Render new habit array
    renderHabits();
}

function completeHabit(habitId) {
    const habit = habits.find(h => h.id === habitId);
    if (habit) {
        habit.completed = !habit.completed;
        renderHabits();
    }
}
