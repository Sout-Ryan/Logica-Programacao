function addAluno() {
        const aluno = document.getElementById("aluno").value;
        const notaNum = Number(document.getElementById("nota").value);
        const lista = document.getElementById("lista");


        if(isNaN(notaNum) || notaNum < 0 || notaNum > 10 ){
            alert("Digite uma nota válida!")
            return
        }

        if(!aluno){
            alert("Digite um nome!")
            return
        }

        const alunoNota = document.createElement("li");
        alunoNota.className = notaNum >= 6 ? "verde" : "vermelho"; // definindo a classe
        alunoNota.innerHTML = `
        <strong>${aluno}</strong> -
        <span style="color: ${notaNum >= 6 ? "green" : "red"} ">
            Nota: <strong>${notaNum}</strong>
        </span>
        `;

        lista.append(alunoNota);
        document.getElementById("aluno").value = "";
        document.getElementById("nota").value = "";
    }

    function mostrarVerdes(){
        const alunos = document.querySelectorAll("#lista li");
        alunos.forEach(li => {
            li.style.display = li.classList.contains("verde") ? "block" : "none";
        });
    }

    function mostrarVermelhos(){
        const alunos = document.querySelectorAll("#lista li");
        alunos.forEach(li => {
            li.style.display = li.classList.contains("vermelho") ? "block" : "none";
        });
    }

    function mostrarTodos(){
        const alunos = document.querySelectorAll("#lista li");
        alunos.forEach(li => li.style.display = "block")
    }