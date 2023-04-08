//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hambuger menu diklik
document.querySelector("#hambuger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hambuger = document.querySelector("#hambuger-menu");
document.addEventListener("click", function (e) {
  if (!hambuger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
