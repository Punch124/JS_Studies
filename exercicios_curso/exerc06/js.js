let escolha 
do {
escolha = parseFloat(
  prompt(
    "Escolha uma opção de calculo: \n1-area do triangulo(b * altura /2) \n 2- área do retângulo(b*altura) \n3-área do quadrado \n4-área do trapézio \n5-área do círculo \n6-sair"
  )
);

function areaTri(base, altura) {
  let resultado = (base * altura) / 2;
  return resultado;
}

function areaRet(base, altura) {
    let resultado = base * altura
    return resultado;
}

function areaQua(lado) {
    let resultado = lado **2
    return resultado
}
function areaTra(bMaior, bMenor, altura) {
    let resultado = (bMaior + bMenor) * altura /2;
    return resultado;
}
function areaCir(raio){
    let resultado = 3.14 * (raio **2)
    return resultado
}

if (escolha == 1) {
  let base = parseFloat(prompt("digite a base: "));
  let altura = parseFloat(prompt("digite a altura: "));
  alert(areaTri(base, altura));
} else if (escolha == 2) {
    let base = parseFloat(prompt("digite a base: "));
    let altura = parseFloat(prompt("digite a altura: "));
    alert(areaRet(base,altura))
} else if (escolha == 3) {
    let lado = parseFloat(prompt("escolha o valor do lado do quadrado: "))
    alert(areaQua(lado))
} else if (escolha == 4) {
    let altura = parseFloat(prompt("digite a altura: "));
    let bMaior = parseFloat(prompt("Digite o valor da base maior"))
    let bMenor = parseFloat(prompt("digite o valor da base menor"))
    alert(areaTra(bMaior,bMenor,altura))
} else if (escolha == 5) {
    let raio = parseFloat(prompt("digite o valor do raio"))
    alert(areaCir(raio))
} else{
    alert("escolha invalida")
}
} while (escolha != 6)


