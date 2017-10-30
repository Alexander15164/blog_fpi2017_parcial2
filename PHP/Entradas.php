<?php
$entradas = [];
/* @var $_POST type */
if($_POST){
    if(file_exists('../JSON/publicaciones.json')){
        $todasLasEntradas = file_get_contents('../JSON/publicaciones.json');
        $TodasLasEntradasJSON = json_decode($todasLasEntradas, true);
        $entradas = ['titulo' => $_POST['titulo'],
            'publicacion' => $_POST['publicacion'],
            'categoria' => $_POST['categoria'],
            'autor' => $_POST['autor'],
            'tiempo' => $_POST['tiempo'],
            ];
        $TodasLasEntradasJSON[] = $entradas;
        $TodasLasEntradasPHP = json_encode($TodasLasEntradasJSON);
        file_put_contents('../JSON/publicaciones.json', $TodasLasEntradasPHP);
    }
}
?>
<script>
    window.location();
</script>
