function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const burgerButton = document.querySelector(".burger-menu");
  const isHidden = mobileMenu.classList.contains("hidden");

  if (isHidden) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("show");
    burgerButton.classList.add("burger-active");
    burgerButton.setAttribute("aria-expanded", "true");
  } else {
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hidden");
    burgerButton.classList.remove("burger-active");
    burgerButton.setAttribute("aria-expanded", "false");
  }
}

document.addEventListener("click", function (event) {
  const mobileMenu = document.getElementById("mobileMenu");
  const burgerButton = document.querySelector(".burger-menu");
  const nav = document.querySelector("nav");

  if (!nav.contains(event.target) && !mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hidden");
    burgerButton.classList.remove("burger-active");
    burgerButton.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 1024) {
    // lg breakpoint
    const mobileMenu = document.getElementById("mobileMenu");
    const burgerButton = document.querySelector(".burger-menu");

    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hidden");
    burgerButton.classList.remove("burger-active");
    burgerButton.setAttribute("aria-expanded", "false");
  }
});
