document.addEventListener("DOMContentLoaded", () => {
    const pageId = document.body.id;
    if (pageId === "servCas") cardCasamento();
    else if (pageId === "servAni") cardAniversario();
    else if (pageId === "servCor") cardCorporativo();
})

//objetos com as imagens do card de cada pagina
const casamentoImgs = [
    {
        imagem: '../imagens/servicos/cas1.jpg',
        href: 'https://www.instagram.com/p/DBfB_FzsBCi/?img_index=6'
    },
    {
        imagem: '../imagens/servicos/cas2.jpg',
        href: 'https://www.instagram.com/p/DBfB_FzsBCi/?img_index=6'

    },
    {
        imagem: '../imagens/servicos/cas3.jpg',
        href: 'https://www.instagram.com/p/DBfB_FzsBCi/?img_index=6'

    }
]
const aniversarioImgs = [
    {
        imagem: '../imagens/servicos/ani1.jpg',
        href: 'https://www.instagram.com/p/C9AlvuZgbH4/?img_index=1'
    },
    {
        imagem: '../imagens/servicos/ani2.jpg',
        href: 'https://www.instagram.com/p/C6yfJOHs5do/?img_index=3'

    },
    {
        imagem: '../imagens/servicos/ani3.jpg',
        href: 'https://www.instagram.com/p/C-IEQqcR435/?img_index=1'

    }
]
const corporativoImgs = [
    {
        imagem: '../imagens/servicos/cor1.jpg',
        href: 'https://www.instagram.com/p/DADscwXsOWL/?img_index=5'
    },
    {
        imagem: '../imagens/servicos/cor2.jpg',
        href: 'https://www.instagram.com/p/C_bgGXnpTs6/?img_index=3'

    },
    {
        imagem: '../imagens/servicos/cor3.jpg',
        href: 'https://www.instagram.com/p/C_bgGXnpTs6/?img_index=4'

    }
]
let cardElemento, imagens, cardAtual = 0;

const imgElemento = document.createElement('img');
const linkImg = document.createElement('a');
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
    linkImg.href = imagens[cardAtual].href;
    linkImg.appendChild(imgElemento);
    card.appendChild(linkImg);
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
    linkImg.href = imagens[cardAtual].href;
}
