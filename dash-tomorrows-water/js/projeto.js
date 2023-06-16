function showSuccessMessage() {
    const messageElement = document.createElement("div");
    messageElement.textContent = "Projeto criado";
    messageElement.classList.add("success-message");

    const bottomContainer = document.getElementById("bottom-container-projeto");
    bottomContainer.appendChild(messageElement);

    setTimeout(() => {
        bottomContainer.removeChild(messageElement);
    }, 3000); // Remove a mensagem após 3 segundos
}

async function createProjeto(projeto) {
    console.log(projeto)
    const url = 'https://tomorrows-water.onrender.com/v1/tomorrows-water/projeto';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projeto)
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log('Dados enviados com sucesso para o servidor.');
            showSuccessMessage()
        } else {
            console.log('Ocorreu um erro ao enviar os dados para o servidor.');
        }
    } catch (error) {
        console.error('Ocorreu um erro na requisição:', error);
    }
}

const form = document.querySelector(".forms-projeto");
const nome = document.getElementById("input-nome-projeto");
const descricao = document.getElementById("input-descricao-projeto");
const imagem = document.getElementById("input-imagem-projeto");
const button = document.getElementById('submit-button-projeto');

button.addEventListener("click", (e) => {
    e.preventDefault();

    // Verifica se os campos obrigatórios estão preenchidos
    if (nome.value.trim() === "" || descricao.value.trim() === "") {
        // Exibe mensagem de erro
        const errorElement = document.createElement("div");
        errorElement.textContent = "Nome e descrição são campos obrigatórios.";
        errorElement.classList.add("error-message");

        const bottomContainer = document.getElementById("bottom-container-projeto");
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

        const bottomContainer = document.querySelector(".row-2-projeto");
        bottomContainer.appendChild(errorElement);

        // Remove a mensagem de erro após 3 segundos
        setTimeout(() => {
            bottomContainer.removeChild(errorElement);
        }, 3000);

        return; // Interrompe o envio do formulário caso haja erro
    }


    const projeto = {
        "id": "",
        "nome": nome.value,
        "descricao": descricao.value,
        "imagem": imagem.value,
    };

    createProjeto(projeto);
    console.log(projeto);
});
