///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!

function Calculadora(num1, num2, operador){
  let resultado = ""
  let num1r = parseInt(num1);
  let num2r = parseInt(num2);

  switch(operador){
    case "+":
      resultado = num1r + num2r
      break;
    case "-":
      resultado = num1r - num2r
      break;
    case "*":
      resultado = num1r * num2r
      break;
    case "/":
      resultado = num1r / num2r
      break;
    case "e":
      for( i = 0; i <= num2r - 1; i++){
        resultado = num1r * num1r * num1r
      }
      break;
  }
  if (resultado === undefined || resultado >= 1000000){
    resultado = "ERRO";
  }

  console.log(resultado)
  return resultado;

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}