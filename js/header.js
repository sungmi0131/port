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