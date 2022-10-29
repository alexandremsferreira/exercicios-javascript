/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

const double = (numA = 0, numB = 0) => numA * numB


// console.log(double())

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

const doubleExpress = function (numA = 0, numB = 0) {
    const result = numA * numB
    return result
}

// console.log(doubleExpress(5, 6))

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/


function countTime (count = 0) {
    while (count < 7) {
        count++
        console.log(`Esta é a ${count}ª vez que essa string é exibida`)
    }
}


// countTime ()


/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

const newStrings = () => millennialWords.join(', ').toUpperCase()


// console.log(newStrings())

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

// const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]
// Uppss, veja que eu passei o array como argumento

function verifyPositiveNegative (randomNumbers) {
    const postive = []
    const negative = []

    for (let i = 0; i < randomNumbers.length; i++) {
       if (randomNumbers[i] < 0) {
        negative.push(randomNumbers[i])
       } 
       if (randomNumbers[i] > 0) {
        postive.push(randomNumbers[i])
       }
    }    

    console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${postive.length} positivos e ${negative.length} negativos.`)
}

// verifyPositiveNegative ([-2, 93, 34, -1, 1, 93, 11, -7, 47, -3])


/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/


const getOddNumbers = arr => {
  const newPrimeArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newPrimeArr.push(arr[i])
    }
  }
  return newPrimeArr
}

// console.log(getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]))

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]

let sentences = ''

for (let i = 0; i < functions.length; i++) {
  sentences += `${functions[i]()} `
}

console.log(sentences)