<?php
$comentarios = [];
/* @var $_POST type */
if($_POST){
    $ide = $_POST['identificacion']; 
    if(file_exists('../JSON/comentarios.json')){
        $todasLosUsuarios = file_get_contents('../JSON/comentarios.json');
        $todasLosUsuariosJSON = json_decode($todasLosUsuarios, true);
        $usuarios = ['usuario' => $_POST['usuario'],
            'cometario' => $_POST['comentario'],
            'identificador' => $_POST['identificador'],
            'puntuacion' => $_POST['puntuacion'],
            ];
        $todasLosUsuariosJSON[] = $usuarios;
        $todasLosUsuariosPHP = json_encode($todasLosUsuariosJSON);
        file_put_contents('../JSON/comentarios.json', $todasLosUsuariosPHP);
        header("Location: ../.html");
    }
}
?>

