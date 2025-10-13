let nomeInput = document.getElementById("nome")
let notaInput = document.getElementById("nota")
let alunos = []
// Capturar nome e nota
function capturar() {
	const nome = nomeInput.value.trim();
	const nota = parseFloat(notaInput.value);
	if (nome && !isNaN(nota)) {
		alunos.push({ nome, nota });
		nomeInput.value = "";
		notaInput.value = "";
		mostrarTodos();
	}
}
// Mostrar todos os alunos
function mostrarTodos() {
	exibirAlunos(alunos);
}
// Apenas aprovados
function apenasAprovado() {
	const aprovados = alunos.filter(a => a.nota >= 6);
	exibirAlunos(aprovados);
}
// Apenas Reprovados
function apenasReprovado() {
	const reprovados = alunos.filter(a => a.nota <= 5);
	exibirAlunos(reprovados);
}
function exibirAlunos(lista) {
	let container = document.getElementById("resultado");
	if (!container) {
		container = document.createElement("div");
		container.id = "resultado";
		document.body.appendChild(container);
	}
	container.innerHTML = "";
	lista.forEach(aluno => {
		const div = document.createElement("div");
		div.textContent = `${aluno.nome} - Nota: ${aluno.nota}`;
		if (aluno.nota >= 7) {
			div.style.color = "green";
		} else if (aluno.nota <= 5) {
			div.style.color = "red";
		} else {
			div.style.color = "black";
		}
		container.appendChild(div);
	});
}
