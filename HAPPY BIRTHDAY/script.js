// Mobile navbar
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close mobile navbar after choosing a menu
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// Letter button: scroll to letter section
document.querySelectorAll('a[href="#letter"]').forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
  });
});

// Birthday wish button
const wishButton = document.getElementById("wishButton");
const wishMessage = document.getElementById("wishMessage");

wishButton.addEventListener("click", () => {
  wishMessage.textContent = "Semoga semua wish kamu terkabul. Happy Birthday! ♡";
  wishButton.textContent = "WISH SENT ✨";
});
