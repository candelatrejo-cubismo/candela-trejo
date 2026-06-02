// ===== MENÚ HAMBURGUESA =====
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// ===== SUBMENÚS EN MÓVIL =====
const menuItemsWithSubmenu = document.querySelectorAll(".menu > li");

menuItemsWithSubmenu.forEach(item => {
    const link = item.querySelector("a");
    const submenu = item.querySelector(".submenu");

    if (submenu) {
        let firstClick = false; // bandera para controlar clics

        link.addEventListener("click", (e) => {
            if (window.innerWidth < 1200) {
                if (!firstClick) {
                    // Primer clic: abre submenu y bloquea navegación
                    e.preventDefault();

                    document.querySelectorAll(".submenu.active").forEach(sub => {
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