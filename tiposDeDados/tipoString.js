/*
 
 * Cadeia de caracteres
  
  ""  aspas duplas
  ''  aspas simples
  ``  template string (inserir dados de tipos diferentes)
 
*/


/* ASPAS */   

// exibindo só o texto
console.log('Mayk') 
console.log("Mayk")

// exibindo aspas simples internas
console.log("Mayk ''' ")
console.log("'Mayk' ")

// exibindo aspas duplas internas
console.log('"Mayk"')


/* TEMPLATE STRING */

// exibindo diferentes tipos de aspas ao mesmo tempo
console.log(`' "Mayk" '`)

// exibindo em várias linhas
console.log(`'


" Mayk " 

'`)

// exibindo resultados de expressões e dados
idadePai = 55

console.log(`Mayk tem metade da idade de seu pai:
PAI DO MAYK: ${idadePai}
MAYK: ${parseInt(idadePai/2)}
`)
