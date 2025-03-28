// Smooth Scrolling & Header Animation
window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// ABOUT SECTION JS//

// Header Scroll Effect (Optional, for sticky navbar)
window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth Fade-in Animation on Scroll
const sections = document.querySelectorAll("section");

const revealSection = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// Mobile Menu Toggle (Optional, if you have a navbar)
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

// SKILL SECTION JS //

// Skill Bar Animation on Scroll
const skillBars = document.querySelectorAll(".progress");

const revealSkills = () => {
    skillBars.forEach((bar) => {
        let width = bar.style.width;
        bar.style.width = "0%"; // Reset width to 0 for animation effect
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
};

// Run animation when the section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            revealSkills();
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector("#skills"));

// PROJECT SECTION JS//
// Fade-in Animation for Project Section on Scroll
const projectSection = document.querySelector("#projects");

const fadeInProjects = () => {
    const sectionPos = projectSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos) {
        projectSection.style.opacity = "1";
        projectSection.style.transform = "translateY(0)";
    }
};

window.addEventListener("scroll", fadeInProjects);
fadeInProjects();

// CONTACT ME SECTION JS//
// Form Submission Alert with Animation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let btn = document.querySelector(".send-btn");
    btn.innerHTML = "Sending...";
    btn.style.background = "#ff5500";

    setTimeout(() => {
        alert("Your message has been sent successfully!");
        this.reset();
        btn.innerHTML = "Send Message";
        btn.style.background = "#ff9800";
    }, 2000);
});

//FOOTER JS //

