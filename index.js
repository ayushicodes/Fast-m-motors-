window.addEventListener("scroll", function () {
  var header = document.querySelector("nav-links");
  header.classList.toggle("sticky", window.scrollY > 0);
});
