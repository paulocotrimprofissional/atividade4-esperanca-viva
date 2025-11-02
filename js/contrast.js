// ===============================
// ♿ ESPERANÇA VIVA – contraste.js (versão FINAL 100% funcional)
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  // Verifica se já existe a barra de acessibilidade (mobile)
  if (!document.querySelector(".acessibilidade-topo")) {
    const barra = document.createElement("div");
    barra.className = "acessibilidade-topo";
    barra.innerHTML = `
      <button
        id="toggle-contrast-mobile"
        class="acessibilidade-botao"
        aria-pressed="false"
        aria-label="Ativar modo alto contraste"
      >🌙</button>
    `;
    document.body.insertBefore(barra, document.body.firstChild);
  }

  // Aguarda um pequeno delay para garantir que todos os botões existam
  setTimeout(() => {
    // Pega todos os botões possíveis
    const contrastButtons = [
      document.getElementById("toggle-contrast"),
      document.getElementById("toggle-contrast-mobile"),
    ].filter(Boolean); // remove os nulos

    if (contrastButtons.length === 0) {
      console.warn("⚠️ Nenhum botão de contraste encontrado.");
      return;
    }

    // Recupera o estado salvo no localStorage
    let isHighContrast = localStorage.getItem("modoContraste") === "ativo";

    // Aplica o estado inicial
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

    // Função para alternar o modo
    function toggleContrast() {
      isHighContrast = !isHighContrast;
      document.body.classList.toggle("high-contrast", isHighContrast);
      localStorage.setItem("modoContraste", isHighContrast ? "ativo" : "inativo");

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
    }

    // Adiciona o evento de clique em todos os botões
    contrastButtons.forEach((btn) => {
      btn.addEventListener("click", toggleContrast);
    });
  }, 100); // 100ms dá tempo do botão injetado aparecer
});
