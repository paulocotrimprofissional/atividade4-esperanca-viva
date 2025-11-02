# 🌿 Projeto Esperança Viva

## 📘 Descrição do Projeto
O **Esperança Viva** é uma aplicação web voltada para ações sociais e comunitárias, com foco em **educação, saúde, alimentação e sustentabilidade**.  
O objetivo é promover o desenvolvimento humano e incentivar o voluntariado através de uma interface acessível e moderna, construída com **HTML5, CSS3 e JavaScript**.

---

## 🎯 Objetivos da Entrega
Esta entrega corresponde à **Entrega IV** da disciplina de Desenvolvimento Web, com foco em:
- Aplicação de **JavaScript avançado**;
- Implementação de **acessibilidade (WCAG 2.1 AA)**;
- Uso de **GitFlow e versionamento semântico**;
- **Minificação** e otimização de código para produção.

---

## ⚙️ Especificações Técnicas Obrigatórias

### 🧭 1. Controle de Versão com Git/GitHub
- Estrutura GitFlow implementada:
  - `main` → versão estável de produção  
  - `develop` → branch principal de desenvolvimento  
  - branches de features (`feature/nome-da-feature`)  
- Commits organizados com mensagens semânticas (ex: `feat:`, `fix:`, `chore:`).
- Pull Requests documentados e vinculados a **Issues e Milestones**.
- Histórico e versionamento disponíveis no repositório público.

---

### ♿ 2. Acessibilidade (WCAG 2.1 – Nível AA)
- Navegação por teclado totalmente funcional (Tab/Enter/Esc);
- Estrutura semântica (uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`);
- Contraste de texto mínimo garantido (4.5:1);
- Suporte para leitores de tela com uso de `aria-label` e `tabindex`;
- Implementado **modo alto contraste** e **modo escuro acessível** com botão interativo;
- Elementos visuais ajustados para responsividade (mobile-first).

---

### ⚡ 3. Otimização para Produção
- Criada pasta `/dist` contendo versões minificadas:
  - `/dist/css/styles.min.css`
  - `/dist/js/main.min.js`
  - `/dist/index.min.html`
- Minificação manual de HTML, CSS e JavaScript.
- Imagens otimizadas e comprimidas na pasta `/assets`.
- Redução de tamanho e melhoria no carregamento da aplicação.

---

## 🧩 Tecnologias Utilizadas
- **HTML5** – Estrutura semântica e acessível  
- **CSS3** – Layout responsivo, Design System e animações leves  
- **JavaScript (ES6+)** – Interações dinâmicas e controle de contraste  
- **Git / GitHub** – Versionamento e colaboração  
- **VS Code** – IDE de desenvolvimento  
- **WCAG 2.1** – Diretrizes de acessibilidade web  

---

## 🧱 Estrutura de Pastas
esperanca-viva/
├── assets/ # imagens e ícones otimizados
├── css/ # estilos originais
├── js/ # scripts originais
├── dist/ # versão de produção (minificada)
│ ├── css/
│ │ └── styles.min.css
│ ├── js/
│ │ └── main.min.js
│ └── index.min.html
├── index.html
├── cadastro.html
├── projetos.html
├── galeria.html
├── contato.html
└── README.md

---

## 🧠 Funcionalidades Principais
- Sistema de **modo escuro / alto contraste** com persistência (`localStorage`);
- Navegação **SPA simulada** com JavaScript;
- **Menu hambúrguer interativo** para mobile;
- **Validação de formulários** com mensagens visuais;
- **Lightbox** para exibição de imagens da galeria;
- **Toast messages** para feedback de ações.

---

## 🚀 Deploy e Acesso
🌐 **Site publicado:**  
👉 [https://paulorj33.github.io/atividade4-esperanca-viva/](https://paulorj33.github.io/atividade4-esperanca-viva/)

🔗 **Repositório no GitHub:**  
👉 [https://github.com/paulorj33/atividade4-esperanca-viva](https://github.com/paulorj33/atividade4-esperanca-viva)

---

## 🧩 Acessibilidade Testada
| Critério | Implementação |
|-----------|----------------|
| Navegação por teclado | ✅ |
| Leitores de tela (`aria-label`) | ✅ |
| Contraste adequado | ✅ |
| Modo escuro / alto contraste | ✅ |
| Responsividade mobile | ✅ |

---

## 🧾 Versionamento Semântico
Versão atual: **v1.0.0**  
- **feat:** funcionalidades novas (modo contraste, SPA, validações)  
- **fix:** correções de estilo e layout  
- **chore:** ajustes gerais, README e build final  

---

## 👨‍💻 Autor
Desenvolvido por **Paulo César de Azevedo Silva Cotrim**  
📚 Curso: Análise e Desenvolvimento de Sistemas – Cruzeiro do Sul 
📅 Entrega IV – Nov/2025
📫 [LinkedIn](https://www.linkedin.com/in/paulocotrimprofissional) • [GitHub](https://github.com/paulorj33)

---

> “A solidariedade é a esperança viva de um mundo melhor.” 🌻
