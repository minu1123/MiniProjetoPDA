if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./assets/html/signin.html";
} else {
  // Abre uma nova aba
  const crudAba = window.open("", "_blank");

  // Cria um elemento iframe
  const iframe = document.createElement('iframe');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.src = './assets/html/crud.html';

  // Adiciona o iframe ao conteúdo da nova aba
  crudAba.document.body.appendChild(iframe);

  // Se desejar, você pode focar na nova aba
  crudAba.focus();
}

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./assets/html/signin.html";
}
