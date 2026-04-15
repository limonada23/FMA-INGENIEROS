let index = 0;
const slides = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let interval;

if (dotsContainer) {
    slides.forEach((_, i) => {
        let dot = document.createElement("span");
        dot.addEventListener("click", () => showSlide(i));
        dotsContainer.appendChild(dot);
    });
}

const dots = document.querySelectorAll(".dots span");

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    index = i;
    slides[index].classList.add("active");

    if (dots[index]) {
        dots[index].classList.add("active");
    }
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

if (next) {
    next.addEventListener("click", () => {
        nextSlide();
        stopSlider();
        startSlider();
    });
}

if (prev) {
    prev.addEventListener("click", () => {
        prevSlide();
        stopSlider();
        startSlider();
    });
}

function startSlider() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 4000);
}

function stopSlider() {
    clearInterval(interval);
}

const slider = document.querySelector(".slider");

if (slider) {
    slider.addEventListener("mouseenter", stopSlider);
    slider.addEventListener("mouseleave", startSlider);

    let startX = 0;

    slider.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", e => {
        let endX = e.changedTouches[0].clientX;

        if (startX > endX + 50) nextSlide();
        if (startX < endX - 50) prevSlide();
    });
}

if (slides.length > 0) {
    showSlide(0);
    startSlider();
}

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const scrollDown = document.querySelector(".scroll-down");

if (scrollDown) {
    scrollDown.addEventListener("click", () => {
        window.scrollBy({
            top: 400, 
            behavior: "smooth"
        });
    });
}

const nosotros = document.querySelector(".nosotros");

if (nosotros) {
    window.addEventListener("scroll", () => {
        const top = nosotros.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) {
            nosotros.classList.add("show");
        }
    });
}

const toggle = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');

if (toggle && menu) {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('active');
    });
}

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const headerEl = document.querySelector('header');
const mobileDropdown = document.querySelector('.dropdown');
const mobileDropdownTrigger = mobileDropdown ? mobileDropdown.querySelector('a') : null;

if (hamburger && headerEl) {
    hamburger.addEventListener('click', () => {
        headerEl.classList.toggle('nav-open');
        const isOpen = headerEl.classList.contains('nav-open');
        hamburger.setAttribute('aria-expanded', String(isOpen));

        if (!isOpen && mobileDropdown) {
            mobileDropdown.classList.remove('open');
        }
    });

    if (mobileDropdown && mobileDropdownTrigger) {
        mobileDropdownTrigger.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                mobileDropdown.classList.toggle('open');
            }
        });
    }

    // Close nav when a nav link is clicked
    document.querySelectorAll('nav a').forEach(a => {
        a.addEventListener('click', () => {
            const isServiciosTrigger = mobileDropdown && mobileDropdownTrigger && a === mobileDropdownTrigger;

            if (window.innerWidth <= 768 && isServiciosTrigger) {
                return;
            }

            headerEl.classList.remove('nav-open');
            hamburger.setAttribute('aria-expanded', 'false');

            if (mobileDropdown) {
                mobileDropdown.classList.remove('open');
            }
        });
    });

    // Close nav when clicking outside the header
    document.addEventListener('click', e => {
        if (!headerEl.contains(e.target)) {
            headerEl.classList.remove('nav-open');
            hamburger.setAttribute('aria-expanded', 'false');

            if (mobileDropdown) {
                mobileDropdown.classList.remove('open');
            }
        }
    });
}