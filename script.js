/* ==========================
PRELOADER
========================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }

});

/* ==========================
MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon.classList.contains("fa-bars")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

}

/* ==========================
CLOSE MENU AFTER CLICK
========================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

/* ==========================
SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ==========================
STICKY HEADER
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#020617";

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.background = "#071120";

        header.style.boxShadow = "none";

    }

});

/* ==========================
BACK TO TOP BUTTON
========================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "flex";

        backToTop.style.alignItems = "center";

        backToTop.style.justifyContent = "center";

    } else {

        backToTop.style.display = "none";

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================
SCROLL REVEAL ANIMATION
========================== */

const revealElements = document.querySelectorAll(
".feature-box,.article-card,.tool-box,.category-card,.about-grid,.contact-grid"
);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
            element.classList.add("fade-up");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ==========================
ACTIVE NAVIGATION
========================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* ==========================
NEWSLETTER FORM
========================== */

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = this.querySelector("input").value.trim();

        if(email === ""){

            alert("Please enter your email address.");

            return;

        }

        alert("Thank you for subscribing!");

        this.reset();

    });

}

/* ==========================
CONTACT FORM
========================== */

const contactForm = document.querySelector(".contact-form form");

if(contactForm){

    contactForm.addEventListener("submit",function(e){

        e.preventDefault();

        const inputs=this.querySelectorAll("input, textarea");

        let valid=true;

        inputs.forEach(input=>{

            if(input.value.trim()===""){

                valid=false;

            }

        });

        if(!valid){

            alert("Please fill in all required fields.");

            return;

        }

        alert("Your message has been sent successfully.");

        this.reset();

    });

}

/* ==========================
CURRENT YEAR (Optional)
========================== */

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

/* ==========================
CONSOLE MESSAGE
========================== */

console.log("AI Future Lab Website Loaded Successfully");
