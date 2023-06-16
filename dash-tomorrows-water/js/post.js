function showSuccessMessage() {
    const messageElement = document.createElement("div");
    messageElement.textContent = "Produto criado";
    messageElement.classList.add("success-message");

    const bottomContainer = document.getElementById("bottom-container-produto");
    bottomContainer.appendChild(messageElement);

    setTimeout(() => {
        bottomContainer.removeChild(messageElement);
    }, 3000); // Remove a mensagem após 3 segundos
}

async function createProduto(produto) {
    console.log(produto)
    const url = 'https://tomorrows-water.onrender.com/v1/tomorrows-water/produto';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)   
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log('Dados enviados com sucesso para o servidor.');
            showSuccessMessage();
        } else {
            console.log('Ocorreu um erro ao enviar os dados para o servidor.');
        }
    } catch (error) {
        console.error('Ocorreu um erro na requisição:', error);
    }
}

const form = document.querySelector(".forms-produto");
const nome = document.getElementById("input-nome");
const cor = document.getElementById("input-cor");
const preco = document.getElementById("input-preco");
const descricao = document.getElementById("input-descricao");
const altura = document.getElementById("input-altura");
const largura = document.getElementById("input-largura");
const tamanho = document.getElementById("input-tamanho");
const categoria = document.getElementById("input-categoria");
const imagem = document.getElementById("input-imagem");

const button = document.getElementById('submit-button-produto');


button.addEventListener("click", (e) => {
    e.preventDefault();

    // Verifica se os campos obrigatórios estão preenchidos
    if ( nome.value.trim() === "" || descricao.value.trim() === "" || cor.value.trim() === "" || preco.value.trim() === "" || imagem.value.trim() === "" || categoria.value.trim() === ""){
        // Exibe mensagem de erro
        const errorElement = document.createElement("div");
        errorElement.textContent = "Nome, descrição, cor, preço, imagem e categoria são campos obrigatórios.";
        errorElement.classList.add("error-message");

        const bottomContainer = document.getElementById("bottom-container-produto");
        bottomContainer.appendChild(errorElement);

        // Remove a mensagem de erro após 3 segundos
        setTimeout(() => {
            bottomContainer.removeChild(errorElement);
        }, 3000);

        return; // Interrompe o envio do formulário caso haja erro
    }

    // Verifica se a imagem é uma URL válida
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(imagem.value.trim())) {
        // Exibe mensagem de erro
        const errorElement = document.createElement("div");
        errorElement.textContent = "A imagem deve ser uma URL válida.";
        errorElement.classList.add("error-message");

        const bottomContainer = document.querySelector(".row-4-produto");
        bottomContainer.appendChild(errorElement);

        // Remove a mensagem de erro após 3 segundos
        setTimeout(() => {
            bottomContainer.removeChild(errorElement);
        }, 3000);

        return; // Interrompe o envio do formulário caso haja erro
    }


    const produto = {
        "id": "",  
        "descricao": descricao.value,
        "nome": nome.value,
        "cor": cor.value,   
        "preco": preco.value,
        "imagem": imagem.value,
        "altura": altura.value,
        "largura": largura.value,
        "tamanho_sigla": tamanho.value,
        "categoria": categoria.value
    };

    createProduto(produto);
    console.log(produto);
});
