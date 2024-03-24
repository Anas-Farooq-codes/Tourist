const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", () =>{
    preloader.classList.add("remove");
})
// add event on multiple elements
const addEventOnElements = function (elements, eventType, callback){
    for (let i=0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback)
    }
}
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const toggleNav = function (){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}
addEventOnElements(navTogglers, "click", toggleNav);


const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function ()
{
    header.classList[window.scrollY > 100 ? "add" : "remove" ]("active");
})
document.addEventListener('DOMContentLoaded', function() {
    // Function to remove active class from all navbar links
    function removeActiveClass() {
        var navbarLinks = document.querySelectorAll('.navbar-link');
        navbarLinks.forEach(function(link) {
            link.classList.remove('active');
        });
    }

    // Function to add active class to the corresponding navbar link
    function setActiveClass(page) {
        var activeLink = document.querySelector('.navbar-link[href="' + page + '"]');
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Get the current URL path
    var path = window.location.pathname;

    // Get the last part of the path (filename)
    var page = path.split("/").pop();

    // Initial setup on page load
    setActiveClass(page);

    // Add event listeners for hover and click
    var navbarLinks = document.querySelectorAll('.navbar-link');
    navbarLinks.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            // Remove active class on hover
            removeActiveClass();
        });

        link.addEventListener('click', function() {
            // Remove active class from all links
            removeActiveClass();

            // Add active class to the clicked link
            setActiveClass(link.getAttribute('href').split("/").pop());
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("backToTopBtn");
  
    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });
  
    btn.addEventListener("click", function () {
      scrollToTop();
    });
  
    function scrollToTop() {
      // Smooth scroll to the top
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  });
  document.querySelector('a[href="#contact-section"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the link
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('loadMoreBtn').addEventListener('click', function() {
  // Select the remaining hidden cards (assuming they are initially hidden with CSS)
  var hiddenCards = document.querySelectorAll('.destination-list li:nth-child(n+7):nth-child(-n+12)');
  // Loop through the hidden cards and show them
  hiddenCards.forEach(function(card) {
    card.style.display = 'block';
  });
  // Remove the button after showing the remaining cards
  document.getElementById('loadMoreBtn').remove();
});
