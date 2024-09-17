// Select the menu icon and nav-links
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-link'); // Changed 'nav-link' to 'nav-links'
const navItems = document.getElementsByClassName('nav-item'); // Collection of nav-items

// Toggle the active class on menu icon click
menuIcon.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});

// Add 'active' class to each nav-item when clicked
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function() {
    // Remove 'active' class from all nav-items first
    for (let j = 0; j < navItems.length; j++) {
      navItems[j].classList.remove('active');
    }
    // Add 'active' class to the clicked nav-item
    navItems[i].classList.add('active');
  });
}

// Add an event listener to hide the nav-links when scrolling
window.addEventListener('scroll', function() {
  // Check if nav-links are active
  if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
});
