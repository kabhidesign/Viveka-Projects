// Navbar scroll effect
document.addEventListener('scroll', () => {
  const header = document.querySelector('nav');
  if (window.scrollY > 400) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});


// Navbar//
// Navbar functionality
const toggler = document.getElementById('navbar-toggler');
const closeBtn = document.querySelector('.close-btn');
const navbarWrapper = document.getElementById('navbar-wrapper');

// Create overlay element
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Function to toggle overlay and navbar
function toggleNavbar() {
  navbarWrapper.classList.toggle('open');
  overlay.style.display = navbarWrapper.classList.contains('open') ? 'block' : 'none';
}

// Open navbar and show overlay
toggler.addEventListener('click', toggleNavbar);

// Close navbar when close button is clicked
closeBtn.addEventListener('click', toggleNavbar);

// Close navbar and overlay if clicking outside the navbar wrapper
document.addEventListener('click', function(event) {
  if (!navbarWrapper.contains(event.target) && !toggler.contains(event.target)) {
      navbarWrapper.classList.remove('open');
      overlay.style.display = 'none';
  }
});

// Close navbar and overlay if clicking on the overlay itself
overlay.addEventListener('click', function() {
  navbarWrapper.classList.remove('open');
  overlay.style.display = 'none';
});

