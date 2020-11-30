// turn debug on/off
var debug = false;

// GLOBAL VARIABLES
var mobile = false;

// Only 1 nav bar hence [0] in array,
// but just in case in future another one is added.
var navlinks = document.getElementsByTagName("nav")[0].getElementsByTagName("a");

// now get the sections in the page and fill an array
var sections = document.getElementsByTagName("main")[0].getElementsByTagName("section");

var about = document.getElementById("about");
var entertainment = document.getElementById("entertainment");
var food = document.getElementById("food");
var contact = document.getElementById("contact");

const navElements = {
  ABOUT: navlinks[1],
  ENTERTAINMENT: navlinks[2],
  FOOD: navlinks[3],
  CONTACT: navlinks[4],
};

// get the sections in the page and fill an array
var sections = document.getElementsByTagName("main")[0].getElementsByTagName("section");

// window listener
window.onscroll = function () {
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

// This function will color the navbar dependant on where the ScrollY is on the users browser window

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

// this function takes a section name and color and applies it.
function setColor(name, color) {
  name.style.backgroundColor = color;
}

// clear the highlighting
function clearNavHighlighting() {
  for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].style.backgroundColor = "white";
  }
}

// turns the top button on/off
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

/* toggle the hamburger menu on/off when in mobile mode */
function showHideMenu() {
  var element = document.getElementById("myTopnav");
  if (element.className === "navbar") {
    element.className += " menuOpen";
  } else {
    element.className = "navbar";
  }
}
