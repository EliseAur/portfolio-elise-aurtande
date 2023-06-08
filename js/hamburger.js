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
    } else {
        const hamburgerButton = document.querySelector(".hamburger");
        hamburgerButton.style.display = "none";

        const navMenu = document.querySelector(".nav-menu");
        navMenu.removeEventListener("click", (event) => {
            if (event.target.matches(".nav-menu a")) {
                toggleMenu();
            }
        });
        navMenu.style.display = "grid";
    }
}

window.addEventListener("DOMContentLoaded", changeHamburger); // Run the function on page load
window.addEventListener("resize", changeHamburger); // Run the function on window resize
