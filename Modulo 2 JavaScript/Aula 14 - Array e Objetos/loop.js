// for i in range (1,10):
//      print(i)

for(let i = 0; i <= 10; i++){
    console.log(i);
}

let listaProdutos = ["Computador","Notebook","Teclado","Mouse"]

// percorrer array
for (let i = 0; i < listaProdutos.length; i++){
    console.log(listaProdutos[i]);
}

// percorres array - forEach
listaProdutos.forEach((produto) => {
    console.log(produto);
})
