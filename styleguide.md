# Primed Minds Style Guide

## File Locations
  - Images – `assets/[page name]/[img title].jpg`
    - i.e. an image for the about page would be under: `assets/about/arrow.jpg`
  - Javascript
    - That you wrote yourself - `javascript/[page name].js`
      - NOTE: name of the js file should match the name of the .html!
      - i.e. about.html will link to `javascript/about.js`
    - That you import – `public/javascript/name.js`
    - Avoid putting scripts into the html file itself.
      Instead, place them in a separate .js file linked to your .html
  - CSS – `stylesheets/[page name].css`
    - NOTE: name of the CSS file should match the name of the .html!
   
## Naming
  - Static Global Variables: name with `ALL_CAPS_AND_UNDERSCORES`
    - if this variable isn’t going to change throughout the code but is used multiple times
    - i.e. `GRAPH_HEIGHT = 500;`
  - Other variables: lowerCamelCase
  - Functions: lowerCamelCase
  - Descriptive names
    - `monsters`, not just `object`
  - No unnecessary adjectives
    - Do not use `mySlides`, just `slides`

## General
  - Opening brackets are preceded with a space but are on the same line
```
if (condition) {
    // The rest of your code goes here and is indented one tab
    // The following lines should be the same indentation.
    // If you open another bracket {
        // Start another indent
    } // But close it on the same line!
}; // Closing brackets go on their own separate line
```
  - Comment comment comment! When in doubt, comment about every 20 lines
    - Quick comments at the top of a function describing what it does go a long way!
  - Break down functions
    - Try to have functions remain about 20 lines or less
    - If the function starts getting really long, ask yourself if you could break it up into two 

## Design
  ### Colors
  - Red: #DC2222
  - Yellow: #ffe900
  ### Size
  - Aspect Ratio: 10:6
  - 10 inches wide by 6 inches high, or
  - 3000 px wide by 1800 px high
  ### Buttons
  - They should match the buttons on the [About page](http://primedminds.com/about.html)
  - Here's a quick reference for the CSS:
```
.button {
    padding: 11px 20px;
    color: white;
    background-color: #f44336;
    border-radius: 100px;
    font-size: 13pt;
    transition: all .2s;
    margin: 15px 0;
}

.button:hover {
    transform: scale(1.09);
    box-shadow: 0 4px 4px rgba(0, 0, 0, .6);
}
```
