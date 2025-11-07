<?php
    //Percorreser array
    $nomes = ["Caio", "Marcos", "Diego"];
    
    foreach ($nomes as $nome) {
        echo $nome . "<br>";
    }

    //Percorrer array associativo
    $notasAtividades = [
    "Caio" => 10, 
    "Marcos" =>8, 
    "Diego" => 9
    ];

    foreach ($notasAtividades as $nome => $nota) {
        echo $nome . " Nota " . $nota . "<br>";
    }
    
    //Percorrer dois array associativo
    $notasAtividades = [
    "Caio" => 10, 
    "Marcos" =>8, 
    "Diego" => 9
    ];

    $notasProvas = [
    "Caio" => 9, 
    "Marcos" => 8, 
    "Diego" => 10
    ];

    foreach ($notasAtividades as $nome => $nota) {
        $prova = $notasProvas[$nome];

        echo $nome . " Nota " . $nota . "<br>";
        echo $nome . " Nota Prova " . $prova . "<br>";
    }
?>