/*1. Soma de Dois Números
Descrição:
Peça ao usuário dois números e exiba a soma deles.
Tarefas:
Crie uma função soma que receba dois números como parâmetros.
Exiba o resultado no console ou em um alert.*/

function somar() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const result = n1 + n2;
    document.getElementById('result').innerText = `Resultado: ${result}`;
}

/*2. Verificação de Par ou Ímpar
Descrição:
Peça ao usuário um número e diga se ele é par ou ímpar.
Tarefas:
Crie uma função que receba um número.
Verifique se o número é divisível por 2.
Exiba no console "O número é par" ou "O número é ímpar".*/

function verificar(n3) {
    var n3 = document.getElementById('n3').value;
    var num3 = Number.parseFloat(n3);


    if (num3 % 2 === 0){
        var result = "Par";
    }
    if (num3 %2 !== 0){
        var result = "Impar";
    }

    var resultado = document.getElementById('result1');
    resultado.innerHTML = result;

    console.log(resultado)
  }

/*3. Contagem de Números
Descrição:
Exiba os números de 1 a 10 usando um loop.
Tarefas:
Utilize um loop for para imprimir os números no console.
Modifique o exercício para usar um while.*/

var num4 = '';
function loop(){
    for (var i = 1; i <= 10; i++) {
       num4 += i;
      }

    document.getElementById("result2").innerHTML = num4;

}

/*4. Tabuada de um Número
Descrição:
Crie uma tabuada para um número informado pelo usuário.
Tarefas:
Peça ao usuário um número.
Use um loop for para multiplicar o número de 1 a 10.
Exiba o resultado no console.*/

function tabuada() {
    const n5 = parseFloat(document.getElementById('n5').value);
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += `${n5} x ${i} = ${n5 * i}\n`;
    }
    document.getElementById('result3').innerText = output;
}

/*5. Encontrar o Maior Número em uma Lista
Descrição:
Dado um array de números, encontre o maior valor.
Tarefas:
Crie um array como [3, 7, 2, 9, 5].
Use um loop para comparar os números e encontrar o maior.
Exiba o maior número no console.*/

function maiorNumero() {
    const numeros = document.getElementById('numeros').value.split(',').map(Number);
    let maior = numeros[0];
    for (let num of numeros) {
        if (num > maior) maior = num;
    }
    document.getElementById('result4').innerText = `Maior número: ${maior}`;
}

/*6. Inverter uma Palavra
Descrição:
Peça ao usuário uma palavra e exiba-a invertida.
Tarefas:
Crie uma função que receba uma string.
Converta a string para um array com o método split.
Inverta a ordem com o método reverse e transforme novamente em string com join.*/

function inverterPalavra() {
    const palavra = document.getElementById('palavra').value;
    const invertida = palavra.split("").reverse().join("");
    document.getElementById('result5').innerText = `Palavra invertida: ${invertida}`;
}

/*7. Soma de Elementos de um Array
Descrição:
Calcule a soma dos elementos de um array.
Tarefas:
Crie um array como [1, 2, 3, 4, 5].
Use um loop ou o método reduce para somar os valores.
Exiba o resultado no console.*/

function somaArray() {
    const array = [1, 2, 3, 4, 5];
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    document.getElementById('result6').innerText = `Soma dos elementos com for: ${soma}`; 
    console.log(`Soma dos elementos com for: ${soma}`);
}
somaArray();


/*8. Número Primo
Descrição:
Verifique se um número informado pelo usuário é primo.
Tarefas:
Crie uma função que receba um número.
Verifique se ele é divisível apenas por 1 e por ele mesmo.
Exiba "É primo" ou "Não é primo".*/

function numeroPrimo() {
    const n7 = parseInt(document.getElementById('n7').value);
    let isPrimo = n7 > 1;
    for (let i = 2; i <= Math.sqrt(n7); i++) {
        if (n7 % i === 0) {
            isPrimo = false;
            break;
        }
    }
    const result = isPrimo ? "É primo" : "Não é primo";
    document.getElementById('result7').innerText = `Resultado: ${result}`;
}

/*9. Fatorial de um Número
Descrição:
Calcule o fatorial de um número informado pelo usuário.
Tarefas:
Crie uma função que receba um número.
Use um loop para multiplicar os números de 1 até o número informado.
Exiba o resultado no console.*/

function fatorial() {
    const n8 = parseInt(document.getElementById('n8').value);
    let fatorial = 1;
    for (let i = 1; i <= n8; i++) {
        fatorial *= i;
    }
    document.getElementById('result8').innerText = `Fatorial: ${fatorial}`;
}

/*10. Verificar Palíndromo
Descrição:
Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
Tarefas:
Crie uma função que receba uma string.
Inverta a string e compare com o original.
Exiba no console se a palavra é ou não um palíndromo.*/
//O método split() divide um objeto de string em um array de string separando a string em substrings
//O método reverse() inverte um array diretamente. O primeiro elemento do array passa a ser o último e o último se torna o primeiro
//O método join() une todos os elementos de um array em uma string

function polindromo() {
    const palavra2 = document.getElementById('palavra2').value;
    const palavra_invertida = palavra2.split("").reverse().join(""); 

    document.getElementById('result9').innerText = `Palavra invertida: ${palavra_invertida} Palavra original: ${palavra2}`;
    console.log("Palavra invertida: " + palavra_invertida + "Palavra original: " + palavra2)
}


/*11. Contar Vogais em uma Frase
Descrição:
Dada uma frase, conte o número de vogais.
Tarefas:
Peça ao usuário uma frase.
Use um loop para verificar cada caractere.
Conte as vogais (a, e, i, o, u) e exiba o total.*/

function contarVogais() {
    const frase = document.getElementById('frase').value;
    const vogais = "aeiouAEIOU"; 
    let totalVogais = 0;

    for (let i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i])) { 
            totalVogais++;
        }
    }

    document.getElementById('result10').innerText = `Número de vogais: ${totalVogais}`;
    console.log(`Número de vogais: ${totalVogais}`);
}


/*12. Gerar Números Aleatórios
Descrição:
Gere um número aleatório entre 1 e 100.
Tarefas:
Use a função Math.random e ajuste o intervalo para 1 a 100.
Exiba o número gerado no console.*/

function gerarNumeroAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
    document.getElementById('result11').innerText = `Número gerado: ${numeroAleatorio}`;
    console.log(`Número gerado: ${numeroAleatorio}`);
}


/*13. Substituir Números Negativos por Zero
Descrição:
Dado um array de números, substitua todos os números negativos por zero.
Tarefas:
Crie um array como [4, -3, 2, -1, 0].
Use um loop para verificar cada número.
Substitua os números negativos por 0 e exiba o array no console.*/

function Substituir() {
    let array = [4, -3, 2, -1, 0]; 
    
    for (let i = 0; i < array.length; i++) { //length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array
        if (array[i] < 0) {
            array[i] = 0; 
        }
    }
    document.getElementById('result12').innerText = `Array atualizado: ${array}`; 
    console.log(`Array atualizado: ${array}`);
}

/*14. Verificar Palavras Proibidas em um Texto
Descrição:
Verifique se uma frase contém palavras proibidas.
Tarefas:
Crie um array de palavras proibidas como ['palavra1', 'palavra2'].
Peça ao usuário uma frase.
Verifique se a frase contém alguma palavra do array e exiba uma mensagem de alerta.*/




/*15. Gerar uma Lista de Números Pares
Descrição:
Crie uma lista de números pares entre 1 e 20.
Tarefas:
Use um loop para gerar os números pares.
Adicione os números a um array e exiba-o no console.
*/