function calcularMedia(){    
    let nota1 = document.getElementById("nota1")
    let nota2 = document.getElementById("nota2")
    let res = document.getElementById("resultado")

    let media = (Number(nota1.value) + Number(nota2.value)) / 2
    res.innerHTML = `A média das notas é: ${media}`
}