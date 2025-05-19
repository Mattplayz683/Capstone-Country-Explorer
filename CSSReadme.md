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