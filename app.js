let listaDeNumerosSorteados = [];

function gerarNumeroAleatorio(min, max) {
    let theChoosenOne = Math.floor(Math.random() * (max - min + 1) + min);

    if (listaDeNumerosSorteados.length === max) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(theChoosenOne)) {
        return gerarNumeroAleatorio(min, max);
    } else {
        listaDeNumerosSorteados.push(theChoosenOne);
        console.log(listaDeNumerosSorteados);
        return theChoosenOne;
    }
}
let numeroSecreto = gerarNumeroAleatorio(1, 10);
console.log(numeroSecreto);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Mega-Sena');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Aeeee acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativa = `Tu teve ${tentativas} ${palavraTentativa} oia!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Esquento, o numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'Ta fri, o numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(1, 10);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}