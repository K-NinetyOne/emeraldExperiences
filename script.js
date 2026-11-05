body = document.querySelector("body");
header = document.querySelector("header");
footer = document.querySelector("footer");
heroBanner = document.querySelector(".heroBanner");
ulHeader = document.querySelector("#ulHeader");
experienceBody = document.querySelector("#experiencesBody");
experiences = document.querySelector(".experiences");
experienceDiv = document.querySelectorAll(".experienceDiv");
experiencesFooter = document.querySelector("#experiencesFooter");
bookingPageBanner = document.querySelector("#bookingPageBanner");
form = document.querySelector("form");
email = document.querySelector("#email");
confirmEmail = document.querySelector("confirm-email");

//Dark Mode Button

let darkMode = false;

//documentquerySelector all node list to apply eg. 'dark grey' multiple elements?? make an array of "was orange"??
//Finalise actual color shceme for use and get rid of test alternate colors
//Implement local storage to allow darkMode to carry across pages/ on refresh https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
//Implement email and confirm email validation check. Implement alert with JS if form error

function toggleDarkMode() {
  if (!darkMode) {
    darkMode = true;
    console.log("darkMode");
    body.style.backgroundColor = "#747774";
    header.style.backgroundColor = "#747774";
    footer.style.backgroundColor = "#747774";
    ulHeader.style.backgroundColor = "#747774";
    if (heroBanner) {
      heroBanner.style.backgroundColor = "#747774";
    }
    if (experienceBody) {
      experienceBody.style.backgroundColor = "#b8beb9";
    }
    if (experiences) {
      experiences.style.backgroundColor = "#b8beb9";
    }
    if (experienceDiv) {
      for (i = 0; i < experienceDiv.length; ++i) {
        experienceDiv[i].style.backgroundColor = "#747774";
      }
    }
    if (experiencesFooter) {
      experiencesFooter.style.backgroundColor = "#b8beb9";
    }
    if (bookingPageBanner) {
      bookingPageBanner.style.backgroundColor = "#747774";
    }
    if (form) {
      form.style.backgroundColor = "#b8beb9";
    }
    //Adapted from https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/ accessed 01/11/2026
    //querySelectorAll returns an array of divs, these either have to be looped thorugh or styled one by one
  } else if (darkMode) {
    darkMode = false;
    body.style.backgroundColor = "#ffa500";
    header.style.backgroundColor = "#007000";
    footer.style.backgroundColor = "#ffa500";
    ulHeader.style.backgroundColor = "#007000";
    if (heroBanner) {
      heroBanner.style.backgroundColor = "#007000";
    }
    if (experienceBody) {
      experienceBody.style.backgroundColor = "#ffffff";
    }
    if (experiences) {
      experiences.style.backgroundColor = "#ffffff";
    }
    if (experienceDiv) {
      for (i = 0; i < experienceDiv.length; ++i) {
        experienceDiv[i].style.backgroundColor = "#ffa500";
      }
    }
    if (experiencesFooter) {
      experiencesFooter.style.backgroundColor = "#ffffff";
    }
    if (bookingPageBanner) {
      bookingPageBanner.style.backgroundColor = "#ffffff";
    }
    if (form) {
      form.style.backgroundColor = "#ffa500";
    }
  }
}

// function emailValidation()
// // if (email.innerText !== confirmEmail.innerText) {
// alert "email addresses do not match"}

// function formSubmissionStatus()
