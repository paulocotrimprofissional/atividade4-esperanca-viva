// ===============================
// 🌿 ESPERANÇA VIVA – main.js (versão segura e compatível com contraste mobile)
// ===============================

document.addEventListener("DOMContentLoaded", async () => {
  console.log("🌿 Esperança Viva – Aplicação iniciada");

  // 🔹 Tenta importar módulos apenas se existirem (SPA + Validação)
  try {
    const { setupNavigation } = await import("./router.js");
    const { initFormValidation } = await import("./formValidation.js");

    if (typeof setupNavigation === "function") setupNavigation();

    // Garante que a validação funcione na primeira carga
    if (window.location.hash === "#cadastro") {
      setTimeout(() => initFormValidation(), 400);
    }

    // Reativa a validação sempre que o hash mudar (SPA)
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "cadastro") {
        setTimeout(() => initFormValidation(), 400);
      }
    });
  } catch (error) {
    console.warn("⚠️ SPA e validação não aplicadas nesta página (modo estático).");
  }

  // ===============================
  // 🔹 Controle do menu hambúrguer
  // ===============================
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("ativo");
      menu.classList.toggle("ativo");
    });

    // Fecha o menu ao clicar em qualquer link
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("ativo");
        toggle.classList.remove("ativo");
      });
    });
  }

  // ===============================
  // ♿ Suporte ao botão de alto contraste (desktop + mobile)
  // ===============================
  const contrastButtons = [
    document.getElementById("toggle-contrast"),
    document.getElementById("toggle-contrast-mobile")
  ].filter(Boolean); // só os que existem na página

  if (contrastButtons.length > 0) {
    let isHighContrast = localStorage.getItem("modoContraste") === "ativo";

    // Aplica estado inicial
    document.body.classList.toggle("high-contrast", isHighContrast);
    contrastButtons.forEach((btn) => {
      btn.textContent = isHighContrast ? "☀️" : "🌙";
      btn.setAttribute("aria-pressed", isHighContrast);
      btn.setAttribute(
        "aria-label",
        isHighContrast
          ? "Desativar modo alto contraste"
          : "Ativar modo alto contraste"
      );
    });

    // Alterna modo de contraste
    contrastButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        isHighContrast = !isHighContrast;
        document.body.classList.toggle("high-contrast", isHighContrast);
        localStorage.setItem("modoContraste", isHighContrast ? "ativo" : "inativo");

        contrastButtons.forEach((b) => {
          b.textContent = isHighContrast ? "☀️" : "🌙";
          b.setAttribute("aria-pressed", isHighContrast);
          b.setAttribute(
            "aria-label",
            isHighContrast
              ? "Desativar modo alto contraste"
              : "Ativar modo alto contraste"
          );
        });
      });
    });
  }
});
