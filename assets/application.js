window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelectorAll("[id=nav_list]");
  const menu = document.querySelector("#display_menu");
  console.log(nav);
  nav.forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
      const target = e.target.innerText;
      if (target === "nos produits".toUpperCase()) {
        menu.classList.remove("hidden");
      }
    });
    menu.addEventListener("mouseleave", (e) => {
      const target = e.target.innerText;

      menu.classList.add("hidden");
    });
  });
});
