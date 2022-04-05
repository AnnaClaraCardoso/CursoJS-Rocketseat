// ESCOPO LET
  // let é local

  {
    let escopoLet = 'teste escopo let'
  }
  // console.log(escopoLet) > ReferenceError: escopoLet is not defined at
  
  // let atualizado em outro escopo
  let letForaDeEscopo = 'let fora de escopo'
  {
    {
      {
        letForaDeEscopo = 'atualizando valor let'
        console.log(letForaDeEscopo)
      }
    }
  }
  console.log(letForaDeEscopo)
  
  {
    // console.log(letInicializadoDepois) > ReferenceError: Cannot access 'letNaoInicializado' before initialization
    let letInicializadoDepois = 'let inicializado depois' 
  
    // Portanto, não ocorre hoisting
  }
  
  {
    let letInicializadoAntes = 'let inicializado antes'
    console.log(letInicializadoAntes)
  }
  
  
// ESCOPO CONST
  // const é local

  {
    const escopoConst = 'teste escopo const'
  }
  // console.log(escopoConst) > ReferenceError: escopoLet is not defined at

  // const (de mesmo nome) declarado em outro escopo
  const constForaDeEscopo = 'const fora de escopo'
  // constForaDeEscopo = 'atualizando valor const' > TypeError: Assignment to constant variable.
  {
    {
      {
        const constForaDeEscopo = 'atualizando valor const' // escopo diferente
        console.log(constForaDeEscopo)
      }
    }
  }
  console.log(constForaDeEscopo)