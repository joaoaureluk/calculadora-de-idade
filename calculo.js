


const botao = document.querySelector("#botao");

botao.addEventListener("click", add);

document.addEventListener("keypress", function(e){

  if(e.key === "Enter"){

 botao.click()    
  }
} )





function add() {

  const name = document.querySelector("#vname").value;

  const valor = document.querySelector("#valor");
  const ano = valor.value; 



if (isNaN(ano) ) {
  
  var text = "Só numero o seu cabaço";
  document.getElementById("aviso").innerHTML = text;
  return

} 
else if (ano < 1){

  var text = "skskks acho que eu nao ia pensar nisso né? kskks tenta outra"
document.getElementById("aviso").innerHTML = text;
return
}
else if (ano <=1800){
 text = "se nao nasceu nessa epoca amigão"
 document.getElementById("aviso").innerHTML = text;
 return
}
else if (ano <=1900 ){
  text = "meio veio mas tabom né"
  document.getElementById("aviso").innerHTML = text;
} 
else if (ano > 1900){
  text = "tudo certo meu nobre";
  document.getElementById("aviso").innerHTML = text;
  
} 

  
  



 
  

  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  //const resultado = 2005 - 2023;
  const resultado =anoAtual - ano;


  document.querySelector("#result").innerHTML = `Você ${name}  tem  ${resultado} Anos ou vai ter`;

  console.log("O", resultado);
  





}

/*
const botao = document.querySelector("#botao");

botao.addEventListener('click', calcular);

function calcular() {


  alert("porra");
}
*/
