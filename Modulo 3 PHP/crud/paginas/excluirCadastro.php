<?php
    // VALIDAR SE O $_POST["id"] ESTÁ VAZIO
    if(isset($_POST["id"])){

        //Conexão com o banco de dados
        include("../conexao/conexao.php");

        //Cria a variável do id
        $id = $_POST["id"]

        //Prepara a consulta SQL para excluir cadastro
        $sql = "DELETE FROM usuarios WHERE ID = ?";
        $stmt = $conn->prepare($sql);

        if ($stmt) {
            $stmt->bind_param("i", $id);

            //Executa a query
            $stmt->execute();
            header("Location: verificarUsuario.php")
            //Encerrar consulta
            $stmt->close();
        } else {
            //Mensagem de erro
            echo "<div clas="mensagem erro" >Erro na consulta</div>"
        }
        //Encerrar a conexão com o banco de dados
        $conn->close();
    }
?>