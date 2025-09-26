// document.body.style.backgroundColor = "gray"
// document.body.style.color = "white"

window.alert("seja bem vindo")

window.prompt("Login")
window.prompt("Senha")

window.alert("nem precisa logar kkkk")

window.confirm("deseja instalar um cavalo de troia para acessar o site?")
window.alert("cavalo de troia instalado com sussesso")

// Usando TagName
let paragrafo1 = document.getElementsByTagName("p")[0]
paragrafo1.innerHTML = "Usando o TagName"
paragrafo1.style.backgroundColor = "red"

// Usando ID
let paragrafo2 = document.getElementById("paragrafo2")
paragrafo2.innerHTML = "Usando ID"
paragrafo2.style.backgroundColor = "green"

// Usando Class
let paragrafo3 = document.getElementsByClassName("paragrafo3")[0]
paragrafo3.innerHTML = "Usano Class"
paragrafo3.style.backgroundColor = "blue"

// Usando QuerySelcto
let paragrafo4 = document.querySelector("#paragrafo4")
paragrafo4.innerHTML = "Usando QuerySelector"
paragrafo4.style.backgroundColor = "pink"

// Usando QuerySelectorAll
let paragrafo5 = document.querySelectorAll("p")[4]
paragrafo5.innerHTML = "Usando QuerySelcectorAll"
paragrafo5.style.backgroundColor = "purple"