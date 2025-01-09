document.addEventListener("DOMContentLoaded", () => {
  // Registro de usuário
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const user = document.getElementById("user").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
      }

      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      const usuarioExistente = usuarios.find((u) => u.email === email);

      if (usuarioExistente) {
        alert("Usuário já cadastrado!");
      } else {
        usuarios.push({ user, email, password });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("Registro realizado com sucesso!");
        registerForm.reset();
        window.location.href = "login.html"; // Redireciona para a página de login
      }
    });
  }

  // Login de usuário
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.email === email && usuario.password === password
      );

      if (usuarioEncontrado) {
        alert(`Bem-vindo, ${usuarioEncontrado.user}!`);
        // Redirecionar para uma página inicial
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

          window.location.href = "home.html";

         
      } else {
        alert("E-mail ou senha incorretos!");
      };

    });

   
  }
 
    });

   
  

