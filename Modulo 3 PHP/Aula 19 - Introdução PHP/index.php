<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=$, initial-scale=1.0">
    <title>introdução PHP</title>
</head>

<body>

    <h1>
        <?php
        echo "Olá Mundo";
        ?>
    </h1>

    <p>
        <?php

        $nome = "vari";
        $sobre = "avel";
        echo "Nome: $nome <br>";
        echo "Sobrenome: $sobre <br>";

        ?>
    </p>

    <h2>Constante em PHP</h2>
    <p>
        <?php

        const faculdade = "UMC";
        const cidade = "Mogi das Cruzes";

        echo "Faculdade" . faculdade . "<br>";
        echo "Cidade". cidade . "<br>";

        ?>
    </p>

</body>

</html>