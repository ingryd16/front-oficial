'use strict'

import { recados } from "./api.js";
let dados = await recados();
console.log(dados)

const cardRecado = (dados) => {

    const card = document.createElement('div')
    card.classList.add('card')


    const text_container = document.createElement('div')
    card.classList.add('text_container')

    const name = document.createElement('h2')
    name.classList.add('card__name')
    name.textContent = "Nome: " + dados.nome;

    const email = document.createElement('p')
    email.classList.add('card__email')
    email.textContent = "E-mail: " + dados.email;

    text_container.append(name, email)

    const mensagem = document.createElement('p')
    mensagem.classList.add('card__mensagem')
    mensagem.textContent = "Recado: " + dados.mensagem;
    
    card.append(text_container, mensagem)

    return card
}

export const carregarRecado = async () => {

    const container = document.getElementById('container-collections')
    const cards = dados.recado.map(cardRecado)
    container.append(...cards)
}

carregarRecado()