let pacientes = ["Matias", "Jonas"];
alert("Bem vindo à fila de espera de atendimento \n" + pacientes);
do {
  let escolha = parseFloat(
    prompt(
      "Pacientes: \n" +
        pacientes +
        "\nescolha a opção que desejar. \n 1-Novo paciente \n 2-Consultar paciente \n 3-Sair"
    )
  );

  switch (escolha) {
    case 1:
      let pacienteNew = prompt("digite o nome do paciente: ");
      let pacienteNovo = pacientes.push(pacienteNew);
      alert(pacientes);
      break;
    case 2:
      let PacienteNick = prompt("digite o nome do paciente existente:");
      let PacienteNome = pacientes.shift(PacienteNick);
      alert(PacienteNome);
      break;
    case 3:
      alert("saindo...");
      break;
  }
} while (escolha !== 3);
