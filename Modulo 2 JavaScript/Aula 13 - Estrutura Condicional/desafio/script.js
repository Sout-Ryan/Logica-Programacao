function calcular(){    
    // variaveis dos num digitado
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    // variaveis da operação e resultado
    let op = document.getElementById("operacao");
    let resultado = document.getElementById("resultado");
    
    // variaveis das operações
    let soma = value("+")
    let subtracao = value("-")
    let multiplicacao = value("*")
    let divisao = value("/")
    
    

    // teste
    resultado.innerHTML = "teste"
    resultado.style.borderRadius = "10px"
    resultado.style.border = "solid, 2px,"
    resultado.style.padding = "2px 10px"
    resultado.style.backgroundColor = "lightblue"
}
