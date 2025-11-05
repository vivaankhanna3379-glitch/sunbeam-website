// js/main.js
/**
 * Implements smooth scroll-triggered animations using the Intersection Observer API.
 * Elements with the class 'animate-on-scroll' will gain the 'animated' class 
 * when they enter the viewport, triggering CSS transitions.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements tagged for animation
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  if (!animatedElements.length) return; // Exit if no elements are found

  // Intersection Observer configuration
  const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: "0px",
    threshold: 0.1, // trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element is visible, add the 'animated' class
        entry.target.classList.add("animated");
        // Stop observing the element once it has been animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Start observing each animated element
  animatedElements.forEach(el => observer.observe(el));
});
