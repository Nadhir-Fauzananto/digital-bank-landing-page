const openMenuBtn = document.getElementById("open-menu-btn")
const closeMenuBtn = document.getElementById("close-menu-btn")
const navLinks = document.getElementById("nav-links")
const navOverlay= document.getElementById("nav-overlay")
const navigationLinkItems = document.querySelectorAll(".navigation-link")

if (navigationLinkItems.length > 0) {
    navigationLinkItems.forEach(link => {
        link.addEventListener("click", () => {
            document.querySelector(".navigation-link.active-page")?.classList.remove("active-page")
            link.classList.add("active-page")
        })
    })
} else {
    console.error("navigationLinkItems does not exist")
}


// open menu
function openMenu() {
    if (openMenuBtn && closeMenuBtn && navLinks && navOverlay) {
    navLinks.classList.remove("hidden")
    closeMenuBtn.classList.remove("hidden")
    openMenuBtn.classList.add("hidden")
    navOverlay.classList.remove("hidden")
    navOverlay.classList.remove("overlay-hidden")
    navOverlay.classList.add("overlay-active")
    openMenuBtn.setAttribute("aria-expanded", "true")
    } else {
        console.error("an element is missing")
    }
}

openMenuBtn?.addEventListener("click", openMenu)

// close menu
function closeMenu() {
    if (openMenuBtn && closeMenuBtn && navLinks && navOverlay) {
    navLinks.classList.add("hidden")
    closeMenuBtn.classList.add("hidden")
    openMenuBtn.classList.remove("hidden")
    navOverlay.classList.add("hidden")
    navOverlay.classList.add("overlay-hidden")
    navOverlay.classList.remove("overlay-active")
    openMenuBtn.setAttribute("aria-expanded", "false")
    } else {
        console.error("an element is missing")
    }
}

closeMenuBtn?.addEventListener("click", closeMenu)
navOverlay?.addEventListener("click", closeMenu)