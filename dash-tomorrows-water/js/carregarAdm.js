'use strict'

import { adm } from "./api.js";
let dados = await adm();
console.log(dados)

const cardAdm = (dados) => {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const text_container = document.createElement('div');
    text_container.classList.add('text_container');
  
    const name = document.createElement('h3');
    name.classList.add('card__name');
    name.textContent = "Nome: " + dados.nome;
  
    const email = document.createElement('p');
    email.classList.add('card__email');
    email.textContent = "E-mail: " + dados.email;
  
    const cpf = document.createElement('p');
    cpf.classList.add('card__cpf');
    cpf.textContent = "Senha: " + dados.senha;
  
    text_container.append(name, email, cpf);
  
    card.append(text_container);
  
    return card;
  };

  export const carregarAdm = async () => {
    const container = document.getElementById('container-collections');
    const dados = await adm(); //obter os dados atualizados
    const cards = dados.administradores.map(cardAdm); 
    container.append(...cards);
  };

carregarAdm();