// index.js

// Function to handle smooth scrolling to the target section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Add a click event listener to each button in the header
const studentsButton = document.getElementById("students-button");
const professionalsButton = document.getElementById("professionals-button");
const individualsButton = document.getElementById("individuals-button");

studentsButton.addEventListener("click", () => {
    scrollToSection("students");
});

professionalsButton.addEventListener("click", () => {
    scrollToSection("professionals");
});

individualsButton.addEventListener("click", () => {
    scrollToSection("individuals");
});

// Add an alert when the "Contact Us" link is clicked
const contactLink = document.getElementById("contact-link");
contactLink.addEventListener("click", () => {
    alert("Thank you for contacting us. We will get back to you soon!");
});
