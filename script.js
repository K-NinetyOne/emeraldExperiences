body = document.querySelector("body");
header = document.querySelector("header");
footer = document.querySelector("footer");
heroBanner = document.querySelector(".heroBanner");
ulHeader = document.querySelector("#ulHeader");
experienceBody = document.querySelector("#experiencesBody");
experiences = document.querySelector(".experiences");
experienceDiv = document.querySelectorAll(".experienceDiv");
experiencesFooter = document.querySelector("#experiencesFooter");

//Dark Mode Button

let darkMode = false;

//document.querySelector the button to change textcontent to Normal colors
//Finalise actual color shceme for use and get rid of test alternate colors
//Add conditionals to skip the null divs error where div doesn't exist on a given page or else seperateJS files per page
//add element IDs for some variants eg. experiences footer should be diff to index footer to fit the page's theme
//Implement local storage to allow darkMode to carry across pages/ on refresh https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

function toggleDarkMode() {
  // darkMode = true;
  if (!darkMode) {
    darkMode = true;
    console.log("darkMode");
    body.style.backgroundColor = "#747774";
    header.style.backgroundColor = "#747774";
    footer.style.backgroundColor = "#747774";
    if (heroBanner) {
      heroBanner.style.backgroundColor = "#747774";
    }
    ulHeader.style.backgroundColor = "#747774";
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
    //Adapted from https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/ accessed 01/11/2026
    //querySelectorAll returns an array of divs, these either have to be looped thorugh or styled one by one
    // darkMode = true;
  } else if (darkMode) {
    darkMode = false;
    body.style.backgroundColor = "#ffa500";
    header.style.backgroundColor = "#007000";
    footer.style.backgroundColor = "#ffa500";
    if (heroBanner) {
      heroBanner.style.backgroundColor = "#007000";
    }
    ulHeader.style.backgroundColor = "#007000";
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
    console.log("lightMode");
  }
}

// function lightMode() {
//   experienceDiv.addEventListener("click", function showText() {
//     alert("this will display text");
//     /*Display the text on the other side here */
//   });
// }
