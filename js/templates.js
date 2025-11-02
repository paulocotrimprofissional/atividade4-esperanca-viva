// ===============================
// 🌿 ESPERANÇA VIVA – templates.js (versão final com imagem única em Projetos e 8 imagens na Galeria)
// ===============================

export function renderTemplate(page) {
  let content = "";

  switch (page) {

    // ===============================
    // 🏠 HOME
    // ===============================
    case "home":
      content = `
        <section class="hero">
          <h2>Transformando vidas através da solidariedade</h2>
          <p>Conheça nossos projetos sociais e descubra como fazer parte dessa transformação.</p>
          <a href="#projetos" class="btn">Ver Projetos</a>
        </section>

        <section class="sobre">
          <h3>Quem Somos</h3>
          <img src="assets/logo.png" alt="Logotipo Esperança Viva" class="sobre-img">
          <p>O <strong>Esperança Viva</strong> é uma organização sem fins lucrativos comprometida em transformar realidades e promover o desenvolvimento sustentável em comunidades em situação de vulnerabilidade.</p>
          <p>Nossa missão é semear oportunidades, fortalecer vínculos e inspirar ações solidárias que gerem impacto social duradouro.</p>
        </section>
      `;
      break;

    // ===============================
    // 💚 PROJETOS
    // ===============================
    case "projetos":
      content = `
        <section class="projetos">
          <h2>Nossos Projetos</h2>

          <div class="cards">
            <div class="card">
              <h3>Educação e Futuro</h3>
              <p>Capacitação e reforço escolar para jovens e adultos em situação de vulnerabilidade.</p>
            </div>

            <div class="card">
              <h3>Saúde e Bem-Estar</h3>
              <p>Atendimento médico, psicológico e físico gratuito para idosos e pessoas carentes.</p>
            </div>

            <div class="card">
              <h3>Alimentação Solidária</h3>
              <p>Distribuição de cestas básicas e refeições balanceadas para famílias em risco alimentar.</p>
            </div>
          </div>

          <!-- imagem única abaixo dos blocos -->
          <img src="assets/projetos.jpg" alt="Imagem ilustrativa dos projetos sociais" class="sobre-img">
        </section>
      `;
      break;

    // ===============================
    // 📋 CADASTRO
    // ===============================
    case "cadastro":
      content = `
        <section class="cadastro">
          <h2>Cadastro de Voluntário</h2>
          <p>Preencha o formulário abaixo para se juntar à nossa rede de voluntários.</p>

          <form id="formCadastro">
            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required>

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required>

            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>

            <label for="area">Área de Interesse:</label>
            <input type="text" id="area" name="area" placeholder="Ex: Educação, Saúde, Sustentabilidade" required>

            <label for="mensagem">Por que deseja ser voluntário?</label>
            <textarea id="mensagem" name="mensagem" rows="4" placeholder="Conte um pouco sobre sua motivação..." required></textarea>

            <button type="submit">Enviar Cadastro</button>
          </form>
        </section>
      `;
      break;

// ===============================
// 📸 GALERIA – Lightbox com tamanho padronizado e efeito fade-in
// ===============================
case "galeria":
  content = `
    <section class="galeria">
      <h2>Galeria de Imagens</h2>
      <div class="gallery">
        <img src="assets/acao.jpg" alt="Ação comunitária">
        <img src="assets/alimentacao.jpg" alt="Distribuição de alimentos">
        <img src="assets/alimentos.jpg" alt="Doações de alimentos">
        <img src="assets/criancas.jpg" alt="Crianças em atividades educativas">
        <img src="assets/estudando.jpg" alt="Jovens estudando">
        <img src="assets/idoso.jpg" alt="Atendimento a idosos">
        <img src="assets/limpeza.jpg" alt="Mutirão de limpeza comunitária">
        <img src="assets/plantio.jpg" alt="Ação de plantio sustentável">
      </div>
    </section>
  `;

  // ===============================
  // 💡 LIGHTBOX GLOBAL – Padronizado e centralizado
  // ===============================
  setTimeout(() => {
    // Cria o container no body (apenas uma vez)
    let lightbox = document.getElementById("lightbox");
    if (!lightbox) {
      lightbox = document.createElement("div");
      lightbox.id = "lightbox";
      document.body.appendChild(lightbox);
    }

    // Configura o estilo global do lightbox
    Object.assign(lightbox.style, {
      display: "none",
      position: "fixed",
      justifyContent: "center",
      alignItems: "center",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.85)",
      zIndex: "9999",
      overflow: "hidden"
    });

    const imagens = document.querySelectorAll(".gallery img");

    imagens.forEach((img) => {
      img.addEventListener("click", () => {
        // Cria a imagem ampliada com tamanho padronizado
        lightbox.innerHTML = `
          <img src="${img.src}" alt="${img.alt}"
               style="
                 width: auto;
                 height: 600px;
                 max-width: 90%;
                 max-height: 90%;
                 border-radius: 1px;
                 object-fit: cover;
                 box-shadow: 0 4px 25px rgba(0, 0, 0, 0.7);
                 animation: fadeIn 0.3s ease;
               ">
        `;
        lightbox.style.display = "flex";
      });
    });

    // Fecha ao clicar fora da imagem
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
        lightbox.innerHTML = "";
      }
    });

    // Fecha com tecla ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.style.display === "flex") {
        lightbox.style.display = "none";
        lightbox.innerHTML = "";
      }
    });
  }, 400);
  break;

    // ===============================
    // 💌 CONTATO
    // ===============================
    case "contato":
      content = `
        <section class="contato">
          <h2>Entre em Contato</h2>
          <p>Envie sua mensagem, dúvida ou sugestão. Retornaremos o mais breve possível.</p>

          <form id="formContato">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required>

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required>

            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="4" placeholder="Escreva sua mensagem..." required></textarea>

            <button type="submit">Enviar Mensagem</button>
          </form>
        </section>
      `;
      break;

    // ===============================
    // ❌ DEFAULT (404)
    // ===============================
    default:
      content = `
        <section class="hero">
          <h2>Página não encontrada</h2>
          <p>O conteúdo solicitado não existe. Retorne à página inicial.</p>
          <a href="#home" class="btn">Voltar ao Início</a>
        </section>
      `;
  }

  // Renderiza conteúdo no app
  document.getElementById("app").innerHTML = content;
}