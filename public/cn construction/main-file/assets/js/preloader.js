window.onload = function () {
  var preloader = document.getElementById("preloader");

  // Ensure preloader is visible initially
  preloader.style.opacity = "1";
  preloader.style.visibility = "visible";

  // Hide the preloader after a delay (e.g., 4 seconds) with animation
  setTimeout(function () {
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

     // Allow time for transition to complete
  }, 3000); 
};
