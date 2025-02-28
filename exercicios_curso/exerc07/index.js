function confirmar() {
  const posicao = document.getElementById("posicao").value;
  const nome = document.getElementById("nome").value;
  const numero = document.getElementById("numero").value;

  const confirmation = confirm(
    "confirma que o jogador " +
      nome +
      " será escalado como " +
      posicao +
      " com o número " +
      numero +
      " ?"
  );
  
  if (confirmation) {
    const lista = document.getElementById("listaJogadores");
    const jogador = document.createElement("li");
    jogador.id = `jogador-${numero}`
    jogador.innerText = `${nome} - ${posicao} - ${numero}`;
    lista.appendChild(jogador);
    
    document.getElementById('posicao').value = ''
    document.getElementById('nome').value = ''
    document.getElementById('numero').value = ''
}

}

function remover() {
    const jogador_tirar = document.getElementById("tirar")
    const jogador = document.getElementById(`jogador-${jogador_tirar.value}`)
    if (jogador) {
      jogador.remove();
    } else {
      alert('jogador não encontrado.')
    }
    jogador_tirar.value = "";

}