<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $filename = 'dados_coletados.csv';

    
    if (!file_exists($filename)) {
        http_response_code(404); // Nop
        echo json_encode(["mensagem" => "Arquivo não encontrado."]);
        exit;
    }

    //Abrir arquivo para revisar
    $file = fopen($filename, 'r');
    $dados = [];

    
    while (($linha = fgetcsv($file)) !== false) {
        $dados[] = $linha; 
    }

    
    fclose($file);

    
    echo json_encode($dados);
} else {
    
    http_response_code(405); 
    echo json_encode(["mensagem" => "Método não permitido."]);
    exit;
}
?>