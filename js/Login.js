// Metodo get 
function metodoget()
{
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
  // Faz a requisição usando o fetch
fetch(apiUrl, configuracao)
.then(response => {
  console.log('Status da resposta:', response.status);
  return response.text().then(dadosRecebidos => ({ dadosRecebidos, response }));
})
.then(({ dadosRecebidos, response }) => {
  console.log('Resposta do servidor:', dadosRecebidos);
  if (dadosRecebidos.errors) {
    console.error('Detalhes do erro de validação:', dadosRecebidos.errors);
  } else if (response.status === 200) {
    alert("Requisição bem-sucedida!");
  } else {
    alert("Erro na requisição. Detalhes: " + dadosRecebidos);
  }
})
.catch(erro => {
  console.error('Erro durante a requisição:', erro);
});

}



butao.onclick = handleClick;