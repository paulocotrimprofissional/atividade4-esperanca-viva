// ===============================
// 🌿 ESPERANÇA VIVA – formValidation.js (versão final com toast animado e compatível com SPA)
// ===============================

// 🔹 Funções auxiliares de validação
function validarNome(nome) {
  if (!nome || nome.trim().length < 3) {
    return "Por favor, insira um nome válido (mínimo 3 letras).";
  }
  return "";
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return "E-mail inválido. Exemplo: seuemail@exemplo.com";
  }
  return "";
}

function validarTelefone(telefone) {
  if (!telefone || telefone.trim().length < 8) {
    return "Telefone inválido. Inclua o DDD se possível.";
  }
  return "";
}

// 🔹 Exibe mensagens abaixo de cada campo
function mostrarErro(input, mensagem) {
  let erro = input.parentElement.querySelector(".erro");
  if (!erro) {
    erro = document.createElement("small");
    erro.classList.add("erro");
    input.parentElement.appendChild(erro);
  }
  erro.textContent = mensagem;
  input.style.border = mensagem ? "2px solid #e53935" : "2px solid #4caf50";
}

// 🔹 Cria mensagens flutuantes (toast)
function exibirToast(mensagem, tipo = "sucesso") {
  // Remove qualquer toast anterior
  const toastAntigo = document.querySelector(".toast");
  if (toastAntigo) toastAntigo.remove();

  const toast = document.createElement("div");
  toast.className = `toast toast-${tipo}`;
  toast.textContent = mensagem;
  document.body.appendChild(toast);

  // ✅ Garante animação mesmo dentro de SPA (DOM dinâmico)
  requestAnimationFrame(() => {
    toast.classList.add("ativo");
  });

  // Remove após 5 segundos
  setTimeout(() => {
    toast.classList.remove("ativo");
    setTimeout(() => toast.remove(), 500);
  }, 5000);
}

// 🔹 Inicializa a validação no formulário
export function initFormValidation() {
  const form = document.getElementById("formVoluntario");
  if (!form) return;

  const inputs = form.querySelectorAll("input");
  const mensagemRetorno = document.getElementById("mensagemRetorno");

  form.setAttribute("novalidate", "true");

  // Validação ao digitar
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const { name, value } = input;
      let msg = "";

      if (name === "nome") msg = validarNome(value);
      else if (name === "email") msg = validarEmail(value);
      else if (name === "telefone") msg = validarTelefone(value);

      mostrarErro(input, msg);
    });
  });

  // Envio do formulário
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let formValido = true;

    inputs.forEach((input) => {
      const { name, value } = input;
      let msg = "";

      if (name === "nome") msg = validarNome(value);
      else if (name === "email") msg = validarEmail(value);
      else if (name === "telefone") msg = validarTelefone(value);

      mostrarErro(input, msg);
      if (msg !== "") formValido = false;
    });

    if (!mensagemRetorno) return;

    if (!formValido) {
      mensagemRetorno.className = "alerta alerta-erro";
      mensagemRetorno.textContent =
        "❌ Corrija os campos destacados antes de enviar.";
      exibirToast("Verifique os campos obrigatórios antes de enviar ❌", "erro");
      return;
    }

    // Sucesso 🎉
    mensagemRetorno.className = "alerta alerta-sucesso";
    mensagemRetorno.textContent =
      "✅ Cadastro enviado com sucesso! Obrigado por fazer parte da Esperança Viva 💚";

    // 💾 Simula armazenamento local
    const dados = {
      nome: form.nome.value,
      email: form.email.value,
      telefone: form.telefone.value,
      dataEnvio: new Date().toLocaleString("pt-BR"),
    };
    localStorage.setItem("ultimoVoluntario", JSON.stringify(dados));

    // Limpa o formulário
    form.reset();
    inputs.forEach((input) => {
      input.style.border = "1px solid var(--cor-neutra-2)";
      const erro = input.parentElement.querySelector(".erro");
      if (erro) erro.textContent = "";
    });

    // ✅ Exibe mensagem de sucesso (toast)
    exibirToast("Cadastro enviado com sucesso! 💚", "sucesso");
  });
}