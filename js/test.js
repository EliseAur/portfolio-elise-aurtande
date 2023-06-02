// function changeHamburger() {
//     const hamburgerButton = document.querySelector(".hamburger");
//     const hamburgerIcon = document.querySelector(".hamburger i");
//     const navBar = document.querySelector("nav");
//     const navLink = document.querySelectorAll(".nav-menu a");

//     const toggleMenu = () => {
//         hamburgerIcon.classList.toggle("fa-times");

//         if ((hamburgerIcon.classList.contains = "fa-times")) {
//             navBar.style.display = "block";
//         } else {
//             navBar.style.display = "none";
//         }

//         navBar.classList.toggle("show");
//         if (navBar.classList != "show") {
//             navBar.style.display = "none";
//         }
//     };

//     hamburgerButton.addEventListener("click", toggleMenu);

//     navLink.forEach((link) => {
//         link.addEventListener("click", () => {
//             toggleMenu();
//         });
//     });
// }

// changeHamburger();

function changeHamburger() {
    const hamburgerButton = document.querySelector(".hamburger");
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
}

changeHamburger();
