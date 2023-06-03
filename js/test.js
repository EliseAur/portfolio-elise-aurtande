// function changeHamburger() {
//     const width = window.innerWidth;
//     if (width < 810) {
//         const hamburgerButton = document.querySelector(".hamburger");
//         const hamburgerIcon = document.querySelector(".hamburger i");
//         const navBar = document.querySelector("nav");
//         const navMenu = document.querySelector(".nav-menu");
//         const toggleMenu = () => {
//             hamburgerIcon.classList.toggle("fa-times");
//             navBar.classList.toggle("show");
//         };

//         hamburgerButton.addEventListener("click", toggleMenu);

//         navMenu.addEventListener("click", (event) => {
//             if (event.target.matches(".nav-menu a")) {
//                 toggleMenu();
//             }
//         });
//     }
// }

// window.onresize = changeHamburger;

// function changeHamburger() {
//     const width = window.innerWidth;

//     if (width < 810) {
//         const hamburgerButton = document.querySelector(".hamburger");
//         const hamburgerIcon = document.querySelector(".hamburger i");
//         const navBar = document.querySelector("nav");
//         const navMenu = document.querySelector(".nav-menu");

//         const toggleMenu = () => {
//             hamburgerIcon.classList.toggle("fa-times");
//             navBar.classList.toggle("show");
//         };

//         hamburgerButton.addEventListener("click", toggleMenu);

//         navMenu.addEventListener("click", (event) => {
//             if (event.target.matches(".nav-menu a")) {
//                 toggleMenu();
//             }
//         });
//     } else {
//         // Remove the hamburger menu functionality if the window width is greater than or equal to 810 pixels
//         const hamburgerButton = document.querySelector(".hamburger");
//         hamburgerButton.removeEventListener("click", toggleMenu);
//         hamburgerButton.style.display = "none";

//         const navMenu = document.querySelector(".nav-menu");
//         navMenu.removeEventListener("click", (event) => {
//             if (event.target.matches(".nav-menu a")) {
//                 toggleMenu();
//             }
//         });
//         navMenu.style.display = "grid";
//     }
// }

// window.onresize = changeHamburger;

function changeHamburger() {
    const width = window.innerWidth;
    const hamburgerButton = document.querySelector(".hamburger");

    if (width < 810) {
        hamburgerButton.style.display = "block";
        const hamburgerIcon = document.querySelector(".hamburger i");
        const navBar = document.querySelector("nav");
        const navMenu = document.querySelector(".nav-menu");

        const toggleMenu = () => {
            hamburgerIcon.classList.toggle("fa-times");
            navBar.classList.toggle("show");
        };

        hamburgerButton.addEventListener("click", toggleMenu);

        navMenu.addEventListener("click", (event) => {
            if (event.target.matches(".nav-menu a")) {
                toggleMenu();
            }
        });

        // navMenu.style.display = "none"; // Hide the navigation menu
    } else {
        const hamburgerButton = document.querySelector(".hamburger");
        hamburgerButton.style.display = "none"; // Hide the hamburger button

        const navMenu = document.querySelector(".nav-menu");
        navMenu.removeEventListener("click", (event) => {
            if (event.target.matches(".nav-menu a")) {
                toggleMenu();
            }
        });
        navMenu.style.display = "grid"; // Display the navigation menu as a grid
    }
}

window.addEventListener("DOMContentLoaded", changeHamburger); // Run the function on page load
window.addEventListener("resize", changeHamburger); // Run the function on window resize
