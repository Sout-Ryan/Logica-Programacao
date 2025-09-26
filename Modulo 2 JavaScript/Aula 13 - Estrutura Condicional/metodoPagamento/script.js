function calcularPagamento(){
    let valoraGasto = parseFloat (document.getElementById("valorCompra")).value
    let formaPagamento = docum.getElementById("formaPagamento0")
    let resultado = document.querySelector("#resultado")

    switch (formaPagamento){    
        case "pix":
            let valorFinal = valoraGasto * 0.9
            resultado.innerHTML = "O valor a ser pago é de " + valorFinal.toFixed(2)
            break
        case "debito":
            valorFinal = valoraGasto * 0.95
            resultado.innerHTML = "O valor a ser pago é de " + valorFinal.toFixed(2)
            break
        case "credito":
            valorFinal = valoraGasto * 0.9
            resultado.innerHTML = "O valor a ser pago é de " + valorFinal.toFixed(2)
            break
        default:
            resultado.innerHTML = "OPÇÃO INVALIDA"
            break
    }

}