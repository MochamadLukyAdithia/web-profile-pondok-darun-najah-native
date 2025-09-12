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

// Modal
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("myModal");
const modalContent = document.getElementById("modalContent");

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");

  // animasi muncul
  setTimeout(() => {
    modalContent.classList.remove("scale-95", "opacity-0");
    modalContent.classList.add("scale-100", "opacity-100");
  }, 10);
});

function closeModalFunc() {
  // animasi hilang
  modalContent.classList.remove("scale-100", "opacity-100");
  modalContent.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}

closeModal.addEventListener("click", closeModalFunc);

// klik di luar modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModalFunc();
  }
});

// Swiper
