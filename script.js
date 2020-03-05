// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

let name = document.getElementById("name");
let backgroundColor = document.getElementById("background-color");
let foregroundColor = document.getElementById("foreground-color");
let form = document.getElementById("preferences-form");
let body = document.querySelector("body");

let savedBGC = localStorage.getItem("savedBGC");
let savedFGC = localStorage.getItem("savedFGC");

function applyPreferences() {
  if (savedBGC != null) {
    body.style.backgroundColor = savedBGC;
  }
  if (savedFGC != null) {
    body.style.color = savedFGC;
  }
}

function submitPreferences(event) {
  event.preventDefault();
    let savedName = name.value;
  let savedBackgroundColor = backgroundColor.value;
  let savedForegroundColor = foregroundColor.value;

  body.style.backgroundColor = savedBackgroundColor;
  body.style.color = savedForegroundColor;
  localStorage.setItem("savedBGC", savedBackgroundColor);
  localStorage.setItem("savedFGC", savedForegroundColor);
  alert("Hello " + savedName + ", your preferences were saved!");
}
applyPreferences();
form.addEventListener("submit", submitPreferences);
