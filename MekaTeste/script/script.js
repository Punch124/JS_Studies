const nome = document.getElementById("nome");
const prioridade = document.getElementById("prioridade");
const data = document.getElementById("data");
const checkbox = document.getElementById("check");
const tabela = document.getElementById("tabela");

function adicionar() {
  let pai = document.createElement("tr");
  let name = document.createElement("td");
  let priori = document.createElement("td");
  let time = document.createElement("td");
  let checkbox1 = document.createElement("td");
  let checkbox2 = document.createElement("input");
  checkbox2.type = "checkbox";
  name.textContent = nome.value;
  priori.textContent = prioridade.value;
  time.textContent = data.value;
  checkbox1.appendChild(checkbox2);
  pai.appendChild(name);
  pai.appendChild(priori);
  pai.appendChild(time);
  pai.appendChild(checkbox1);
  tabela.appendChild(pai);
  console.log(pai);
}
