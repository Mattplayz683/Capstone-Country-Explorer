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