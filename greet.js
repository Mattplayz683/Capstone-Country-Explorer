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