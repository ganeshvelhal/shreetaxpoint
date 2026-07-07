/*====================================================
  SHREE ACCOUNTING & TAXATION SERVICES
  Modern JavaScript
  Part 1
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        ELEMENTS
    =========================================*/

    const header = document.querySelector(".header");
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.getElementById("navbar");
    const topBtn = document.getElementById("topBtn");
    const navLinks = document.querySelectorAll(".navbar a");

    /*=========================================
        STICKY HEADER
    =========================================*/

    function stickyHeader() {

        if (window.scrollY > 60) {

            header.style.background = "rgba(255,255,255,.96)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        } else {

            header.style.background = "rgba(255,255,255,.88)";
            header.style.boxShadow = "none";

        }

    }

    window.addEventListener("scroll", stickyHeader);

    /*=========================================
        MOBILE MENU
    =========================================*/

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", () => {

            navbar.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navbar.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");

            } else {

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            }

        });

    }

    /*=========================================
        CLOSE MENU WHEN LINK CLICKED
    =========================================*/

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        });

    });

    /*=========================================
        SMOOTH SCROLL
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

              
    /*=========================================
        SCROLL TO TOP BUTTON
    =========================================*/

    function toggleTopButton() {

        if (window.scrollY > 350) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    }

    window.addEventListener("scroll", toggleTopButton);

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

       

  

    }

    /*=========================================
        SCROLL REVEAL ANIMATION
    =========================================*/

    const revealElements = document.querySelectorAll(
        ".service-card, .why-card, .testimonial-card, .about-image, .about-content, .trust-box"
    );

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

       
    }, {
        threshold: 0.15


    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all .8s ease";

        revealObserver.observe(el);


    /*=========================================
        COUNTER ANIMATION
    =========================================*/

    const counterSection = document.querySelector(".counter");

    if (counterSection) {

        const counterObserver = new IntersectionObserver((entries) => {

            if (!entries[0].isIntersecting) return;

            const counters = counterSection.querySelectorAll("h2");

            counters.forEach(counter => {

                const text = counter.innerText;

                const target = parseInt(text.replace(/\D/g, ""));

                const suffix = text.replace(/[0-9]/g, "");

                let current = 0;

                const increment = Math.max(1, Math.ceil(target / 100));

                const timer = setInterval(() => {

                    current += increment;

                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }

                    counter.innerText = current + suffix;

                }, 20);

            });

            counterObserver.disconnect();

        }, {
            threshold: 0.4
        });

        counterObserver.observe(counterSection);

    }

    /*=========================================
        ACTIVE MENU ON SCROLL
    =========================================*/

    const sections = document.querySelectorAll("section");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                currentSection = section.className.split(" ")[0];

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "index.html" && currentSection === "hero") {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    /*=========================================
        IMAGE HOVER EFFECT
    =========================================*/

    const aboutImage = document.querySelector(".about-image img");

    if (aboutImage) {

        aboutImage.addEventListener("mouseenter", () => {

            aboutImage.style.transform = "scale(1.04)";
            aboutImage.style.transition = ".4s";

        });

        aboutImage.addEventListener("mouseleave", () => {

            aboutImage.style.transform = "scale(1)";

        });

    }

    /*=========================================
        PAGE FADE-IN
    =========================================*/

    document.body.style.opacity = "0";

    window.addEventListener("load", () => {

        document.body.style.transition = "opacity .6s ease";
        document.body.style.opacity = "1";

    /*=========================================
        CLOSE MENU WHEN CLICKING OUTSIDE
    =========================================*/

    document.addEventListener("click", (e) => {

        if (!navbar || !menuBtn) return;

        const clickedNavbar = navbar.contains(e.target);
        const clickedButton = menuBtn.contains(e.target);

        if (
            navbar.classList.contains("active") &&
            !clickedNavbar &&
            !clickedButton
        ) {

            navbar.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }

        }

    /*=========================================
        ESC KEY CLOSE MENU
    =========================================*/

    document.addEventListener("keydown", (e) => {

        if (e.key !== "Escape") return;

        if (!navbar || !menuBtn) return;

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

     /*=========================================
        HEADER SHRINK
    =========================================*/

    function resizeHeader() {

        if (!header) return;

        if (window.scrollY > 80) {

            header.style.padding = "0";

        } else {

            header.style.padding = "";

        }

    }

    window.addEventListener("scroll", resizeHeader);

    /*=========================================
        REDUCED MOTION SUPPORT
    =========================================*/

    const prefersReducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches) {

        document.documentElement.style.scrollBehavior = "auto";

    }

    /*=========================================
        THROTTLE
    =========================================*/

    function throttle(callback, delay) {

        let waiting = false;

        return function () {

            if (waiting) return;

            callback.apply(this, arguments);

            waiting = true;

            setTimeout(() => {

                waiting = false;

            }, delay);

        };

    }

    window.addEventListener(
        "scroll",
        throttle(() => {

            stickyHeader();
            toggleTopButton();
            resizeHeader();
            updateActiveNav();

        }, 20)
    );

    /*=========================================
        BUTTON RIPPLE EFFECT
    =========================================*/

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const circle = document.createElement("span");

            const diameter = Math.max(
                this.clientWidth,
                this.clientHeight
            );

            circle.style.width = diameter + "px";
            circle.style.height = diameter + "px";

            circle.style.left =
                e.clientX -
                this.getBoundingClientRect().left -
                diameter / 2 + "px";

            circle.style.top =
                e.clientY -
                this.getBoundingClientRect().top -
                diameter / 2 + "px";

            circle.style.position = "absolute";
            circle.style.borderRadius = "50%";
            circle.style.background = "rgba(255,255,255,.35)";
            circle.style.transform = "scale(0)";
            circle.style.animation = "ripple .6s linear";
            circle.style.pointerEvents = "none";

            this.style.position = "relative";
            this.style.overflow = "hidden";

            this.appendChild(circle);

            setTimeout(() => {

                circle.remove();

            }, 600);

       
    /*=========================================
        PAGE LOADED
    =========================================*/

    console.log(
        "%c✔ Shree Accounting Website Loaded",
        "color:#10b981;font-size:14px;font-weight:bold;"
    );
