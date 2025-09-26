let lista = ["Santos","São Paulo","Palmeira","Corinthians"]

// acessar um item no array
console.log(listaTimes[0]);
console.log(listaTimes[1]);
console.log(listaTimes[2]);
console.log(listaTimes[3]);

// adicionar itens em um array
listaTimes.push("Ponte Preta");
listaTimes.push("Flamengo");

// vericar o tamanho da lista
console.log(listaTimes.length);

// adicionar um item na primeira posição
listaTimes.unshift("Fluminense");
listaTimes.unshift("Vasco");


// remover o primeiro item do array
listaTimes.shift();

// remover o ultimo item do array
listaTimes.pop();

// encontrar a posição de um elemnto
console.log(listaTimes.indexOf("Santos"));

let listaNomes = ["Marcos","Diego","Camila","Matheus"]

listaNomes.splice(0,1);
console.log(listaNomes);

// removendo itens
listaNomes.splice(3,1) // Matheus foi removido


// alterando itens
listaNomes.splice(1,2, "Robson","Edivan")

// adicionando itens
listaNomes.splice(2,0,"Gabriel","Diogo")

