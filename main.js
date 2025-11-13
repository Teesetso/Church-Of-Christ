// Smooth scroll when clicking "Visit Our Church"
document.getElementById("visitBtn").addEventListener("click", () => {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

// Show button after scrolling 300px
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll to top when clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/Hide Map when clicking "Find Us"
document.getElementById('showMapBtn').addEventListener('click', function() {
  const mapContainer = document.getElementById('mapContainer');
  mapContainer.classList.toggle('show');
  if (mapContainer.classList.contains('show')) {
    mapContainer.scrollIntoView({ behavior: "smooth" });
  }
});
