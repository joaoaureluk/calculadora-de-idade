
const botao = document.querySelector("#botao");

botao.addEventListener("click", add);


function add() {

  const name = document.querySelector("#vname").value;

  const valor = document.querySelector("#valor");
  const ano = valor.value; 

  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  //const resultado = 2005 - 2023;
  const resultado =anoAtual - ano;


  document.querySelector("#result").innerHTML = "Você "+name + " tem "+ resultado+" Anos ou vai ter";

  console.log("O", resultado);
  





}

/*
const botao = document.querySelector("#botao");

botao.addEventListener('click', calcular);

function calcular() {


  alert("porra");
}
*/
