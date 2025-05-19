# Capstone Project Breakdown

This is a breakdown of the HTML, CSS, and Javascript for a Country Explorer.

## Javascript

There will be examples listed what to expect in the javascript.

1. Variable Naming and Indentation

Taken from render.js
```JavaScript
const countryDiv = document.createElement('div');
        countryDiv.className = 'country-card';
```
2. Function Naming and Modularity

Taken from render.js
```JavaScript
function searchCountries(searchTerm) {}
```
3. Arrays and Objects Usage

Taken from countries.js
```JavaScript
const countriesData = [
    {
      name: "United States",
      capital: "Washington, D.C.",
      region: "North America",
      link: "https://en.wikipedia.org/wiki/United_States",
      flag: "https://flagcdn.com/us.svg"
    },
    {
        name: "United Kingdom",
        capital: "London",
        region: "Europe",
        link: "https://en.wikipedia.org/wiki/United_Kingdom",
        flag: "https://flagcdn.com/w1280/gb.png"
    },
    {
        name: "Japan",
        capital: "Tokyo",
        region: "East Asia",
        link: "https://en.wikipedia.org/wiki/Japan",
        flag: "https://flagcdn.com/w1280/jp.png"
    }
]
```
4. Array Methods

Taken from render.js
```JavaScript
const filteredCountries = countriesData.filter(country => {
        // Make sure country and country.name exist and are the correct type.
        if (!country || typeof country.name !== 'string'){
            console.warn('Invalid country object found', country);
            return false;
        }
        return country.name.toLocaleLowerCase().includes(searchTerm.toLowerCase());
    });
```
5. Looping/Iteration

Taken from render.js
```JavaScript
countryElements.forEach(element =>{
        resultsContainer.appendChild(element);
    });
```
6. JSON Data Handling

Taken from render.js
```JavaScript
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
```
7. Web Storage

Taken from render.js
```JavaScript
if (!searchHistory.includes(term)) {
        searchHistory.push(term);

        // The other main function for the history saving
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
```
8. Saving/Retriving User Data

Taken from render.js
```JavaScript
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
```
9. Cookies with Expiry

Taken from greet.js
```JavaScript
const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate()+7);
        document.cookie=`visitedBefore=true; expires=${expiryDate.toUTCString()}; path=/`;
```
10. DOM Manipulation

Taken from render.js
```JavaScript
 const countryDiv = document.createElement('div');
```

11. and 12. CSS Manipulation and Theme Preference

Taken from theme.js
```JavaScript
if(document.body.classList.contains('dark')){
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
```

13. Comments and Readability

Taken from render.js
```JavaScript
//Console.log is the way how it functions in the console and not the webpage, that's how we test it out.
    console.log('renderCountries called with', countries.length, 'countries');
```

14. Error Handling & Debugging

Taken from render.js
```JavaScript
if(!resultsContainer){
        console.error('Results container not found');
        return;
    }
```

15. Timer and Date Object

Taken from timer.js
```JavaScript
let timerInterval = setInterval(() => {
        // Counts up the seconds in real time
        sessionSeconds++;
        updateTimerDisplay(timerElement, sessionSeconds);

        sessionStorage.setItem('timeOnPage', sessionSeconds.toString());

        if(sessionSeconds === 300) {showLongSessionMessage();
        }
    }, 1000);
```

16. Math, String, Random Methods

Taken from timer.js
```JavaScript
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
```
17. Event Listeners and Methods

Taken from render.js
```JavaScript
    searchInput.addEventListener('input', function(){
        const searchTerm = this.value.trim().toLowerCase();
        console.log('Input event detected, search term:', searchTerm);

        // Performs the search on input instantly
        if(searchTerm !== ''){
            searchCountries(searchTerm);
        } else {
            renderCountries(countriesData);
        }
    });
```
18. Real-time Search and History

Taken from render.js
```JavaScript
    searchInput.addEventListener('input', function(){
        const searchTerm = this.value.trim().toLowerCase();
        console.log('Input event detected, search term:', searchTerm);

        if(searchTerm !== ''){
            searchCountries(searchTerm);
        } else {
            renderCountries(countriesData);
        }
    });
```
19. CRUD Functionality

Taken from render.js
```JavaScript
if (typeof countriesData === 'undefined' || !Array.isArray(countriesData)) {
        console.error('countriesData is not defined of found in the search countries');
    return;
}
```