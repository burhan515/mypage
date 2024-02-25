// // Select the navbar element
// const navbar = document.querySelector('.navbar');

// // Function to change navbar color on scroll
// function changeNavbarColor() {
//     if (window.scrollY > 0) {
//         navbar.style.backgroundColor = '#6495ED'; // Change to blue color
//     } else {
//         navbar.style.backgroundColor = 'transparent'; // Change back to transparent
//     }
// }

// // Event listener for scroll event
// window.addEventListener('scroll', changeNavbarColor);

// Select the navbar element
const navbar = document.querySelector('.navbar');

// Function to change navbar color on scroll
function changeNavbarColor() {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#6495ED'; // Change to blue color
    } else {
        navbar.style.backgroundColor = 'transparent'; // Change back to transparent
    }
}

// Event listener for scroll event
window.addEventListener('scroll', changeNavbarColor);

// Function to change navbar color on scroll
function changeNavbarColor() {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#6495ED'; // Change to blue color
        document.querySelector('.logo a span').style.color = '#fff'; // Change "lio" color to white
    } else {
        navbar.style.backgroundColor = 'transparent'; // Change back to transparent
        document.querySelector('.logo a span').style.color = '#6495ED'; // Change "lio" color back to original color
    }
}




document.addEventListener('DOMContentLoaded', function(){
    var typed = new Typed('#typed', {
        strings: ['Web Developer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});


document.addEventListener('DOMContentLoaded', function(){
    // Array of roles to display before "I'm Muhtashim and I'm a"
    var roles = ["Video Editor", "Web Developer", "Freelancer"];

    // Get the element where the typing animation will be displayed
    var typingElement = document.querySelector('.typing-2');

    // Function to display roles one after the other
    function displayRoles() {
        roles.forEach(function(role, index) {
            setTimeout(function() {
                typingElement.textContent = role;
            }, index * 2000); // Adjust the time interval (in milliseconds) between each role
        });
    }

    // Call the function to display roles before starting the typing animation
    displayRoles();

    // Initialize Typed.js for the typing animation
    var typed = new Typed('.typing-2', {
        strings: ['Video Editor', 'Web Developer', 'Freelancer'], // Add your additional strings here
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});


