const openMenuBtn = document.getElementById("open-menu-btn")
const closeMenuBtn = document.getElementById("close-menu-btn")
const navLinks = document.getElementById("nav-links")
const navOverlay= document.getElementById("nav-overlay")
const navigationLinkItems = document.querySelectorAll(".navigation-link")

navigationLinkItems.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".navigation-link.active-page")?.classList.remove("active-page")
        link.classList.add("active-page")
    })
})

// open menu
function openMenu() {
    navLinks.classList.remove("hidden")
    closeMenuBtn.classList.remove("hidden")
    openMenuBtn.classList.add("hidden")
    navOverlay.classList.remove("hidden")
    navOverlay.classList.remove("overlay-hidden")
    navOverlay.classList.add("overlay-active")
    openMenuBtn.ariaExpanded = "true"
}

openMenuBtn.addEventListener("click", openMenu)

// close menu
function closeMenu() {
    navLinks.classList.add("hidden")
    closeMenuBtn.classList.add("hidden")
    openMenuBtn.classList.remove("hidden")
    navOverlay.classList.add("hidden")
    navOverlay.classList.add("overlay-hidden")
    navOverlay.classList.remove("overlay-active")
    openMenuBtn.ariaExpanded = "false"
}

closeMenuBtn.addEventListener("click", closeMenu)
navOverlay.addEventListener("click", closeMenu)