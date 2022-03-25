const close = document.querySelector(".close-modal");
close.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("modal-active");
  document.querySelector(".overlay").classList.remove("overlay-active");
});

const close_menu = document.querySelector(".menu-close-modal");
close_menu.addEventListener("click", () => {
  document.querySelector(".menu-modal").classList.remove("menu-modal-active");
  document.querySelector(".overlay").classList.remove("overlay-active");
});
