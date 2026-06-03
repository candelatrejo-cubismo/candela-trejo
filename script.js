// ===== MENÚ HAMBURGUESA =====
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".menu-toggle"); 
  const menu = document.querySelector(".nav-header > ul");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  // ===== SUBMENÚS EN MÓVIL =====
  const menuItemsWithSubmenu = document.querySelectorAll(".nav-header > ul > li");

  menuItemsWithSubmenu.forEach(item => {
    const link = item.querySelector("a");
    const submenu = item.querySelector("ul");

    if (submenu && link) {
      let firstClick = false;

      link.addEventListener("click", (e) => {
        if (window.innerWidth < 1200) {
          if (!firstClick) {
            // Primer clic: abre submenu y bloquea navegación
            e.preventDefault();

            // Cierra otros submenús abiertos
            document.querySelectorAll(".nav-header ul ul.active").forEach(sub => {
              if (sub !== submenu) {
                sub.classList.remove("active");
              }
            });

            submenu.classList.toggle("active");
            firstClick = true;
          } else {
            // Segundo clic: permite la navegación
            firstClick = false;
          }
        }
      });
    }
  });
});