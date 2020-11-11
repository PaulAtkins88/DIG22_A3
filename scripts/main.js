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
window.onscroll = function () {
  scrollFunction();
  monitorNav();
};

function onStart() {
  console.log("Script loaded");
  clearNavHighlighting();
}

function monitorNav() {
  if (window.scrollY < about.offsetTop) {
    clearNavHighlighting();
  }
  if (window.scrollY > about.offsetHeight && window.scrollY < entertainment.offsetTop) {
    clearNavHighlighting();
    setColor(navElements.ABOUT, "aqua");
  }
  if (window.scrollY > entertainment.offsetTop) {
    clearNavHighlighting();
    setColor(navElements.ENTERTAINMENT, "darkorange");
  }
  if (window.scrollY > food.offsetTop) {
    clearNavHighlighting();
    setColor(navElements.FOOD, "greenyellow");
  }
  if (window.scrollY > contact.offsetTop) {
    clearNavHighlighting();
    setColor(navElements.CONTACT, "chocolate");
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
