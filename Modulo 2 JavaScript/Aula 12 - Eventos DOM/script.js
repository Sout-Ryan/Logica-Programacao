let caixa = document.getElementById("mouse")


function entradaMouse(){
    caixa.style.backgroundColor = "blue "
}

function saidaMouse(){
    caixa.style.backgroundColor = "red"
}

function mudaHtml(){
    let nome = document.querySelector("#nome").value
    caixa.innerHTML = nome
    // A propriedade innerHTML é usada para obter ou definir o conteúdo HTML de um elemento no DOM. Ela permite manipular dinamicamente o conteúdo de uma página web. 
}