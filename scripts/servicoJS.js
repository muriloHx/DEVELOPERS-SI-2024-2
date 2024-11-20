document.addEventListener("DOMContentLoaded", () => {
    const pageId = document.body.id;
    if (pageId === "servCas") cardCasamento();
    else if (pageId === "servAni") cardAniversario();
    else if (pageId === "servCor") cardCorporativo();
})

//objetos com as imagens do card de cada pagina
const casamentoImgs = [
    {
        imagem: '../imagens/bkgnd/bkg2.jpg'
    },
    {
        imagem: '../imagens/bkgnd/bkg3.jpg'
    }
]
const aniversarioImgs = [
    {
        imagem: '../'
    },
    {
        imagem: '../imagens/bkgnd/bkg3.jpg'
    }
]
const corporativoImgs = [
    {
        imagem: '../imagens/bkgnd/bkg5.jpg'
    },
    {
        imagem: '../imagens/bkgnd/bkg3.jpg'
    }
]
let cardElemento, imagens, cardAtual = 0;

const imgElemento = document.createElement('img');
function cardCasamento() {
    cardElemento = document.getElementById('cardCas');
    imagens = casamentoImgs;
    inicio(imagens, cardElemento);
}
function cardAniversario() {
    cardElemento = document.getElementById('cardAni');
    imagens = aniversarioImgs;
    inicio(imagens, cardElemento);
}
function cardCorporativo() {
    cardElemento = document.getElementById('cardCor');
    imagens = corporativoImgs;
    inicio(imagens, cardElemento);
}

function inicio(imagens, card) {
    imgElemento.src = imagens[cardAtual].imagem;
    card.appendChild(imgElemento);
}

function alterar(x) {
    console.log(x);
    if (x === 0) {
        if (cardAtual === 0) return;
        cardAtual--;
    } else {
        if (cardAtual < (imagens.length) - 1) cardAtual++;
    }
    alterarCard(cardAtual);
}
function alterarCard(x) {
    imgElemento.src = imagens[cardAtual].imagem;
}
