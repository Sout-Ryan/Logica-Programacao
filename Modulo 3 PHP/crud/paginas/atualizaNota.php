<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atualizar Nota</title>
    <link rel="stylesheet" href="../estilos/styleVerificar.css">
</head>
<body>
<header>
        <nav>
            <ul>
                
                <li><a href="../index.html">Home</a></li>
                <li><a href="cadastro.php">Cadastrar Usuário</a></li>
                <li><a href="verificarUsuario.php">Procurar Usuário</a></li>

            </ul>
        </nav>
    </header>
    
    <main>
        <section id="containerSection">
            <form action="atualizarNota.php" method="post">
                <select name="curso" id="curso" class="estilo">
                    <option value="">Analise e Desenvolvimento de Sistema</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>

                </select>
                <input type="submit" value="Buscar">
            </form>
        </section>

        <section>
            <?php
            //Verificar se o $_POST["curso"] está preenchido
            if (isset($_POST["curso"])) {
                //Conexão com o banco de dados
                include("..conexao/conexao.php");

                //Preparando a consulta SQL
                $sql = "SELECT * FROM usuarios WHERE curso= ?";
                $stmt = $conn->prepare("$sql");

                if ($stmt) {

                    $stmt->bind_param("s", curso);
                    $stmt->execute();
                }
            }
            ?>
        </section>
    </main>

</body>
</html>