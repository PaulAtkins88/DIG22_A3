// TODO: Remove this pre submission
var debug = true;

// GLOBAL VARIABLES
var mobile = false;

// Only 1 nav bar hence [0] in array,
// but just in case in future another one is added.
var navlinks = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

// now get the sections in the page and fill an array
var sections = document.getElementsByTagName("main")[0].getElementsByTagName("section");

var nav = document.getElementsByClassName("navItem");
var about = document.getElementById("about");
var entertainment = document.getElementById("entertainment");
var food = document.getElementById("food");
var contact = document.getElementById("contact");

const navElements = {
    ABOUT: nav[1],
    ENTERTAINMENT: nav[2],
    FOOD: nav[3],
    CONTACT: nav[4],
};
// get the sections in the page and fill an array
var sections = document.getElementsByTagName("main")[0].getElementsByTagName("section");
window.onscroll = function() {
    scrollFunction();
    navHighlighter();
};

function onStart() {
    console.log("Script loaded");
    clearNavHighlighting();
    // Debugging function.
    if (debug) {
        console.log(navlinks);
        console.log(sections);
    }

    if (document.getElementsByTagName("body")[0].clientWidth < 600) {
        mobile = true;
        console.log("Mobile device");
    } else {
        mobile = false;
        console.log("Not mobile");
    }
}

function navHighlighter() {

    if (window.scrollY < about.offsetTop) {
        clearNavHighlighting();
    } else if (
        window.scrollY >= about.offsetTop - navElements.ABOUT.offsetTop &&
        window.scrollY < entertainment.offsetTop
    ) {
        clearNavHighlighting();
        setColor(navElements.ABOUT, "aqua");
    } else if (
        window.scrollY >= entertainment.offsetTop - navElements.ENTERTAINMENT.offsetTop &&
        window.scrollY < food.offsetTop
    ) {
        clearNavHighlighting();
        setColor(navElements.ENTERTAINMENT, "darkorange");
    } else if (
        window.scrollY >= food.offsetTop - navElements.FOOD.offsetTop &&
        window.scrollY < contact.offsetTop
    ) {
        clearNavHighlighting();
        setColor(navElements.FOOD, "greenyellow");
    } else if (window.scrollY >= contact.offsetTop - navElements.CONTACT.offsetTop) {
        clearNavHighlighting();
        setColor(navElements.CONTACT, "chocolate");
    } else {
        clearNavHighlighting();
    }
}

function setColor(name, color) {
    name.style.backgroundColor = color;
}

function clearNavHighlighting() {
    for (let i = 0; i < nav.length; i++) {
        nav[i].style.backgroundColor = "white";
    }
}

function scrollFunction() {
    var myBtn = document.getElementById("topBtn");
    // display top button
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

// Top Button
// reset position of the viewport when 'topBtn' clicked or pressed.
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}