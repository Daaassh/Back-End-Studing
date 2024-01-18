/*
Criando um array e imprimindo o valor
*/

// Criando as funções
function print(text){
  console.log(text)
}
// Criando um array
const names = ["Terra", "Jupiter", "Saturn", "Uranus", "Neptune"];

// Criando um objeto
const personObject = {
  name: "Joao",
  age: 30,
  country: "Brasil",
  profession: "Programador",
  movies: [
    "Interrestelar",
    "Vingadores"
  ]
}
const personMaria = {
  ...personObject,
  name: "Maria",
  age: 25
}
// Printando os valores.
print(personObject)
print(personMaria)
print(names)

// Printando os valores do personObject
print("Nome: "+personObject.name)
print("Idade: "+personObject.age)
print("País: "+personObject.country)
print("Profissão: "+personObject.profession)
print("Filmes: "+personObject.movies)

// Fazendo uma pesquisa
const findName = names.find(name => console.log(name))