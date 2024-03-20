var username = localStorage.getItem('nome')
console.log(username)
const chave = document.getElementById("txt_nome")


chave.textContent = username


const card = document.getElementById("card_perfil")

function perfilClick(){
    window.location.assign("catalago.html")
}

card.onclick = perfilClick
