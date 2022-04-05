/* PALAVRAS-CHAVE */

// const clima = 'Quente' > ERROR: Uncaught TypeError: Assignment to constant variable.

let clima = 'Quente'

console.log(clima)

clima = 'Frio'

console.log(`Novo clima atual: ${clima}`)

var salario = 13805.46

console.log(`Salário atual: ${salario}`)

salario *= 1.15 // salario = salario * 1.15

console.log(`Novo salário atual: ${salario.toFixed(2)}`)