document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const servicesDropdown = document.querySelector('.services-dropdown');

  // Toggle mobile menu
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Handle dropdown toggle
  if (servicesDropdown) {
    const dropdownToggle = servicesDropdown.querySelector('a');
    const dropdownList = servicesDropdown.querySelector('.dropdown-list');
    
    dropdownToggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        servicesDropdown.classList.toggle('active');
        dropdownList.classList.toggle('show');
      }
    });
  }

  // Close menu on all link clicks
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      // Close mobile menu
      if (window.innerWidth <= 992) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        servicesDropdown.classList.remove('active');
      }
      
      // Close dropdowns
      if (servicesDropdown) {
        servicesDropdown.classList.remove('active');
        servicesDropdown.querySelector('.dropdown-list').classList.remove('show');
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    const isClickInside = navLinks.contains(e.target) || menuToggle.contains(e.target);
    
    if (!isClickInside && window.innerWidth <= 992) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      servicesDropdown.classList.remove('active');
    }
  });
});