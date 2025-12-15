<?php
$file = '../data/collapse.json';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $items = file_exists($file)
        ? json_decode(file_get_contents($file), true)
        : [];

    $items[] = $data;
    file_put_contents($file, json_encode($items));
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');
    echo file_exists($file)
        ? file_get_contents($file)
        : json_encode([]);
}
