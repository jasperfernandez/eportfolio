document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll("li a");
  var checkbox = document.querySelector('nav input[type="checkbox"]');
  var ul = document.querySelector('nav input[type="checkbox"] ~ ul');

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      this.classList.add("active");
      checkbox.checked = false;
      ul.classList.add("fadeOut");
      setTimeout(() => {
        ul.classList.remove("fadeOut");
      }, 500);
    });
  });

  checkbox.addEventListener("change", function () {
    if (!checkbox.checked) {
      ul.classList.add("fadeOut");
      setTimeout(() => {
        ul.classList.remove("fadeOut");
      }, 500);
    }
  });
});
