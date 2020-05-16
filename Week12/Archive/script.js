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

// End of Toggle Dark Mode

// Start of Slideshow Galleries

var slideIndex = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1
];

var slideId = [
  "mySlides1",
  "mySlides2",
  "mySlides3",
  "mySlides4",
  "mySlides5",
  "mySlides6",
  "mySlides7",
  "mySlides8",
  "mySlides9",
  "mySlides10",
  "mySlides11",
  "mySlides12",
  "mySlides13",
  "mySlides14",
  "mySlides15",
  "mySlides16",
  "mySlides17",
  "mySlides18",
  "mySlides19",
  "mySlides20",
  "mySlides21",
  "mySlides22",
  "mySlides23",
  "mySlides24",
  "mySlides25",
  "mySlides26",
  "mySlides27",
  "mySlides28",
  "mySlides29",
  "mySlides30"
];

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);
showSlides(1, 13);
showSlides(1, 14);
showSlides(1, 15);
showSlides(1, 16);
showSlides(1, 17);
showSlides(1, 18);
showSlides(1, 19);
showSlides(1, 20);
showSlides(1, 21);
showSlides(1, 22);
showSlides(1, 23);
showSlides(1, 24);
showSlides(1, 25);
showSlides(1, 26);
showSlides(1, 27);
showSlides(1, 28);
showSlides(1, 29);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

// End of Slideshow Galleries

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Filtering Buttons */

archivegallery("all");

function archivegallery(c) {
  var x, i;

  x = document.getElementsByClassName("column");

  if (c == "all") c = "";

  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");

    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current
// button (highlight it)
var btnContainer = document.getElementById("filtering");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";
  });
}

function myFilter1() {
  var x = document.getElementById("myDIV1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFilter2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}