alert("Tudo certo jovem!"); // Cria uma caixa de mensagem para visualizar o texto
console.log("Tudo certo amigo!"); // Utlizar f12 para verificar o terminal

// ARRAYS
var array = ["vinicius", 12, true, 't'];

// Array dentro de array:
var array1 = ["vinicius", 12, true, 't', ['karina', 13, false, 'g'], ['array3']]
//console.log(array1);

array.forEach(function(item, index){console.log(item, index)}); // Imprime todos itens com seus indices
array.pop(); // Retira o último item da array
array.push("teste"); // Inclui um item no final da array
array.shift(); // Remove o primeiro item da array
array.unshift(15); // Adiciona um item no começo da array
var indexTeste = array.indexOf("teste"); // Informa o indice do conteudo especificado na array
array.splice(2); // Remove um item, conforme o indice informado como parametro
// array.splice(1,3) // Remove os iten de indice 1 a 3 da array
var array3 = array.slice(1,3); // Pega os conteúdos de 1 a 3 da array  
console.log(array);


// OBJETOS
var xicara = {
    cor: 'azul',
    tamanho: 'p',
    //funcao: tomarCafe(),
    outroObjeto: {
        atributo1: 'atributo',
        atributo2: 12
    }
}

var corXicara = xicara.cor;
var funcao = xicara.funcao;
var {cor, tamanho} = xicara;

console.log(xicara);