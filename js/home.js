const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const hero = document.querySelector(".hero");

window.addEventListener("load", () => {
    document.body.classList.add("is-loaded");
});

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

hero.addEventListener("mousemove", (event) => {
    const heroBox = hero.getBoundingClientRect();
    const x = (event.clientX - heroBox.left) / heroBox.width - 0.5;
    const y = (event.clientY - heroBox.top) / heroBox.height - 0.5;

    hero.style.setProperty("--video-x", `${x * 24}px`);
    hero.style.setProperty("--video-y", `${y * 24}px`);
});

hero.addEventListener("mouseleave", () => {
    hero.style.setProperty("--video-x", "0px");
    hero.style.setProperty("--video-y", "0px");
});
