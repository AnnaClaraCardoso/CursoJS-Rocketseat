# Variáveis

  * São espaços alocados da memória física
  * São declaradas por meio de nomes simbólicos (identificadores)
  * Servem para armazenar dados temporários
  

  ## Declaração de variáveis

  Existem 3 palavras-chave reservadas para declaração de variáveis
    * var *global e variável*
    * let *de bloco e variável*
    * const *de bloco e constante*

  **O JS é uma linguagem fracamente tipada e dinâmica:**

    Não é preciso definir o tipo de dado uma variável ao declara-lá, pois ele dependerá somente do valor que ela receber.
      - Podemos mudar o tipo do conteúdo da variável a qualquer momento


  ## Ecopo (Scope)

    Determina a visibilidade de uma variável no código-fonte.

    ### Block Statement

      ```js
        // Iniciando um bloco (novo escopo):
        {
          // comandos no bloco
        }
      ```
    
    ### Hoisting e Escopo global
    
    No JS, variáveis globais são aquelas que podem ser manipuladas em qualquer etapa do código.
      Hoisting: mecanismo no JS que DECLARA as variáveis no início do código para que assim elas sejam globais.

    ```js
      // var varDeclaradoDepois <-- HOISTING
      console.log(varInitializedAfter)
      {
        var varInitializedAfter = 99 
      }
    ```

    ### Escopo local

    #### let
      * não sofre hoisting
      * PODE ter o valor atualizado em escopos diferentes

    #### const
      * não sofre hoisting
      * NÃO PODE ter o valor atualizado, independente dos escopos


  ## Nomeação de variáveis

  - Únicas restrições:
    * iniciar com números
    * inserir espaços em branco