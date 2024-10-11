const mobileMenu = document.getElementById("mobile-menu");
const navbarLinks = document.querySelector(".navbar-links");

mobileMenu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
