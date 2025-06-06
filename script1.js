document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const servicesDropdown = document.querySelector('.services-dropdown'); // <-- Add this line

  if (!menuToggle || !navLinks) return;

  // Toggle mobile menu
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Toggle dropdown in mobile view
  if (servicesDropdown) {
    servicesDropdown.addEventListener('click', function(e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        this.classList.toggle('active');
      }
    });
  }

  // Close mobile menu on link click (except dropdown)
  document.querySelectorAll('.nav-links a:not(.services-dropdown > a)').forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 992) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });
});
