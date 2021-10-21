function calculadora(){
    const operacao = Number(prompt("Escolha uma operação:\n1 - soma (+)\n2 - subtração (-)\n3 - Multiplicação (*)"
                            + "\n4 - Divisao real (/)\n5 - Divisao inteira (%)\n6 - Potenciação (**)"));

if(!operacao || operacao >= 7){
    alert("Erro - operação inválida!");
    calculadora();
} else {
let n1 = Number(prompt("Insira o primeiro valor:"));
let n2 = Number(prompt("Insira o segundo valor:"));
let resultado;

if(!n1 || !n2){
    alert("Erro - parametros invalidos!");
    calculadora();
} else{
function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
    novaOperacao();
}

function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
    novaOperacao();
}

function multiplicação() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
    novaOperacao();
}

function divisaoReal() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
    novaOperacao();
}

function divisaoInteira() {
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
    novaOperacao();
}

function potenciacao() {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2} = ${resultado}`);
    novaOperacao();
}

function novaOperacao() {
    let opcao = prompt("Deseja fazer outra operação?\n1 - Sim\n2 - Não");
    if(opcao == 1){
        calculadora();
    } else if(opcao == 2){
        alert("Até mais!");
    } else {
        alert("Digite uma operacao valida!");
        novaOperacao();
    }
}
}

switch(operacao) {
    case 1:
        soma();
        break;
        case 2:
            subtracao();
            break;
            case 3:
                multiplicação();
                break;
                case 4:
                    divisaoReal();
                    break;
                    case 5:
                        divisaoInteira();
                        break;
                        case 6:
                            potenciacao();
                            break;
}
}
}
calculadora();