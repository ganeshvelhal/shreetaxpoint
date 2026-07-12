/*==================================================
Shree Accounting & Taxation Services
Main JavaScript
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initStickyHeader();
    initMobileMenu();
    initScrollTop();
    initSmoothScroll();

});


/*==================================================
Sticky Header
==================================================*/

function initStickyHeader() {

    const header = document.querySelector(".header");

    if (!header) return;

    function updateHeader() {

        if (window.scrollY > 60) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

}


/*==================================================
Mobile Menu
==================================================*/

function initMobileMenu() {

    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.getElementById("navbar");

    if (!menuBtn || !navbar) return;

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        menuBtn.innerHTML = navbar.classList.contains("active")
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';

    });

    document.querySelectorAll("#navbar a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

        });

    });

    document.addEventListener("click", (e) => {

        if (
            !navbar.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {

            navbar.classList.remove("active");

            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

        }

    });

}


/*==================================================
Scroll To Top Button
==================================================*/

function initScrollTop() {

    const topBtn = document.getElementById("topBtn");

    if (!topBtn) return;

    window.addEventListener("scroll", () => {

        topBtn.style.display =
            window.scrollY > 400
                ? "flex"
                : "none";

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/*==================================================
Smooth Anchor Scroll
==================================================*/

function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

}

/*==================================================
Fade-up Animation
==================================================*/

function initRevealAnimation() {

    const elements = document.querySelectorAll(
        ".service-card, .why-card, .testimonial-card, .contact-card, .trust-box, .counter-grid > div, .mission-card, .achievement-card"
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-up");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    elements.forEach(el => observer.observe(el));

}


/*==================================================
Counter Animation
==================================================*/

function initCounterAnimation() {

    const counters = document.querySelectorAll(".counter-grid h2");

    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            observer.unobserve(counter);

            const target = parseInt(counter.textContent.replace(/\D/g, ""));

            if (isNaN(target)) return;

            let current = 0;

            const duration = 1800;

            const increment = Math.ceil(target / (duration / 20));

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                const suffix = counter.textContent.includes("%")
                    ? "%"
                    : "+";

                counter.textContent = current + suffix;

            }, 20);

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => observer.observe(counter));

}


/*==================================================
Scroll Progress (Optional)
==================================================*/

function initScrollProgress() {

    const progress = document.createElement("div");

    progress.id = "scroll-progress";

    document.body.appendChild(progress);

    window.addEventListener("scroll", () => {

        const total =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const width = (window.scrollY / total) * 100;

        progress.style.width = width + "%";

    });

}


/*==================================================
Lazy Image Fade
==================================================*/

function initImageAnimation() {

    const images = document.querySelectorAll("img");

    if (!images.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    });

    images.forEach(img => {

        img.style.opacity = "0";

        img.style.transform = "translateY(30px)";

        img.style.transition = ".7s";

        observer.observe(img);

    });

}


/*==================================================
Initialize Part 2
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initRevealAnimation();

    initCounterAnimation();

    initScrollProgress();

    initImageAnimation();

});

/*==================================================
Contact Form Submission
==================================================*/

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbxNV4E5KPX8nLMoltM2uzyY4fB3ShdHVGQfF1EXOikfNmjJ07Zx3H7dmLBA0vHDXUReVQ/exec";


function initContactForms() {

    const forms = document.querySelectorAll(".contactForm");

    if (!forms.length) return;

    forms.forEach(form => {

        form.addEventListener("submit", submitForm);

    });

}


async function submitForm(e) {

    e.preventDefault();

    const form = e.target;

    const button = form.querySelector("button");

    const originalText = button.innerHTML;

    const name = form.querySelector("[name='name']").value.trim();
    const email = form.querySelector("[name='email']").value.trim();
    const phone = form.querySelector("[name='phone']").value.trim();
    const service = form.querySelector("[name='service']").value;
    const message = form.querySelector("[name='message']").value.trim();


    /*==========================
    Validation
    ==========================*/

    if (name.length < 3) {

        alert("Please enter your full name.");

        return;

    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }

    const phonePattern =
    /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone)) {

        alert("Please enter a valid 10-digit mobile number.");

        return;

    }

    if (service === "") {

        alert("Please select a service.");

        return;

    }


    /*==========================
    Loading
    ==========================*/

    button.disabled = true;

    button.innerHTML =
    '<i class="fas fa-spinner fa-spin"></i> Sending...';


    const formData = {

        name,

        email,

        phone,

        service,

        message

    };


    try {

    await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(formData)
    });

    button.innerHTML = `
    <i class="fas fa-check"></i>
    Submitted Successfully
`;
        
    alert("✅ Thank you! Your enquiry has been submitted.");

    form.reset();

}

catch (error) {

    console.error(error);

    alert("❌ Unable to submit. Please try again.");

}

finally {

    button.disabled = false;

    button.innerHTML = originalText;

}

}


/*==================================================
Auto Initialize
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initContactForms();

});

/*==================================================
Part 4 - Final Utilities & Performance
==================================================*/


/*==================================================
Active Navigation
==================================================*/

function initActiveNavigation() {

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".navbar a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

}


/*==================================================
Update Copyright Year
==================================================*/

function updateCopyrightYear() {

    const year = new Date().getFullYear();

    document.querySelectorAll(".copyright-year").forEach(el => {

        el.textContent = year;

    });

}


/*==================================================
Escape Key Closes Mobile Menu
==================================================*/

function initEscapeKey() {

    const navbar = document.getElementById("navbar");
    const menuBtn = document.getElementById("menu-btn");

    if (!navbar || !menuBtn) return;

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            navbar.classList.remove("active");

            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

        }

    });

}


/*==================================================
Button Ripple Effect
==================================================*/

function initRippleEffect() {

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            const rect = this.getBoundingClientRect();

            const size = Math.max(rect.width, rect.height);

            ripple.style.width = ripple.style.height = size + "px";

            ripple.style.left = (e.clientX - rect.left - size / 2) + "px";

            ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

            ripple.className = "ripple";

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);

        });

    });

}


/*==================================================
Page Loader
==================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*==================================================
Performance
==================================================*/

let resizeTimer;

window.addEventListener("resize", () => {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {

        console.log("Layout updated");

    }, 250);

});


/*==================================================
Initialize Final Part
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initActiveNavigation();

    updateCopyrightYear();

    initEscapeKey();

    initRippleEffect();

});


/*==================================================
Website Ready
==================================================*/

console.log("%cShree Accounting & Taxation Services",
"color:#0B3C5D;font-size:18px;font-weight:bold;");

console.log("%cWebsite Loaded Successfully",
"color:#198754;font-size:14px;");
