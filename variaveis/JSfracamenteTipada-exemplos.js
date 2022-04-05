/* JS COMO LINGUAGEM FRACAMENTE TIPADA */

let cpf
  // Não há a necessidade de preencher a variável com um tipo de dado imediatamente

console.log(cpf, typeof cpf) // undefined

let numeroTelefone = '(35)99957-3250'
console.log(numeroTelefone, typeof numeroTelefone)
numeroTelefone = 35999573250 
console.log(numeroTelefone, typeof numeroTelefone)
  // para informações pessoais com valores únicos é recomendado usar o tipo String (CPF, RG, número, matrícula, entre outros)