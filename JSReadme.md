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

## CSS

Just like the Javascript, there will be examples listed what to expect in the CSS.

They are all taken from the style.css

1. Global Reset & Box Model

```CSS
body{
    font-family: 'Poppins', sans-serif;
    background:  var(--bg-color);
    color: var(--text-color);
    min-height: 100vh;
    padding: 30px;
    text-align: center;
    transition: background 0.3s, color 0.3s;
}
```

2. Use of CSS Variables and 3. Organized CSS Structure

```CSS
/* The main color palettes for the page */
:root {
    --bg-color: #fff;
    --text-color: #121212;
    --primary-color:#0288d1;
    --input-bg:#f0f0f0;
    --card-bg:#fff;
    --card-shadow: rgba(0,0,0,0.1);
    --btn-bg:#0288d1;
    --btn-text:#fff;
}

body.dark{
    --bg-color: #121212;
    --text-color: #eee;
    --primary-color:#00e676;
    --input-bg:#1e1e1e;
    --card-bg:#1e1e1e;
    --card-shadow: rgba(0,230,118,0.2);
    --btn-bg:#00e676;
    --btn-text:#121212;
}
```

4. Typography Styling

```CSS
font-family: 'Poppins', sans-serif;
```

5. Color Scheme and Contrast

```CSS
background:  var(--bg-color);
color: var(--text-color);
```

6. Flexbox/Grid Usage

```CSS
.header{
    display: flex;
    justify-content: center;
    align-items: center;
}
```
7. Button and Input Styling

```CSS
#themeToggle{
    padding: 10px 16px;
    font-size: 14px;
    background-color: var(--btn-bg);
    color: var(--btn-text);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}
```

8. Component Reusability
```CSS
#themeToggle, #resultsContainer, #noResults
```

9. CSS Transitions
```CSS
transition: background 0.3s, color 0.3s;
```

10. Hover/Focus Effects
```CSS
#themeToggle:hover{
    background-color: #00796b;
}
```

11. Layout Containers

```CSS
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 25px;
}
```

12. Utility Classes

```CSS
.search-container, .country-card, .country-header
```

13. Use of Psuedo-classes

```CSS
input[type="text"]:focus{
    border-color: #1de9b6;
}

.country-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px var(--card-shadow);
}
```

14. Shadows and borders

```CSS
.country-card{
    border: 1px solid #333;
    border-radius: 12px;
    box-shadow: 0 4px 10px var(--card-shadow);
}
```

15. Theme Costomization

```CSS
body.dark{
    --bg-color: #121212;
}
```

16. Naming Conventions

```CSS
.search-container, .country-card, .flag-img
```

17. Cleanliness and Commenting

```CSS
/* Header Stlyes */
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 25px;
}
```

*No Header Dupes when veiwing the CSS file*