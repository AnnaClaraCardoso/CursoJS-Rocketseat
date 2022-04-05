// ESCOPO VAR
  // var é global e, também local
  
  {
    var escopoVar = 'teste escopo var'
    console.log(escopoVar)
  }
  console.log(escopoVar)
  
  
  console.log(varInicializadoDepois) // declarado, mas valor indefinido (hoisting)
  {
    var varInicializadoDepois = 'var inicializado depois'
  }