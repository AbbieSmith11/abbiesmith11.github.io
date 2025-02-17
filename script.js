document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
  
  icon.addEventListener("click", function() {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    });
  });
  

