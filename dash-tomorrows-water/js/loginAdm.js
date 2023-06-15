
const form = document.querySelector(".dashboard");
const email = document.getElementById("input-email");
const senha = document.getElementById("input-senha");
const message = document.getElementById("descricao-input");

const button = document.getElementById('input-enviar');

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".error-message");

  // Adiciona a mensagem de erro
  small.textContent = message;

  // Adiciona a classe de erro
  formControl.classList.remove("success");
  formControl.classList.add("error");
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".success-message");

  small.textContent = message;

  // Adicionar a classe de sucesso
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkInputs() {

  if (email.value === "") {
    setErrorFor(email, "O e-mail é obrigatório!");
  } else if (!checkEmail(email.value)) {
    setErrorFor(email, "Por favor, insira um email válido!");
  } else {
    setSuccessFor(email);
  }

  if (senha.value === "") {
    setErrorFor(senha, "A senha é obrigatória.");
  } else {
    setSuccessFor(senha);
  }


  const formControls = form.querySelectorAll(".form-group");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.classList.contains("success");
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }

}

button.addEventListener("click", async (e) => {
  e.preventDefault();
  checkInputs();


  const administrador = {
    "id": "",
    "email": email.value,
    "senha": senha.value,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(administrador)
  };


  const response = await fetch('https://tomorrows-water.onrender.com/v1/tomorrows-water/administrador/login', options);
  const data = await response.json();
  console.log(response)

  if (response.ok) {
    // Acesso autorizado, redirecionar para outra página HTML
    window.location.href = '../dash_cadastro/index.html';
  } else {
    // Acesso negado, exibir mensagem de erro
    if (response.status === 401) {
      setErrorFor(senha, "Email ou senha incorretos.");

      // Remover a mensagem de erro após 5 segundos
      setTimeout(function () {
        setSuccessFor(senha, ""); // Limpar a mensagem de sucesso
        setErrorFor(senha, ""); // Limpar a mensagem de erro
      }, 300);
    } else {
      // Outro erro
      console.log(data.message);
    }
  }

});
