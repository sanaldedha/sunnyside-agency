const nav = document.querySelector("#mainnav");
const list = nav.querySelector(".nav-list");
list.classList.add("nav-list--mobile");
const root = document.documentElement;
root.style.setProperty("--nav-height", "30px");

const menuBtn = document.createElement("button");
const menuIcon = document.createElement("img");

menuBtn.setAttribute("type", "button");
menuBtn.classList.add("btn--menu")
menuBtn.setAttribute("aria-expanded", "false");
menuBtn.setAttribute("aria-label", "Menu");
menuBtn.setAttribute("aria-controls", "mainnav");
menuIcon.setAttribute("src", "assets/images/icon-hamburger.svg");
menuIcon.setAttribute("alt", " ");
menuIcon.setAttribute("aria-hidden", "true");
menuIcon.setAttribute("width", "30px");
menuBtn.appendChild(menuIcon);
nav.insertBefore(menuBtn, list)

menuBtn.addEventListener("click", () => {
    const isClosed = menuBtn.getAttribute("aria-expanded") === "false"; //returns boolean
    isClosed ? menuIcon.setAttribute("src", "assets/images/icon-close.svg") : menuIcon.setAttribute("src", "assets/images/icon-hamburger.svg");
    menuBtn.setAttribute("aria-expanded", isClosed); //if isClosed is true, menu will expand and vice versa
})

nav.addEventListener("keyup", (e) => { //hide nav on escape
    if (e.code === "Escape") {
        menuBtn.setAttribute("aria-expanded", false); 
    }
})

//hide mobile menu when user clicks on a link

const navLinks = [...nav.querySelectorAll("a")];

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuBtn.setAttribute("aria-expanded", false); 
        menuIcon.setAttribute("src", "assets/images/icon-hamburger.svg");
    })
});

