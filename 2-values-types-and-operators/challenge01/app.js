

/*
02 - Inicie o seu servidor local e abra o console do browser.
*/

// console.log('JS is Awesome!')

/*
03 - Para certificar-se que este arquivo realmente está linkado, exiba a frase  
"JS is Awesome!" em um alert no browser.

Como mencionei durante a aula: não se preocupe em entender 100% o que os comandos  
"alert" e "console" fazem. Nós falaremos sobre eles mais à frente =)

Utilize os espaços entre os comentários abaixo para executar os códigos dos 
exercícios. Inclusive o alert mencionado acima.
*/



/*
04 - Comente o alert que você escreveu acima, utilizando o comentário de uma linha.
*/

/*
05 - Declare uma const "myBirthYear", que recebe o ano do seu nascimento, com 4  
dígitos. Ex.: 1930.
*/

const myBirthYear = 1998


/*
06 - Declare uma const "currentYear", que recebe o ano atual, com 4 dígitos.
*/

const currentYear = 2022

/*
07 - Exiba as const "myBirthYear" e "currentYear", lado a lado, no console do browser.
*/

console.log(myBirthYear, currentYear)

/*
08 - Experimente.

- Declare uma const "myAge", que recebe o ano atual subtraído pelo ano do seu  
nascimento. Mas sem digitar os números manualmente.

Você pode utilizar o sinal de menos (-) entre os dois valores e verificar o que  
acontece. 

- Exiba a "myAge" no console.
*/

const myAge = currentYear - myBirthYear

console.log(myAge)

/*
09 - Antes do console.log abaixo, declare uma const "ten", que recebe o número  
10 e:

- Descomente o console.log;
- Substitua a palavra "valor1" pelo ano atual somado à 10;
- Substitua a palavra "valor2" pela sua idade somada à 10;
- Os números não devem ser digitados manualmente;
- Observe o resultado no console do browser.

Não se assuste com as crases e os cifrões. Conversaremos mais sobre operações  
matemáticas e strings (textos) em breve =)
*/

const ten = 10 

console.log(`Em ${currentYear + ten}, estarei com ${myAge + 10} anos.`)

