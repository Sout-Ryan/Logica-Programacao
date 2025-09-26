let listaProdutos = [
    {nome: "Computador", fabricante: "Dell", valor: 5000},
    {nome: "Notebook", fabricante: "Acer", valor: 3000},
    {nome: "Monitor", fabricante: "LG", valor: 900},
    {nome: "Teclado", fabricante: "Redragon", valor: 200},
    {nome: "Mouse", fabricante: "Logitech", valor: 200}
]

listaProdutos.forEach((produto) => {
    console.log(`O ${produto.nome} da ${produto.fabricante} é ${produto.valor}`);
    // duas `` equivale ao f no python
    // ex: (f"aa{variavel}") enquanto no JavaScript: (`aa ${variavel}`)
})

// listar produtos acima de 1000
let listaProdutosCaros = listaProdutos.filter(produto => produto.valor > 1000)
console.log(listaProdutosCaros)