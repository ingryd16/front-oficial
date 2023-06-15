'use strict'

import { doadores } from "./api.js";
let dados = await doadores();
console.log(dados)

const cardDoador = (dados) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const text_container = document.createElement('div')
    card.classList.add('text_container')

    const name = document.createElement('h3')
    name.classList.add('card__name')
    name.textContent = "Nome do Doador: " + dados.nome;

    const email = document.createElement('p')
    email.classList.add('card__email')
    email.textContent = "E-mail: " + dados.email;

    const cpf = document.createElement('p')
    cpf.classList.add('card__cpf')
    cpf.textContent = "CNPJ: " + dados.cpf;


    const telefone = document.createElement('p')
    telefone.classList.add('card__telefone')
    telefone.textContent = "Telefone: " + dados.telefones[0].numero;

    const tipo_doacao = document.createElement('p')
    tipo_doacao.classList.add('card__tipo_doacao')
    tipo_doacao.textContent = "Tipo da doação: " + dados.tipo_doacao;

    const valor = document.createElement('p')
    valor.classList.add('card__valor')
    valor.textContent = "Valor da doação: R$" + dados.valor;



    text_container.append(name, email, cpf, telefone, valor, tipo_doacao)


    card.append(text_container)

    return card
}

export const carregarDoador= async () => {

    const container = document.getElementById('container-collections')
    const cards = dados.doadores.map(cardDoador)
    container.append(...cards)

}

carregarDoador();