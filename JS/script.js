// Slideshow logic using JavaScript
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// ... (previous script) ...

// Get reference to the span element
const nameSpan = document.getElementById("nameSpan");

// Set the name you want to display
const name = "Mayesa"; // Set the desired name here

// Update the text of the span element
nameSpan.textContent = name;

//message-form
// Get references to elements
const outputName = document.getElementById("outputName");
const outputBirthdate = document.getElementById("outputBirthdate");
const outputGender = document.getElementById("outputGender");
const outputMessage = document.getElementById("outputMessage");
const timeElement = document.getElementById("time");
const contactForm = document.getElementById("contact-form");

// Update the time every second
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  timeElement.textContent = timeString;
}

setInterval(updateTime, 1000); // Update every second

// Add event listener to the form submission
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get form input values
  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;
  const message = document.getElementById("message").value;

  // Display output
  outputName.textContent = name;
  outputBirthdate.textContent = birthdate;
  outputGender.textContent = gender;
  outputMessage.textContent = message;
});
