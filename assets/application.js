const plus = document.getElementById('input_plus')
const minus = document.getElementById('input_minus')
const inputQuantity = document.getElementById('quantity')

window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelectorAll("[id=nav_list]");
  const menu = document.querySelector("#display_menu");


  nav.forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
      const target = e.target.innerText;
      if (target === "nos produits".toUpperCase()) {
        menu.classList.remove("hidden");
      }
    });
    menu.addEventListener("mouseleave", () => {
     menu.classList.add("hidden");
    });
  });
  


});



const openMenu = () => {
  document.getElementById("mobile-menu").classList.remove("hidden");
};
const closeMenu = () => {
  document.getElementById("mobile-menu").classList.add("hidden");
};



plus.addEventListener('click', (e) => {
  e.preventDefault();
  inputQuantity.stepUp()
  
})
minus.addEventListener('click', (e) => {
  e.preventDefault();
  inputQuantity.stepDown()
  
})
