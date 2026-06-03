// ===== MENÚ HAMBURGUESA =====
const hamburger = document.querySelector(".menu-toggle"); 
const menu = document.querySelector(".nav-header > ul");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// ===== SUBMENÚS EN MÓVIL =====
const menuItemsWithSubmenu = document.querySelectorAll(".nav-header > ul > li");

menuItemsWithSubmenu.forEach(item => {
    const link = item.querySelector("a");
    const submenu = item.querySelector("ul"); // tus submenús son <ul> dentro de cada li

    if (submenu) {
        let firstClick = false; // bandera para controlar clics

        link.addEventListener("click", (e) => {
            if (window.innerWidth < 1200) {
                if (!firstClick) {
                    // Primer clic: abre submenu y bloquea navegación
                    e.preventDefault();

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