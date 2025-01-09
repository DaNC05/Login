document.addEventListener("DOMContentLoaded", () => {

  // Pega o nome do usuário

  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  
  // Mensagem de boas-vindas caso o usuário esteja exista.

  if (usuarioLogado) {
    const boasVindas = document.getElementById("boasVindas");
    boasVindas.textContent = `Seja Bem-Vindo, ${usuarioLogado.user}!`
  } else {
    alert("Você não está logado!");
    window.location.href = "login.html";
  }

// Logout 

  const logoutButton = document.getElementById("logout");
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
  });
});
