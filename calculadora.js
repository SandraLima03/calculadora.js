function calculadora() {
    const operacao = Number(prompt('Escolha uma operacao:\n 1 - Soma (+)\n 2 - Subtracao (-)\n 3 - Multiplicacao (*)\n 4 - Divisao real (/)\n 5 - Divisao inteira (%)\n 6 - Potenciacao (**)'));
    
    
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
    }
    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
    }
    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
    }
    function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
    }
    function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisao entre ${n1} e ${n2} é igual a ${resultado}`)
    }
    function divisaoReal() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
    }

    function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operacao?\n 1 - Sim\n 2 - nao');

        if (opcao == 1) {
            calculadora();
        }else if (opcao == 2) {
            alert('Até mais')
        }

    }

    if (operacao == 1) {
        soma();   
    }else if (operacao == 2) {
        subtracao();
    }else if (operacao == 3) {
        multiplicacao();
    }else if (operacao == 4) {
        divisaoReal();
    }else if (operacao == 5) {
        divisaoInteira();
    }else if (operacao == 6) {
        potenciacao();
    }

}

calculadora ();