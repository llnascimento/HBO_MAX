// Metodo get 
function metodoget() {
  const apiUrl = "http://hbomax.somee.com/max/api/Usuario/buscarTodos"
  const resultadoElement = document.getElementById("resultadoget")



  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {

      const primeiroUsuario = data[0]
      resultadoElement.textContent = primeiroUsuario.nome
      console.log(data);
    })
    .catch(error => {
      console.error('Erro:', error);
    });

}

var butao = document.getElementById("butao");

function handleClick() {
  const apiUrl = "http://hbomax.somee.com/max/api/Usuario/Login";
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const dadosParaEnviar = {
    email: email,
    senha: senha,
  };

  const configuracao = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dadosParaEnviar),
  };

  // Faz a requisição usando o fetch
  fetch(apiUrl, configuracao)
  .then(response => {
    console.log('Status da resposta:', response.status);
    if (!response.ok) {
      // Se houver um erro HTTP, retornamos a resposta como texto
      return response.text().then(texto => {
        throw new Error(texto); // Lançamos um erro com a mensagem de texto
      });
    }
    // Se não houver erro, retornamos a resposta como JSON
    return response.json().then(dadosRecebidos => ({ dadosRecebidos, response }));
  })

.then(({ dadosRecebidos, response }) => {

  if (dadosRecebidos.errors) {
    console.error('Detalhes do erro de validação:', dadosRecebidos.errors);
  }

  else if (response.status === 200) {

    if (dadosRecebidos.nome !== undefined) {
      
      console.log(dadosRecebidos)

      const nomeRecebido = dadosRecebidos.nome;
      // Salvar o nome na localStorage
      localStorage.setItem('nome', nomeRecebido);

      console.log("Seu nome é:", nomeRecebido); // Local

      window.location.href = "perfil.html"
      alert("Requisição bem-sucedida!");
    }

    else {
      alert("Tente novamente")
    }

  }

  else {
    alert("Erro na requisição. Detalhes: " + dadosRecebidos);
  }

})

  .catch(erro => {

    console.error('Erro durante a requisição:', erro);
    alert("Erro na requisição: " + erro.message); // Exibir a mensagem de erro
  });

}



butao.onclick = handleClick;