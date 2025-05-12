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