let imoveis = [];
let escolha
do {
 escolha = parseFloat(
    prompt(
      "Bem vindo, a quantidade de imoveis cadastrados é " +
        imoveis.length +
        "\nescolha sua ação a seguir: \n1-Salvar imóvel \n2-Mostrar todos os imóveis salvos \n 3-Sair"
    )
  );

  switch (escolha) {
    case 1:
      let imovel = {
        proprietario: prompt("Nome do proprietario: "),
        quartos: prompt("Quantidade de quartos: "),
        banheiros: prompt("Quantidade de banheiros"),
        Garagem: prompt("possui garagem?"),
      };
      imoveis.push(imovel);

      break;

    case 2:
        for (let i = 0; i < imoveis.length; i++){
            alert(
            "imovel " + (i+1) +
            "\nProprietario: " + imoveis[i].proprietario +
            "\nQuartos: " + imoveis[i].quartos +
            "\nBanheiros: " + imoveis[i].banheiros +
            "\nGaragem: " +imoveis[i].Garagem)
        }
      break;

    case 3:
        alert("saindo...")
        break;
    default:
        alert("numero inválido")
  }
} while (escolha !== 3)
