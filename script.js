const input = document.getElementById("inputNomeTarefa");
const botaoAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");

// Adicionar nova tarefa
botaoAdicionar.addEventListener("click", function () {
  const texto = input.value.trim();
  if (texto !== "") {
    adicionarTarefa(texto);
    input.value = "";
    input.focus();
  }
});

// Adiciona item na lista
function adicionarTarefa(texto) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "TextoTarefa";
  span.textContent = texto;

  const divBotoes = document.createElement("div");
  divBotoes.className = "botoesAcoes";

  // Botão Editar
  const botaoEditar = document.createElement("button");
  botaoEditar.title = "Editar";
  botaoEditar.innerHTML = '<i class="fas fa-pen"></i>';
  botaoEditar.onclick = () => editarTarefa(span);

  // Botão Excluir
  const botaoExcluir = document.createElement("button");
  botaoExcluir.title = "Excluir";
  botaoExcluir.innerHTML = '<i class="fas fa-trash"></i>';
  botaoExcluir.onclick = () => li.remove();

  divBotoes.appendChild(botaoEditar);
  divBotoes.appendChild(botaoExcluir);

  li.appendChild(span);
  li.appendChild(divBotoes);

  lista.appendChild(li);
}

// Editar tarefa
function editarTarefa(span) {
  const novoTexto = prompt("Editar tarefa:", span.textContent);
  if (novoTexto !== null && novoTexto.trim() !== "") {
    span.textContent = novoTexto.trim();
  }
}
