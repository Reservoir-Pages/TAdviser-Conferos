const burgerBtn = document.querySelector(".burger");
const burgerMenu = document.querySelector(".nav");

if (burgerBtn) {
  burgerBtn.addEventListener("click", (e) => {
    burgerBtn.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    document.body.classList.toggle("scroll-stop");
  });
}
