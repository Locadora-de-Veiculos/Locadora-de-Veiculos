let avaliacoes = [];

// Cadastro de feedback
document.getElementById("formFeedback")?.addEventListener("submit", function(e) {
  e.preventDefault();
  
  let nome = document.getElementById("nomeFeedback").value;
  let email = document.getElementById("emailFeedback").value;
  let tel = document.getElementById("telFeedback").value;
  let texto = document.getElementById("textoFeedback").value;

  avaliacoes.push({ nome, email, tel, texto });
  atualizarAvaliacoes();
  this.reset();
});

// Atualizar lista de avaliações
function atualizarAvaliacoes() {
  let lista = document.getElementById("avaliacoes");
  if (!lista) return;
  lista.innerHTML = "";
  
  avaliacoes.forEach((a, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <strong>${a.nome}</strong> (${a.email}, ${a.tel})<br>
      <em>${a.texto}</em>
    `;
    lista.appendChild(li);
  });
}

<script>
const nome = document.getElementById('nomeCadastro').value;
const email = document.getElementById('emailCadastro').value;
const tel = document.getElementById('telCadastro').value;
const senha = document.getElementById('senhaCadastro').value;
const confirma = document.getElementById('confirmaSenhaCadastro').value;


// Validação básica
if (!email.includes('@')) {
alert('Email inválido!');
return;
}
if (tel.length < 9) {
alert('Telefone inválido!');
return;
}
if (senha.length < 4) {
alert('A senha deve ter pelo menos 4 caracteres!');
return;
}


if (senha !== confirma) {
alert('As senhas não coincidem!');
return;
}


const usuario = { nome, email, tel, senha };
localStorage.setItem('usuario', JSON.stringify(usuario));


alert('Cadastro realizado com sucesso!');
window.location.href = 'login.html';
});
}


// Login
const formLogin = document.getElementById('formLogin');
if (formLogin) {
formLogin.addEventListener('submit', (e) => {
e.preventDefault();


const email = document.getElementById('emailLogin').value;
const tel = document.getElementById('telLogin').value;
const senha = document.getElementById('senhaLogin').value;


const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));


if (!usuarioSalvo) {
alert('Nenhum usuário cadastrado!');
return;
}


if (email === usuarioSalvo.email && tel === usuarioSalvo.tel && senha === usuarioSalvo.senha) {
alert('Login realizado com sucesso!');
window.location.href = 'index.html';
} else {
alert('Dados incorretos!');
}
});
}

document.addEventListener("DOMContentLoaded", () => {

    const nome = localStorage.getItem("clienteNome");
    const email = localStorage.getItem("clienteEmail");
    const tel = localStorage.getItem("clienteTel");

    const carro = localStorage.getItem("carroNome");
    const preco = localStorage.getItem("carroPreco");
    const img = localStorage.getItem("carroImg");

    // Exibe os dados do cliente
    document.getElementById("pNome").textContent = nome || "Não informado";
    document.getElementById("pEmail").textContent = email || "Não informado";
    document.getElementById("pTel").textContent = tel || "Não informado";

    // Exibe carro
    document.getElementById("pCarroNome").textContent = carro || "Nenhum veículo alugado";
    document.getElementById("pCarroPreco").textContent = preco || "-";
    document.getElementById("pCarroImg").src = img || "../img/logo.png";
});

