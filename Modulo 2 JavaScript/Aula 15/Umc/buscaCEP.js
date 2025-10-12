//https://viacep.com.br/ws/COLOCAR CEP/json//

const cep = document.getElementById("cep")

cep.addEventListener("change", (evento) => {
    let cepUsuario = evento.target
    buscaCep(cepUsuario.value)
})

async function buscaCep(cepUsuario) {

    let erroCep = document.getElementById("erro")
    erroCep.innerHTML = " "
    

    try {
        let consultaCep = await fetch(`https://viacep.com.br/ws/${cepUsuario}/json`)
        console.log(consultaCep);

        let consultaCepJson = await consultaCep.json()

        console.log(consultaCepJson);   

        if (consultaCepJson.erro){
            throw Error ("CEP INEXISTENTE")
        }

        preencherCampos(consultaCepJson)
    }
    catch {
        erroCep.innerHTML = "CEP INVALIDO, TENTE NOVAMENTE!"
    }
}

function preencherCampos(cepJson) {

    let rua = document.getElementById("rua")
    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")

    rua.value = cepJson.logradouro
    bairro.value = cepJson.bairro
    cidade.value = cepJson.localidade
    estado.value = cepJson.uf
}