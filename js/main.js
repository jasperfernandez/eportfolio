document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.querySelector('nav input[type="checkbox"]');
  var ul = document.querySelector('nav input[type="checkbox"] ~ ul');

  checkbox.addEventListener("change", function () {
    if (!checkbox.checked) {
      ul.classList.add("fadeOut");
      setTimeout(() => {
        ul.classList.remove("fadeOut");
      }, 500);
    }
  });
});
