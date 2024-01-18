/*
Adicionando log no console

Aprendendo sobre:
Valores booleanos: true e false
Arrays

*/

// Variavels
var test = 'false';
var isEnabled = true;
var names = ["Maria", "João", "Pedro"];

// Adicionando logs ao console e verificações

if (isEnabled) {
  console.log("Eu estou habilitado");
}
else {
  console.log("Eu estou desabilitado");
}

// Printando a variavel names
console.log(names[0]);

// Adicionando valor a variavel names
// Push: Adiciona um valor a array

names.push("Jorge");
console.log(names[3]);

// Criando a variavel times
var teams = new Array();
// Adicionando valor a variavel times
teams.push("Alemanha");

// Criando funções
function testName(name) {
  if (name.length > 10) {
    console.log("O nome " + name + " tem " + returnSize(name) + " caracteres");
  }
  else {
    console.log("O nome " + name + " tem " + returnSize(name) + " caracteres, Então não e maior que 10!");
  }
}
function returnSize(name) {
  return name.length;
}
function isEqual(name){
  // Comparando valores
  // For igual a Jorge
  if (name == "Jorge") {
    console.log("O nome e igual a Jorge");
  }
  // For igual a Maria!
  else if(name === "Maria") {
    console.log("O nome e diferente de Maria");
  }
  // Caso não for ira parar aqui.
  else {
    console.log("O nome não e igual a nada");
  }
  
}

// Chamando a função
testName("Jorge");
testName("Miguel Junior Araujo");
isEqual("Samuel");

// Printando o tamanho da variavel teams e names
console.log("Tamanho do array times: " + teams.length);
console.log("Tamanho do array names: " + names.length);

// Printando um valor apenas para teste

console.log("Eu sou o script.js");
