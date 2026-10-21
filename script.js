body = document.querySelector("body");
header = document.querySelector("header");
footer = document.querySelector("footer");
heroBanner = document.querySelector(".heroBanner");
ulHeader = document.querySelector("#ulHeader");
experienceBody = document.querySelector("#experiencesBody");
experiences = document.querySelector(".experiences");
experienceDiv = document.querySelector(".experienceDiv");

//Dark Mode Button

let darkMode = false;

//document.querySelector the button to change textcontent to Normal colors
//Maybe have a class called wasGreen or wasOrange for example and then apply it to all of a certain color so it is easy to change in a pattern
//Only one experienceDIV changin color, querySelectorAll giving syntax errors?
//Finalise actual color shceme for use and get rid of test alternate colors

function toggleDarkMode() {
  // darkMode = true;
  if (!darkMode) {
    console.log("darkMode");
    body.style.backgroundColor = "#2bda14";
    header.style.backgroundColor = "#14da35";
    footer.style.backgroundColor = "#14da35";
    // heroBanner.style.backgroundColor = "#14da35";
    ulHeader.style.backgroundColor = "#14da35";
    experienceBody.style.backgroundColor = "#14da35";
    experiences.style.backgroundColor = "#14da35";
    experienceDiv.style.backgroundColor = "#14da35";
    darkMode = true;
  } else if (darkMode) {
    body.style.backgroundColor = "#5914da";
    header.style.backgroundColor = "#5914da";
    footer.style.backgroundColor = "#5914da";
    // heroBanner.style.backgroundColor = "#5914da";
    ulHeader.style.backgroundColor = "#5914da";
    experienceBody.style.backgroundColor = "#5914da";
    experiences.style.backgroundColor = "#5914da";
    experienceDiv.style.backgroundColor = "#5914da";
    darkMode = false;
    console.log("lightMode");
  }
}

// function lightMode() {
//   experienceDiv.addEventListener("click", function showText() {
//     alert("this will display text");
//     /*Display the text on the other side here */
//   });
// }
