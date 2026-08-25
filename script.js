/* =========================
   PREMIUM LOADING SCREEN
========================= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1800);
});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});


/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

reveals.forEach(element => {
    revealObserver.observe(element);
});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

const navObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                const id = entry.target.getAttribute("id");

                navLinks.forEach(link => {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    },
    {
        threshold: 0.5
    }
);

sections.forEach(section => {
    navObserver.observe(section);
});


/* =========================
   PROJECT MODAL
========================= */

const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const closeModal = document.getElementById("modalClose");

const projectButtons = document.querySelectorAll(".project-open");


projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        modalImage.src = button.dataset.image;
        modalTitle.textContent = button.dataset.title;
        modalDescription.textContent = button.dataset.description;

        modal.classList.add("active");
        document.body.classList.add("modal-open");

    });

});


function closeProjectModal() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}


closeModal.addEventListener("click", closeProjectModal);

document.querySelector(".modal-backdrop")
    .addEventListener("click", closeProjectModal);


/* =========================
   CLOSE MODAL WITH ESC
========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeProjectModal();
    }

});
