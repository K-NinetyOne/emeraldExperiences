body = document.querySelector("body");
header = document.querySelector("header");
footer = document.querySelector("footer");
heroBanner = document.querySelector(".heroBanner");
ulHeader = document.querySelector("#ulHeader");
experienceBody = document.querySelector("#experiencesBody");
experiences = document.querySelector(".experiences");
experienceDiv = document.querySelectorAll(".experienceDiv");

//Dark Mode Button

let darkMode = false;

//document.querySelector the button to change textcontent to Normal colors
//Maybe have a class called wasGreen or wasOrange for example and then apply it to all of a certain color so it is easy to change in a pattern
//Finalise actual color shceme for use and get rid of test alternate colors

function toggleDarkMode() {
  // darkMode = true;
  if (!darkMode) {
    darkMode = true;
    console.log("darkMode");
    body.style.backgroundColor = "#747774";
    header.style.backgroundColor = "#747774";
    footer.style.backgroundColor = "#747774";
    //heroBanner.style.backgroundColor = "#747774";
    ulHeader.style.backgroundColor = "#747774";
    experienceBody.style.backgroundColor = "#b8beb9";
    experiences.style.backgroundColor = "#b8beb9";
    for (i = 0; i < experienceDiv.length; ++i) {
      experienceDiv[i].style.backgroundColor = "#b8beb9";
    }
    //Adapted from https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/ accessed 01/11/2026
    //querySelectorAll returns an array of divs, these either have to be looped thorugh or styled one by one
    // darkMode = true;
  } else if (darkMode) {
    darkMode = false;
    body.style.backgroundColor = "#ffa500";
    header.style.backgroundColor = "#007000";
    footer.style.backgroundColor = "#ffa500";
    // heroBanner.style.backgroundColor = "#007000";
    ulHeader.style.backgroundColor = "#007000";
    experienceBody.style.backgroundColor = "#ffffff";
    experiences.style.backgroundColor = "#ffffff";
    for (i = 0; i < experienceDiv.length; ++i) {
      experienceDiv[i].style.backgroundColor = "#ffa500";
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
