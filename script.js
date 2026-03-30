// AOS animation init
AOS.init();

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// // form
// document.getElementById("form").addEventListener("submit", function(e){
//   e.preventDefault();
//   alert("Message sent!");
// });