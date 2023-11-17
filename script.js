
// alocando as operações matemáticas em arrow func
const logDe2 = (x) => Math.log2(x);
const roundUp = (x) => Math.ceil(x);

let nBitsEq; // inicializando a variavel que contém a equação

// elementos do DOM
const rede = document.getElementById('rede');
const disp = document.getElementById('dispositivos');
const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');

// Função de cálculo
function calculaNBits(disp) {
    let dispNum = Number(disp.value);
    if(Number.isInteger(logDe2(dispNum)) || Number.isInteger(logDe2(dispNum + 1))) {
        nBitsEq = 32 - roundUp(logDe2(dispNum) + 1);
    } else {
        nBitsEq = 32 - roundUp(logDe2(dispNum));
    }

    return nBitsEq
}

botao.addEventListener('click', () => {
    resultado.innerHTML = `
        <p>O resultado é:</p>
        <span>${rede.value}/${calculaNBits(disp)}</span>
    `
});

