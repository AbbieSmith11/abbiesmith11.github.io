document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
  
  icon.addEventListener("click", function() {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    });
  });

  window.addEventListener('scroll', function() {
    const desktopNav = document.getElementById('desktop-nav');
    const hamburgerNav = document.getElementById('hamburger-nav');
  
    if (window.scrollY > 50) { // Adjust scroll distance as needed
      desktopNav.classList.add('shrink');
      hamburgerNav.classList.add('shrink');
    } else {
      desktopNav.classList.remove('shrink');
      hamburgerNav.classList.remove('shrink');
    }
  });