const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const introSection = document.querySelector(".intro-section");
const newsletterModal = document.querySelector("#newsletter-modal");
const newsletterForm = document.querySelector("[data-newsletter-form]");
const newsletterOpenButtons = document.querySelectorAll("[data-newsletter-open]");
const newsletterCloseButtons = document.querySelectorAll("[data-newsletter-close]");
const newsletterEmailInput = document.querySelector("#newsletter-email");
let newsletterTimer;

function hasDismissedNewsletterPopup() {
    try {
        return sessionStorage.getItem("newsletter-popup-dismissed") === "true";
    } catch (error) {
        return false;
    }
}

function setDismissedNewsletterPopup() {
    try {
        sessionStorage.setItem("newsletter-popup-dismissed", "true");
    } catch (error) {
        // Ignore storage failures and fall back to the current session state.
    }
}

function openNewsletterModal() {
    if (!newsletterModal) {
        return;
    }

    newsletterModal.hidden = false;
    document.body.classList.add("is-modal-open");

    if (newsletterEmailInput) {
        window.setTimeout(() => newsletterEmailInput.focus(), 50);
    }
}

function closeNewsletterModal() {
    if (!newsletterModal) {
        return;
    }

    if (newsletterTimer) {
        window.clearTimeout(newsletterTimer);
        newsletterTimer = undefined;
    }

    newsletterModal.hidden = true;
    document.body.classList.remove("is-modal-open");
}

window.addEventListener("load", () => {
    document.body.classList.add("is-loaded");

    if (newsletterModal && !hasDismissedNewsletterPopup()) {
        newsletterTimer = window.setTimeout(() => {
            openNewsletterModal();
        }, 1800);
    }
});

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    siteNav.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            siteNav.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}

if (introSection) {
    introSection.addEventListener("mousemove", (event) => {
        const introBox = introSection.getBoundingClientRect();
        const x = (event.clientX - introBox.left) / introBox.width - 0.5;
        const y = (event.clientY - introBox.top) / introBox.height - 0.5;

        introSection.style.setProperty("--video-x", `${x * 24}px`);
        introSection.style.setProperty("--video-y", `${y * 24}px`);
    });

    introSection.addEventListener("mouseleave", () => {
        introSection.style.setProperty("--video-x", "0px");
        introSection.style.setProperty("--video-y", "0px");
    });
}

newsletterOpenButtons.forEach((button) => {
    button.addEventListener("click", openNewsletterModal);
});

newsletterCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
        closeNewsletterModal();
        setDismissedNewsletterPopup();
    });
});

if (newsletterModal) {
    newsletterModal.addEventListener("click", (event) => {
        if (event.target === newsletterModal || event.target.matches("[data-newsletter-close]")) {
            closeNewsletterModal();
            setDismissedNewsletterPopup();
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !newsletterModal.hidden) {
            closeNewsletterModal();
            setDismissedNewsletterPopup();
        }
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = newsletterEmailInput ? newsletterEmailInput.value.trim() : "";
        if (!email) {
            return;
        }

        const subject = encodeURIComponent("Inschrijven voor de YB Repairs mail");
        const body = encodeURIComponent(`Hoi YB Repairs,\r\n\r\nIk wil me inschrijven met dit e-mailadres: ${email}`);
        window.location.href = `mailto:info@ybrepairs.nl?subject=${subject}&body=${body}`;

        closeNewsletterModal();
        setDismissedNewsletterPopup();
    });
}

const serviceSection = document.querySelector(".service-section");
const pcBuildSection = document.querySelector(".pc-build-section");
const cardElements = document.querySelectorAll(".info-cards .info-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            entry.target.classList.add("animate-in");
        }
    });
}, { threshold: 0.15 });

if (serviceSection) {
    observer.observe(serviceSection);
}

if (pcBuildSection) {
    observer.observe(pcBuildSection);
}

if (cardElements.length) {
    cardElements.forEach(card => observer.observe(card));
}
