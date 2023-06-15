'use strict'

import { produtos } from "./api.js";
let dados = await produtos();
console.log(dados)

import { excluirProduto } from "./api.js";


const cardProduct = (dados) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const text_container = document.createElement('div')
    card.classList.add('text_container')

    const name = document.createElement('h2')
    name.classList.add('card__name')
    name.textContent = "Nome do Produto: " + dados.nome;

    const description = document.createElement('p')
    description.classList.add('card__description')
    description.textContent = "Descrição: " + dados.descricao;

    const preco = document.createElement('p')
    preco.classList.add('card__preco')
    preco.textContent = "Preço: R$" + dados.preco;


    text_container.append(name, preco, description)

    const img = document.createElement('img')
    img.classList.add('card__img')
    img.src =  dados.imagem;

    const button = document.createElement('button')
    button.classList.add('card__button')
    button.textContent = "Excluir";

    button.addEventListener('click', () => {
        excluirProduto(dados.id); // Chama a função para excluir o produto passando o ID como parâmetro
        card.remove(); // Remove o card do DOM após a exclusão
    });

    card.append(text_container, img, button)

    return card

}

export const carregarProduct = async () => {

    const container = document.getElementById('container-collections')
    const cards = dados.produtos.map(cardProduct)
    container.append(...cards)
}

carregarProduct()