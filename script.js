const tahun = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${tahun} Khalisa Huemaiira - Teknik Informatika`;
}


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});