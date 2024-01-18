// Criando uma variável
const text = "Olá, Mundo!"

// Um valor constante não pode ser alterado
// Um valor let pode ser alterado

// Criando uma função de print
function print(text) {
  console.log(text)
}

// Criando uma função lambda ( Pelo oque eu entendi. )
const imprimeName = (nome) => console.log("Ola, " + nome)
// Executando a função
imprimeName("João")

// Printando o valor da variável
print(text)