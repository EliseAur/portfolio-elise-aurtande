function changeHamburger() {
    const hamburgerButton = document.querySelector(".hamburger");
    const navBar = document.querySelector("nav");
    const navLink = document.querySelectorAll(".nav-menu a");
    const navLinkArray = Array.from(navLink);

    hamburgerButton.addEventListener("click", (event) => {
        if (hamburgerButton.innerHTML === `<i class="fas fa-bars" aria-hidden="true"></i>`) {
            hamburgerButton.innerHTML = `<i class="fas fa-times" aria-hidden="true"></i>`;
            navBar.style.display = "block";
        } else {
            if (hamburgerButton.innerHTML === `<i class="fas fa-times" aria-hidden="true"></i>`) {
                hamburgerButton.innerHTML = `<i class="fas fa-bars" aria-hidden="true"></i>`;
                navBar.style.display = "none";
            }
        }

        navLinkArray.forEach(function (link) {
            link.onclick = function () {
                navBar.style.display = "none";
                hamburgerButton.innerHTML = `<i class="fas fa-bars" aria-hidden="true"></i>`;
            };
        });
    });
}

changeHamburger();
