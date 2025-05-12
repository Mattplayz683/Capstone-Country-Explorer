# Capstone Project Breakdown

This is a breakdown of the HTML, CSS, and Javascript of a Country Explorer.

## The HTML

The html is the main webpage for the country explorer where there are Multiple Javascripts that make the app function.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Country Explorer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!--Header Section where there's the title and Search Bar-->
    <div class="header">
    <h1>🌍 Country Explorer</h1>
    <button id="themeToggle">Toggle Theme</button>
    </div>

    <div class="search-container">
    <input type="text" id="searchInput" placeholder="Search by country name...">
    </div>
    
    <div id="resultsContainer"></div>
    <script src="greet.js"></script>
    <script src="countries.js"></script>
    <script src="render.js"></script>
    <script src="theme.js"></script>
    <script src="timer.js"></script>
   
</body>
</html>
```

### Main points
1. Orginized in order
2. Links to a CSS
3. Multiple Javascripts orginized for it to work

## The CSS

This is the CSS for the Webpage.

```CSS
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

body{
    font-family: 'Poppins', sans-serif;
    background:  var(--bg-color);
    color: var(--text-color);
    min-height: 100vh;
    padding: 30px;
    text-align: center;
    transition: background 0.3s, color 0.3s;
}

.header{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 25px;
}

h1{
    font-size: 2.5rem;
    color: var(--primary-color);
}

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

#themeToggle:hover{
    background-color: #00796b;
}

.search-container{
    margin-bottom: 30px;
}

input[type="text"]{
    padding: 14px 18px;
    width: 320px;
    font-size: 16px;
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    outline: none;
    background-color: var(--input-bg);
    color: var(--text-color);
    transition: 0.3s;
}

input[type="text"]:focus{
    border-color: #1de9b6;
}

#resultsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    margin-top: 20px;
}

.country-card{
    background-color: var(--card-bg);
    border: 1px solid #333;
    border-radius: 12px;
    width: 300px;
    padding: 20px;
    text-align: left;
    box-shadow: 0 4px 10px var(--card-shadow);
    transition: transform 0.3s, box-shadow 0.3s;
}

.country-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px var(--card-shadow);
}

.country-header{
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
}

.flag-img{
    width: 40px;
    height: 30px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid var(--primary-color);
}

.country-card h3{
    font-size: 1.4rem;
    color: var(--primary-color);
}

.country-card p{
    font-size: 1rem;
    margin-bottom: 8px;
}

.learn-more-btn{
    margin-top:12px;
    padding: 10px 18px;
    background-color: var(--btn-bg);
    border: none;
    color: var(--btn-text);
    font-weight: bold;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
    text-decoration: none;
}

.learn-more-btn:hover{
    background-color: #00796b;
}

#noResults{
    margin-top: 30px;
    color: #ff1744;
    font-size: 20px;
}
```

### Main points
1. Uses themes to switch from Light to Dark
2. Smooth transition beetween themes
3. Makes the overall webpage look nicer.

## The JavaScripts

The Javascripts are divided into 5 parts. It might be a little confusing to you but don't worry, I got some comments explaining how it would work.

### greet.js

This script greets the user everytime they visit the webpage, if they visited before, the webpage says welcome back.

```JavaScript
function greetUser(){
    const hasVisitedBefore = document.cookie.includes('visitedBefore=true');
    if(hasVisitedBefore){
        // For people who visiited the site before.
        alert("👋 Welcome back to Country Explorer!");
    } else {
        // ExpiryDate makes an expiration date for the cookie that way it will expire after 7 days.
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate()+7);
        // Creates a cookie for the user who visits the website so it could remember if the user visited the site.
        document.cookie=`visitedBefore=true; expires=${expiryDate.toUTCString()}; path=/`;
        // For people who visited the site for the first time.
        alert("🌟 Welcome to Country Explorer!");
    }
}
// Greets the user
greetUser()
```

### countries.js

This holds the data of the countries to display on the webpage.

```JavaScript
// The data for all the countries to display on the webpage

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
    },
    {
        name: "Denmark",
        capital: "Copenhagen",
        region: "Europe",
        link: "https://en.wikipedia.org/wiki/Denmark",
        flag: "https://flagcdn.com/w1280/dk.png"
    },
    {
        name: "Finland",
        capital: "Helsinki",
        region: "Northern Europe",
        link: "https://en.wikipedia.org/wiki/Finland",
        flag: "https://flagcdn.com/w1280/fi.png"
    },
    {
        name: "France",
        capital: "Paris",
        region: "Western Europe",
        link: "https://en.wikipedia.org/wiki/France",
        flag: "https://flagcdn.com/w1280/fr.png"
    },
    {
        name: "China",
        capital: "Beijing",
        region: "China",
        link: "https://en.wikipedia.org/wiki/China",
        flag: "https://flagcdn.com/w1280/cn.png"
    },
    {
        name: "South Africa",
        capital: "Pretoria",
        region: "Africa",
        link: "https://en.wikipedia.org/wiki/South_Africa",
        flag: "https://flagcdn.com/w1280/za.png"
    },
    {
        name: "Pakistan",
        capital: "Islamabad",
        region: "South Asia",
        link: "https://en.wikipedia.org/wiki/Pakistan",
        flag: "https://flagcdn.com/w1280/pk.png"
    },
    {
        name: "India",
        capital: "New Delhi",
        region: "South Asia",
        link: "https://en.wikipedia.org/wiki/India",
        flag: "https://flagcdn.com/w1280/in.png"
    },
    {
        name: "Italy",
        capital: "Rome",
        region: "Europe",
        link: "https://en.wikipedia.org/wiki/Italy",
        flag: "https://flagcdn.com/w1280/it.png"
    },
    {
        name: "Hungary",
        capital: "Budapest",
        region: "Europe",
        link: "https://en.wikipedia.org/wiki/Hungary",
        flag: "https://flagcdn.com/w1280/hu.png"
    },
    {
        name: "Australia",
        capital: "Canberra",
        region: "Oceania",
        link: "https://en.wikipedia.org/wiki/Australia",
        flag: "https://flagcdn.com/w1280/au.png"
    },
    {
        name: "Ireland",
        capital: "Dublin",
        region: "Europe",
        link: "https://en.wikipedia.org/wiki/Republic_of_Ireland",
        flag: "https://flagcdn.com/w1280/ie.png"
    },
    {
        name: "Brazil",
        capital: "Brasília",
        region: "South America",
        link: "https://en.wikipedia.org/wiki/Brazil",
        flag: "https://flagcdn.com/w1280/br.png"
    },
    {
        name: "Germany",
        capital: "Berlin",
        region: "Europe",
        link: "https://en.wikipedia.org/wiki/Germany",
        flag: "https://flagcdn.com/w1280/de.png"
    },
    {
        name: "Russia",
        capital: "Moscow",
        region: "Europe",
        link: "https://en.wikipedia.org/wiki/Russia",
        flag: "https://flagcdn.com/w1280/ru.png"
    },
    {
        name: "Poland",
        capital: "Warsaw",
        region: "Europe",
        link: "https://en.wikipedia.org/wiki/Poland",
        flag: "https://flagcdn.com/w1280/pl.png"
    },
    {
        name: "South Korea",
        capital: "Seoul",
        region: "East Asia",
        link: "https://en.wikipedia.org/wiki/South_Korea",
        flag: "https://flagcdn.com/w1280/kr.png"
    },
    {
        name: "Canada",
        capital: "Ottawa",
        region: "North America",
        link: "https://en.wikipedia.org/wiki/Canada",
        flag: "https://flagcdn.com/w1280/ca.png"
    },
    {
        name: "Mexico",
        capital: "Mexico City",
        region: "North America",
        link: "https://en.wikipedia.org/wiki/Mexico",
        flag: "https://flagcdn.com/w1280/ca.png"
    },
    {
        name: "Spain",
        capital: "Madrid",
        region: "Europe",
        link: "https://en.wikipedia.org/wiki/Spain",
        flag: "https://flagcdn.com/w1280/es.png"
    },
    {
        name: "Turkey",
        capital: "Ankara",
        region: "Europe",
        link: "https://en.wikipedia.org/wiki/Turkey",
        flag: "https://flagcdn.com/w1280/tr.png"
    },
];
```
#### Main points
1. Has the country's names, flags, capitals and regions.
2. Has wikipedia links to learn more about the countries.

### Render.js

Renders the countries.js onto the webpage and includes a real-time search engine.

```JavaScript
function renderCountries(countries){

    //Console.log is the way how it functions in the console and not the webpage, that's how we test it out.
    console.log('renderCountries called with', countries.length, 'countries');
    
    // Displays on the results container.
    const resultsContainer = document.getElementById('resultsContainer');

    // Adds an error just in case if things don't go as planned
    if(!resultsContainer){
        // If the Results container dosent load or exist, this will display in the console
        console.error('Results container not found');
        return;
    }

    // Loads on the webpage
    resultsContainer.innerHTML= '';

    // If you search a country that dosen't exist, this will show up
    if(countries.length === 0) {
    
        // Displays in the console
        console.log("No countries found...");
    
        // Displays on the webpage
        resultsContainer.innerHTML = '<p id="noResults">No countries found 📬</p>';
        return;
    }

    const countryElements = [];

    // Puts in html elements to display the country.
    countries.forEach(country => {
        if (!country || typeof country.name !== 'string'){
    
            // Warns in the console that the country typed in is invaild
            console.warn('Invalid Country object:', country);
    
            // returns so it won't continue
            return;
        }
    
        // Creates a Div element that displays the countries
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country-card';
        countryDiv.innerHTML = `
        <div class="country-header">
            <img src="${country.flag || ''}" alt="Flag of ${country.name}" class="flag-img">
            <h3>${country.name}</h3>
        </div>
        <p><strong>Capital:</strong> ${country.capital || 'Unkown'}</p>
        <p><strong>Region:</strong> ${country.region || 'Unkown'}</p>
        <a href="${country.link || '#'}" target="_blank">
        <button class="learn-more-btn">Learn More</button>
        </a>
        `;
    
        //Puts the div inside the html to display on the webpage
        countryElements.push(countryDiv);
    });

    //Creates a loop until the list of countries in the countries.js stops and ends
    countryElements.forEach(element =>{
        resultsContainer.appendChild(element);
    });
    //Displays in the console when the countries render successfully
    console.log(`Successfully render ${countries.length} countries`);
}

// initializeSearch()
function initializeSearch()
{
    console.log("Initailizing search functionality");
    
    //Shows all the countries at the start
    renderCountries(countriesData);

    // Takes control of the search input
    const searchInput = document.getElementById('searchInput');
    
    //Check if the search input is present
    if(!searchInput){
        console.error('Search input not found ')
        return;
    }
    
    //Real Time search: Sorts out what you type
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

    // Adds a keyboard shortcut just like the theme.js
    searchInput.addEventListener('keydown', function(e){
        if(e.key === 'Enter') {
            const searchTerm = searchInput.value.trim().toLowerCase();
    
            // Tells the console that the enter key is pressed
            console.log('Enter key pressed for search term:', searchTerm);

            if(searchTerm !== '') {
                searchCountries(searchTerm);
                saveSearchTerm(searchTerm);
                searchInput.value = '';
            }
        }
    });
}

function searchCountries(searchTerm)
{
    console.log('searchCountries called with term:', searchTerm);

    // Check if countriesData is availible
    if (typeof countriesData === 'undefined' || !Array.isArray(countriesData)) {
        console.error('countriesData is not defined of found in the search countries');
        return;
    }
    
    // Notifies the console if there's an empty search term i think
    if (searchTerm === '') {
        console.log('Empty search term, showing all the countries that are on the website');
        renderCountries(countriesData);
        return;
    }
    const filteredCountries = countriesData.filter(country => {
        // Make sure country and country.name exist and are the correct type.
        if (!country || typeof country.name !== 'string'){
            console.warn('Invalid country object found', country);
            return false;
        }
        return country.name.toLocaleLowerCase().includes(searchTerm.toLowerCase());
    });

    console.log(`Found ${filteredCountries.length} countries matching "${searchTerm}`);

    renderCountries(filteredCountries);
}

function saveSearchTerm(term){
    
    //The main function for saving in the history
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    if (searchHistory.length >= 10) {
        searchHistory.shift();
    }

    if (!searchHistory.includes(term)) {
        searchHistory.push(term);

        // The other main function for the history saving
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
}

// Renders the countries and the search engine after the code.
initializeSearch();
renderCountries(countriesData);
```

### Theme.js

Remember when I mentioned about themes in the CSS section?
This is the script where you can change the way the page looks from one button.

```JavaScript
const themeToggle = document.getElementById('themeToggle');
// Adds an extra theme for the site
if(localStorage.getItem('theme')=== 'dark'){
    document.body.classList.add('dark');
}
// Gives a click funtion to switch themes
themeToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
    // Sets the theme in the local storage, if the user refreshes the site, the theme will save.
    if(document.body.classList.contains('dark')){
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
// Does the same thing when you press "Shift+D"
document.addEventListener('keydown', function(e){
    if(e.shiftKey && e.key === 'D')
    {
        themeToggle.click();
    }
});
```

### Timer.js

Everytime someone goes on the webpage, there is a timer to indicate how long they have been on the site. It can count seconds, minutes, and hours.

```JavaScript
function startTimer(){
    // Notifies the console to start the timer
    console.log('Starting session timer');

    // Checks if there is already a timer
    if (document.getElementById('sessionTimer')) {
        console.log('Timer already exists, not creatin a new one');
        return;
    }

    // Sets the default time to zero
    let sessionSeconds = 0;

    //Creates a div for the timer to display on the webpage
    const timerElement = document.createElement('div');
    timerElement.id= "sessionTimer";
    timerElement.style.marginTop = "20px";
    timerElement.style.color = "var(--primary-color)";
    timerElement.style.fontSize = "18px";
    timerElement.style.textAlign = "center";
    document.body.appendChild(timerElement);

    updateTimerDisplay(timerElement, sessionSeconds);

    let timerInterval = setInterval(() => {
        // Counts up the seconds in real time
        sessionSeconds++;
        updateTimerDisplay(timerElement, sessionSeconds);

        sessionStorage.setItem('timeOnPage', sessionSeconds.toString());

        if(sessionSeconds === 300) {showLongSessionMessage();
        }
    }, 1000);

    window.addEventListener('beforeunload', () => {
        // Stops the timer from ticking when unloading the webpage
        console.log('Page unloading, stopping timer');
        clearInterval(timerInterval);
    });
}

// Makes the timer count Hours, Minutes, and seconds.
function updateTimerDisplay(element, totalSeconds){
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let timeText = `⏱️ Time on page: `;

    if(hours > 0) {
        timeText += `${hours}h `;
    }

    if(hours > 0 || minutes > 0) {
        timeText += `${minutes}m `;
    }
    timeText += `${seconds}s`;

    element.textContent = timeText;
}
// if the session on the page is 5 minutes, it will display a message saying that it's a long session
function showLongSessionMessage() {
    console.log('Showing long session message (5 minutes)');

    if(document.getElementById('longSessionMessage')) {
        console.log('Long session message already exists');
        return;
    }

    //Creates a div in the HTML if on there for 5 Minutes
    const messageDiv = document.createElement('div');
    messageDiv.id = "longSessionMessage";
    messageDiv.style.padding = '10px';
    messageDiv.style.margin = '20px 0';
    messageDiv.style.backgroundColor = 'var(--primary-color)';
    messageDiv.style.color = 'var(--btn-text)';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.textAlign = 'center';
    messageDiv.innerHTML = `
    <p>🌍 You've been exploring for 5 minutes! Thanks for your intrest in Country Explorer.</p>
    <button id="dismissMessage" style="margin-top: 10px; padding: 5px 10px; border: none; broder-radius: 4px; cursor: pointer;">
    Dismiss
    </button>
    `;

    // Adds the session timer
    const timerElement = document.getElementById('sessionTimer');
    if(timerElement){
        document.body.insertBefore(messageDiv,timerElement);
    } else {
        document.body.appendChild(messageDiv);
    }

    // Adds a button to dissmiss the long session message
    const dismissButton = document.getElementById('dismissMessage');
    if (dismissButton){
        dismissButton.addEventListener('click', function() {
            const message = document.getElementById('longSessionMessage');
            if(message){
                message.remove();
            }
        });
    }
}

// Adds the timer into the html.
startTimer();
```

## Conclusion

When all the files are combined, it will make a country explorer that is accessible to all devices. You can add more countries to the webpage for more variety for optional pourposes.

**Thank you for reading the Readme.md**