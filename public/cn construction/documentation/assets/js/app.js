// Get all nav links and sections
 const navLinks = document.querySelectorAll('.nav-link');
 const sections = document.querySelectorAll('section');

 // Function to handle active link switching
 const setActiveLink = (id) => {
   navLinks.forEach(link => {
     link.classList.remove('active');
     if (link.getAttribute('href').substring(1) === id) {
       link.classList.add('active');
     }
   });
 };

 // Create an IntersectionObserver to watch when sections are in view
 const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       // Set active nav-link when section is in view
       setActiveLink(entry.target.id);
     }
   });
 }, {
  //  threshold: 0.4
 });

 // Observe each section
 sections.forEach(section => {
   observer.observe(section);
 });

 // Add smooth scroll for click events on nav links
 navLinks.forEach(link => {
   link.addEventListener('click', function(event) {
     event.preventDefault();
     const targetId = this.getAttribute('href').substring(1);
     const targetSection = document.getElementById(targetId);

     targetSection.scrollIntoView({
       behavior: 'smooth',
       block: 'start'
     });
   });
 });