const produtos2 = [
    {
        id: 1,
        nome: 'Whey Baunilha 900g',
        img: './assets/img/products/whey1.png',
        alt: 'Foto do Whey Baunilha 900g',
        valor: 120,
        descontado: true,
        desconto: 0.2,
        estocado: true,
        estoque: 20,
        vendidos: 45
    },
    {
        id: 2,
        nome: 'Whey Chocolate 900g',
        img: './assets/img/products/whey2.png',
        alt: 'Foto do Whey Chocolate 900g',
        valor: 120,
        descontado: false,
        desconto: 0,
        estocado: true,
        estoque: 5,
        vendidos: 60
    },
    {
        id: 3,
        nome: 'Refil Whey Baunilha 900g',
        img: './assets/img/products/whey-refil1.png',
        alt: 'Foto da Creatina 100$ Pura 300g',
        valor: 105,
        descontado: true,
        desconto: 0.2,
        estocado: true,
        estoque: 25,
        vendidos: 20
    },
    {
        id: 4,
        nome: 'Refil Whey Chocolate 900g',
        img: './assets/img/products/whey-refil2.png',
        alt: 'Foto da Creatina 100$ Pura 300g',
        valor: 105,
        descontado: false,
        desconto: 0,
        estocado: true,
        estoque: 25,
        vendidos: 40
    },
    {
        id: 5,
        nome: 'Creatina 100% Pura 300g',
        img: './assets/img/products/creatina1.png',
        alt: 'Foto da Creatina 100$ Pura 300g',
        valor: 90,
        descontado: false,
        desconto: 0,
        estocado: true,
        estoque: 25,
        vendidos: 50
    },
    {
        id: 6,
        nome: 'Creatina Impura 300g',
        img: './assets/img/products/creatina2.png',
        alt: 'Foto da Creatina 100$ Pura 300g',
        valor: 75,
        descontado: true,
        desconto: 0.1,
        estocado: true,
        estoque: 25,
        vendidos: 45
    }
]

let listaTodosProdutos = document.getElementById('mais-produtos');

for (let i=0; i<produtos2.length; i++) {
    let infoProduto = produtos[i]

    let produto = document.createElement('li')
    produto.classList.add('produto')
    const descontado = infoProduto.descontado

    let imgProduto = document.createElement('img')
    imgProduto.setAttribute('src', infoProduto.img)
    imgProduto.setAttribute('alt', infoProduto.alt)
    produto.appendChild(imgProduto)

    let nomeProduto = document.createElement('span')
    nomeProduto.classList.add('nome-produto')
    nomeProduto.innerText = infoProduto.nome
    produto.appendChild(nomeProduto)

    let precosProduto = document.createElement('span')
    precosProduto.classList.add('precos')

    let valorProduto = document.createElement('span')
    valorProduto.classList.add('valor-produto')
    if (descontado) {
        valorProduto.classList.add('descontado')
    }
    valorProduto.innerText = `R$ ${infoProduto.valor.toFixed(2)}`
    precosProduto.appendChild(valorProduto)

    let valorDescontado = document.createElement('span')
    valorDescontado.classList.add('valor-desconto')
    if (descontado) {
        valorDescontado.style.display = 'block'
    }
    else {
        valorDescontado.style.display = 'none'
    }
    valorDescontado.innerText = `R$ ${(infoProduto.valor - infoProduto.valor*infoProduto.desconto).toFixed(2)}`
    precosProduto.appendChild(valorDescontado)

    produto.appendChild(precosProduto)

    listaTodosProdutos.appendChild(produto)
};