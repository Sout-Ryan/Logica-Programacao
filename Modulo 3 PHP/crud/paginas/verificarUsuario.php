<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verifique o usuario</title>
    <link rel="stylesheet" href="../estilos/styleVerificar.css">
</head>
<body>

<header>
        <nav>

            <ul>
                
                <li><a href="../index.html">Home</a></li>
                <li><a href="#">Cadastrar Usuário</a></li>
                <li><a href="verificarUsuario.php">Procurar Usuário</a></li>

            </ul>
        </nav>
    </header>

    <main>
        <section>
            <form action="verifivarUsuario.php" method="post">
                <input type="email" name="email" id="email" placeholder="Informe seu email">
                <input type="submit" value="Buscar">
            </form>
        </section>

        <section>
            <?php
                if (isset($_POST["email"])) {
                    include("../conexao/conexao.php");
                    $email = $_POST["email"];

                    $sql = "SELECT * FROM usuarios WHERE email = ?";
                    $stmt = $conn->prepare($sql);

                    if ($stmt   ){
                        $stmt_->bind_param("s", $email);
                        $stmt->execute();
                        echo $stmt->get_result()-> fetch_assoc;
                    }
                }
            ?>
        </section>
    </main>

</body>
</html>