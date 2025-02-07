<?php

header("Access-Control-Allow-Origin:*"); 
header("Access-Control-Allow-Methods: POST, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $data = isset($_POST['data']) ? trim($_POST['data']) : '';
    $Ve = isset($_POST['vE']) ? trim($_POST['vE']) : '';
    $Vp = isset($_POST['vP']) ? trim($_POST['vP']) : '';
    $Vc = isset($_POST['vC']) ? trim($_POST['vC']) : '';

    
    if (empty($data) || empty($Ve) || empty($Vp) || empty($Vc)) {
        http_response_code(400); 
        echo json_encode(["mensagem" => "Todos os campos são obrigatórios."]);
        exit;
    }

    $filename = 'dados_coletados.csv';

    $file = fopen($filename, 'a');

    
    if (!$file) {
        http_response_code(500); 
        echo json_encode(["mensagem" => "Erro ao abrir o arquivo CSV."]);
        exit;
    }
    
    if (filesize($filename) == 0) {
        fputcsv($file, ['Data', 'Valor em Espécie', 'Valor no Pix', 'Valor no Cartão', 'Hora']);
    }

    $Hora = date('H:i:s');

    fputcsv($file, [$data, $Ve, $Vp, $Vc, $Hora]);

    fclose($file);

    echo json_encode(["mensagem" => "Dados salvos com sucesso no arquivo $filename!"]);
} else {
    
    http_response_code(405); 
    echo json_encode(["mensagem" => "Método não permitido."]);
    exit;
}
?>