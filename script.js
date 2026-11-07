body = document.querySelector("body");
header = document.querySelector("header");
footer = document.querySelector("footer");
heroBanner = document.querySelector(".heroBanner");
pageTop = document.querySelectorAll("body, header, footer, #ulHeader");
ulHeader = document.querySelector("#ulHeader");
aboutUs = document.querySelector("#aboutUs");
experiencePageMain = document.querySelectorAll(
  "#experiencesBody, .experiences, #experiencesFooter",
);
experienceDiv = document.querySelectorAll(".experienceDiv");
bookingPageBanner = document.querySelector("#bookingPageBanner");
form = document.querySelector("form");
email = document.querySelector("#email");
confirmEmail = document.querySelector("confirm-email");
darkModeButton = document.querySelector("#darkModeButton");

//Dark Mode Button

let darkMode = false;

//Implement local storage to allow darkMode to carry across pages/ on refresh https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

function toggleDarkMode() {
  //DarkMode ON
  if (!darkMode) {
    darkMode = true;
    darkModeButton.innerText = "Light Mode";
    for (i = 0; i < pageTop.length; ++i) {
      pageTop[i].style.backgroundColor = "#747774";
    }
    if (heroBanner) {
      heroBanner.style.backgroundColor = "#747774";
    }
    if (aboutUs) {
      aboutUs.style.backgroundColor = "#b8beb9";
    }
    if (experiencePageMain) {
      for (i = 0; i < experiencePageMain.length; ++i) {
        experiencePageMain[i].style.backgroundColor = "#b8beb9";
      }
    }
    if (experienceDiv) {
      for (i = 0; i < experienceDiv.length; ++i) {
        experienceDiv[i].style.backgroundColor = "#939693";
      }
    }
    if (bookingPageBanner) {
      bookingPageBanner.style.backgroundColor = "#b3b9b3";
    }
    if (form) {
      form.style.backgroundColor = "#b8beb9";
    }
    //DarkMode OFF
  } else if (darkMode) {
    darkMode = false;
    darkModeButton.innerText = "Dark Mode";
    body.style.backgroundColor = "#ffa500";
    header.style.backgroundColor = "#007000";
    footer.style.backgroundColor = "#ffa500";
    ulHeader.style.backgroundColor = "#007000";
    if (heroBanner) {
      heroBanner.style.backgroundColor = "#007000";
    }
    if (experiencePageMain) {
      for (i = 0; i < experiencePageMain.length; ++i) {
        experiencePageMain[i].style.backgroundColor = "#ffffff";
      }
    }
    if (experienceDiv) {
      for (i = 0; i < experienceDiv.length; ++i) {
        experienceDiv[i].style.backgroundColor = "#ffa500";
      }
    }
    if (bookingPageBanner) {
      bookingPageBanner.style.backgroundColor = "#ffffff";
    }
    if (form) {
      form.style.backgroundColor = "#ffa500";
    }
  }
}
//For loop over querySelectorAll nodelist adapted from;
// Loop Over querySelectorAll matches
// Author Chris Coyier
//Date: 2014/07/14
//Available at https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
// Accessed: 2026/11/01

//Email Validation
function validateEmail() {
  if (
    document.forms["enquiryForm"]["email"].value !=
    document.forms["enquiryForm"]["confirm-email"].value
  ) {
    alert("email addresses don't match");
    return false;
  }
}
//Validate email adapted from
//Adapted from https://www.w3schools.com/js/js_validation.asp
//Accessed 2026/11/05
