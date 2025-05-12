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