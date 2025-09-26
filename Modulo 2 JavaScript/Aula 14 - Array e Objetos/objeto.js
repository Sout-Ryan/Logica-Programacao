let produto = {
    nome: "computador",
    fabricante: "Positivo",
    preco: 2000,
    processador: "I2-2100",
}

// acessando um item no objeto
console.log(produto.nome);
console.log(produto["nome"]);

// adicionando um item no objeto
produto.armazenamento = "256GB"
produto["memoria-RAM"] = "8GB"
console.log(produto);

// remover elemento
delete produto.armazenamento
delete produto["memoria-RAM"]
console.log(produto);