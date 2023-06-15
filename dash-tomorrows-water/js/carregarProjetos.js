'use strict'

import { excluirProjeto, projetos } from "./api.js";
let dados = await projetos();
console.log(dados)

const cardProjeto = (dados) => {

    const card = document.createElement('div')
    card.classList.add('card')


    const text_container = document.createElement('div')
    card.classList.add('text_container')

    const name = document.createElement('h2')
    name.classList.add('card__name')
    name.textContent = dados.nome;

    const description = document.createElement('p')
    description.classList.add('card__description')
    description.textContent = dados.descricao;

    const button = document.createElement('button')
    button.classList.add('card__button')
    button.textContent = "Excluir";

    button.addEventListener('click', () => {
        excluirProjeto(dados.id); // Chama a função para excluir o produto passando o ID como parâmetro
        card.remove(); // Remove o card do DOM após a exclusão
    });

    text_container.append(name, description, button)

    const img = document.createElement('img')
    img.classList.add('card__img')
    img.src = dados.imagem;

    

    card.append(text_container, img)
    return card
}

export const carregarProjeto = async () => {

    const container = document.getElementById('container-collections')
    const cards = dados.projetos.map(cardProjeto)
    container.append(...cards)
}

carregarProjeto()