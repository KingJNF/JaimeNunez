// Start of Toggle Dark Mode

// this one is to wait for page to load
document.addEventListener("DOMContentLoaded", () => {
  const themeStylesheet = document.getElementById("theme");
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    // if it's light -> go dark
    if (themeStylesheet.href.includes("light")) {
      themeStylesheet.href = "dark-theme.css";
      themeToggle.innerText = "Switch to Light Mode";
    } else {
      // if it's dark -> go light
      themeStylesheet.href = "light-theme.css";
      themeToggle.innerText = "Switch to Dark Mode";
    }
  });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
