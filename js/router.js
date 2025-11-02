// ===============================
// 🌿 ESPERANÇA VIVA – router.js (SPA + menu + dropdown)
// ===============================

import { renderTemplate } from "./templates.js";

export function setupNavigation() {
  const menuLinks = document.querySelectorAll("nav a");
  const navMenu = document.getElementById("menu");
  const menuToggle = document.getElementById("menu-toggle");

  // -------------------------------
  // Navegação SPA (links #home, #projetos etc.)
  // -------------------------------
  function navigateTo(hash) {
    const page = hash.replace("#", "") || "home";
    renderTemplate(page);

    // atualiza o destaque visual no menu
    menuLinks.forEach(link => {
      if (link.getAttribute("href") === `#${page}`) {
        link.classList.add("ativo");
      } else {
        link.classList.remove("ativo");
      }
    });

    // fecha menu mobile se estiver aberto
    if (navMenu && navMenu.classList.contains("ativo")) {
      navMenu.classList.remove("ativo");
    }
    if (menuToggle && menuToggle.classList.contains("ativo")) {
      menuToggle.classList.remove("ativo");
    }
  }

  // intercepta clique nos links do header
  menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href") || "";
      // só trata se for hash (#home, #galeria, etc.)
      if (href.startsWith("#")) {
        e.preventDefault();
        const page = href.replace("#", "");
        window.location.hash = `#${page}`;
      }
    });
  });

  // rota muda -> renderiza página
  window.addEventListener("hashchange", () => {
    navigateTo(window.location.hash);
  });

  // render inicial
  navigateTo(window.location.hash);

  // -------------------------------
  // Menu hambúrguer (mobile)
  // -------------------------------
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("ativo");
      menuToggle.classList.toggle("ativo");
    });
  }

  // -------------------------------
  // Dropdown "Projetos" (submenu)
  // Funciona tanto em desktop (hover) quanto em mobile (toque)
  // -------------------------------
  const dropdown = document.querySelector(".dropdown");
  if (dropdown) {
    const dropdownLink = dropdown.querySelector("a");     // o <a href="#projetos">
    const submenu = dropdown.querySelector(".submenu");   // o <ul class="submenu">

    if (submenu && dropdownLink) {
      // garante que começa fechado
      submenu.style.display = "none";

      // --- Desktop: abre no hover ---
      dropdown.addEventListener("mouseenter", () => {
        // só faz hover se for tela larga
        if (window.innerWidth > 800) {
          submenu.style.display = "block";
        }
      });

      dropdown.addEventListener("mouseleave", () => {
        if (window.innerWidth > 800) {
          submenu.style.display = "none";
        }
      });

      // --- Mobile / toque: abre no primeiro clique ---
      let submenuAbertoMobile = false;

      dropdownLink.addEventListener("click", (e) => {
        // Se estiver em modo mobile (≤800px), tratamos diferente
        if (window.innerWidth <= 800) {
          // Se ainda não estava aberto, abre o submenu e NÃO navega
          if (!submenuAbertoMobile) {
            e.preventDefault();
            submenu.style.display = "block";
            submenuAbertoMobile = true;
          } else {
            // Se já estava aberto e a pessoa clica de novo, agora sim navega para #projetos
            submenuAbertoMobile = false;
            // deixa seguir o fluxo normal: hash muda e navigateTo() roda
          }
        }
      });

      // No mobile, se clicar fora do menu depois que abriu, fecha
      document.addEventListener("click", (e) => {
        if (window.innerWidth <= 800) {
          // se clicou em algo que NÃO é o dropdown
          if (!dropdown.contains(e.target)) {
            submenu.style.display = "none";
            submenuAbertoMobile = false;
          }
        }
      });
    }
  }

  console.log("✅ Navegação SPA e dropdown inicializados");
}