// document.addEventListener("DOMContentLoaded", function () {
//   const toggleBtn = document.querySelector(".toggle-btn");
//   const nav = document.querySelector("nav");
//   toggleBtn.addEventListener("click", function () {
//     if (window.innerWidth <= 600) {
//       nav.classList.toggle("active");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const nav = document.querySelector("nav");

  toggleBtn.addEventListener("click", function () {
    if (window.innerWidth <= 600) {
      nav.classList.toggle("active");
      // Optionally, toggleBtn can stay visible for repeated toggling
    }
  });
});
