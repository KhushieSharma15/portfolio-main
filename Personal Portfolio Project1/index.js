const booking = document.querySelector(".booking");
booking.addEventListener("click", () => {
  document.querySelector(".modal").classList.add("modal-active");
  document.querySelector(".overlay").classList.add("overlay-active");
});
const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
  document.querySelector(".menu-modal").classList.add("menu-modal-active");
  document.querySelector(".overlay").classList.add("overlay-active");
});

const close = document.querySelector(".close-modal");
close.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("modal-active");
  document.querySelector(".overlay").classList.remove("overlay-active");
});
