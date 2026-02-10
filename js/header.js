document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const overlayMenu = document.getElementById("overlayMenu");
  const closeMenu = document.getElementById("closeMenu");

  if (!menuToggle || !overlayMenu || !closeMenu) return;

  menuToggle.addEventListener("click", () => {
    overlayMenu.classList.add("open");
  });

  closeMenu.addEventListener("click", () => {
    overlayMenu.classList.remove("open");
  });
});


const navItems = document.querySelectorAll('.nav__item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});