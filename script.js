// =========================
// WEBSITE PORTOFOLIO KHALISA HUEMAIIRA
// =========================

console.log("Website Portofolio Khalisa Huemaiira aktif!");


// =========================
// ANIMASI KARTU PROJECT
// =========================

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(25px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});


// =========================
// NAVBAR ACTIVE CLICK
// =========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.style.color = "#292522";
        });

        link.style.color = "#9b7256";

    });

});


// =========================
// BUTTON PROJECT
// =========================

const projectButton = document.querySelector(
    'a[href="#projects"]'
);

if (projectButton) {

    projectButton.addEventListener("click", function () {

        console.log("Membuka bagian proyek...");

    });

}